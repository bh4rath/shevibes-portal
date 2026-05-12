import { useState, useEffect, useRef, useCallback } from 'react';
import { Home, ChevronLeft, ChevronRight, Volume2, VolumeX, Play, Pause } from 'lucide-react';
import {
  Slide1_1, Slide1_2, Slide1_3, Slide1_4,
  Slide2_1, Slide2_2, Slide2_3, Slide2_4,
  Slide3_1, Slide3_2, Slide3_3, Slide3_4,
  Slide4_1, Slide4_2, Slide4_3, Slide4_4,
  Slide5_1, Slide5_2, Slide5_3, Slide5_4,
} from '../illustrations';

const ILLUSTRATIONS = {
  1: [Slide1_1, Slide1_2, Slide1_3, Slide1_4],
  2: [Slide2_1, Slide2_2, Slide2_3, Slide2_4],
  3: [Slide3_1, Slide3_2, Slide3_3, Slide3_4],
  4: [Slide4_1, Slide4_2, Slide4_3, Slide4_4],
  5: [Slide5_1, Slide5_2, Slide5_3, Slide5_4],
};

export default function StoryScreen({ story, onHome }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [soundOn, setSoundOn] = useState(true);
  const [animKey, setAnimKey] = useState(0);
  const timerRef = useRef(null);
  const audioCtxRef = useRef(null);

  const slides = story.slides;
  const illustrations = ILLUSTRATIONS[story.id];
  const Illustration = illustrations[currentSlide];

  const goToSlide = useCallback((index) => {
    if (index < 0 || index >= slides.length) return;
    setCurrentSlide(index);
    setAnimKey(k => k + 1);
  }, [slides.length]);

  const playChime = useCallback(() => {
    if (!soundOn) return;
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      const ctx = audioCtxRef.current;
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();
      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(523.25, ctx.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(659.25, ctx.currentTime + 0.15);
      gainNode.gain.setValueAtTime(0.12, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);
      oscillator.start(ctx.currentTime);
      oscillator.stop(ctx.currentTime + 0.6);
    } catch {
      // AudioContext not available
    }
  }, [soundOn]);

  const advanceSlide = useCallback(() => {
    setCurrentSlide(prev => {
      const next = prev + 1;
      if (next >= slides.length) {
        setIsPlaying(false);
        return prev;
      }
      setAnimKey(k => k + 1);
      return next;
    });
  }, [slides.length]);

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (isPlaying) {
      const duration = slides[currentSlide]?.duration || 4000;
      timerRef.current = setTimeout(advanceSlide, duration);
    }
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [isPlaying, currentSlide, advanceSlide, slides]);

  useEffect(() => {
    if (animKey > 0) playChime();
  }, [animKey, playChime]);

  const handlePrev = () => { if (currentSlide > 0) goToSlide(currentSlide - 1); };
  const handleNext = () => { if (currentSlide < slides.length - 1) goToSlide(currentSlide + 1); };

  const togglePlay = () => {
    if (!isPlaying && currentSlide === slides.length - 1) {
      goToSlide(0);
      setIsPlaying(true);
    } else {
      setIsPlaying(p => !p);
    }
  };

  const slide = slides[currentSlide];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 to-purple-950 flex flex-col">
      <div className="flex items-center justify-between px-4 pt-4 pb-2 flex-shrink-0">
        <button onClick={onHome} className="w-10 h-10 rounded-full bg-white bg-opacity-15 flex items-center justify-center active:scale-90 transition-transform" aria-label="Go home">
          <Home size={18} color="white"/>
        </button>
        <div className="text-center">
          <div className="text-white text-xs font-semibold opacity-70 uppercase tracking-wide">
            {story.emoji} {story.title}
          </div>
        </div>
        <button onClick={() => setSoundOn(s => !s)} className="w-10 h-10 rounded-full bg-white bg-opacity-15 flex items-center justify-center active:scale-90 transition-transform" aria-label={soundOn ? 'Mute sound' : 'Unmute sound'}>
          {soundOn ? <Volume2 size={18} color="white"/> : <VolumeX size={18} color="#aaa"/>}
        </button>
      </div>

      <div className="mx-4 mb-3 flex-shrink-0">
        <div className="bg-amber-50 bg-opacity-95 rounded-2xl px-4 py-3 shadow-lg border border-amber-200">
          <div className="text-xs font-bold text-amber-600 uppercase tracking-wide mb-1">
            📖 Read aloud to your baby
          </div>
          <p className="text-amber-900 text-sm leading-relaxed font-medium">{slide.narration}</p>
        </div>
      </div>

      <div className="flex-1 mx-4 min-h-0 flex items-center justify-center">
        <div key={animKey} className="w-full rounded-3xl overflow-hidden shadow-2xl bg-white bg-opacity-5 slide-enter" style={{ maxHeight: '280px', aspectRatio: '400/320' }}>
          <Illustration />
        </div>
      </div>

      <div className="mx-4 mt-3 flex-shrink-0">
        <div className="bg-white bg-opacity-15 rounded-2xl px-4 py-3 text-center border border-white border-opacity-20">
          <p className="text-white text-xl font-bold leading-snug tracking-wide">{slide.babyText}</p>
        </div>
      </div>

      <div className="flex justify-center gap-3 mt-4 flex-shrink-0">
        {slides.map((_, i) => (
          <button key={i} onClick={() => goToSlide(i)} className="transition-all duration-300" aria-label={`Go to slide ${i + 1}`}>
            <div className={`rounded-full transition-all duration-300 ${
              i === currentSlide ? 'w-6 h-3 bg-amber-300' : i < currentSlide ? 'w-3 h-3 bg-amber-400 opacity-80' : 'w-3 h-3 bg-white opacity-30'
            }`} />
          </button>
        ))}
      </div>

      <div className="flex items-center justify-between px-6 py-5 flex-shrink-0">
        <button onClick={handlePrev} disabled={currentSlide === 0} className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-200 active:scale-90 ${currentSlide === 0 ? 'bg-white bg-opacity-10 opacity-30' : 'bg-white bg-opacity-20 hover:bg-opacity-30 shadow-lg'}`} aria-label="Previous slide">
          <ChevronLeft size={28} color="white"/>
        </button>
        <button onClick={togglePlay} className="rounded-full bg-amber-400 hover:bg-amber-300 flex items-center justify-center shadow-xl active:scale-90 transition-all duration-200" style={{ width: '72px', height: '72px' }} aria-label={isPlaying ? 'Pause' : 'Play'}>
          {isPlaying ? <Pause size={30} color="#1c1917" fill="#1c1917"/> : <Play size={30} color="#1c1917" fill="#1c1917" style={{ marginLeft: '3px' }}/>}
        </button>
        <button onClick={handleNext} disabled={currentSlide === slides.length - 1} className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-200 active:scale-90 ${currentSlide === slides.length - 1 ? 'bg-white bg-opacity-10 opacity-30' : 'bg-white bg-opacity-20 hover:bg-opacity-30 shadow-lg'}`} aria-label="Next slide">
          <ChevronRight size={28} color="white"/>
        </button>
      </div>
    </div>
  );
}
