import { stories } from '../stories';

export default function HomeScreen({ onSelectStory }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="text-5xl mb-3">🦁</div>
        <h1 className="text-3xl font-bold text-amber-800 leading-tight">
          Lion Bedtime Stories
        </h1>
        <p className="text-amber-600 mt-2 text-base">
          Sweet dreams begin here ✨
        </p>
      </div>

      {/* Story cards */}
      <div className="flex flex-col gap-4 max-w-md mx-auto pb-8">
        {stories.map((story, index) => (
          <button
            key={story.id}
            onClick={() => onSelectStory(story)}
            className={`
              w-full text-left rounded-3xl p-5 border-2 ${story.borderColor}
              bg-gradient-to-r ${story.color}
              shadow-md active:scale-95 transition-all duration-200
              hover:shadow-lg hover:scale-[1.02]
            `}
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white bg-opacity-70 flex items-center justify-center flex-shrink-0 shadow-sm">
                <span className="text-3xl">{story.emoji}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold text-amber-600 uppercase tracking-wide mb-1">
                  Story {index + 1} · 4 slides
                </div>
                <div className="text-lg font-bold text-amber-900 leading-snug">
                  {story.title}
                </div>
                <div className="flex items-center gap-1 mt-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-amber-400 opacity-50" />
                  ))}
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-white bg-opacity-60 flex items-center justify-center flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#92400e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="text-center text-amber-400 text-sm pb-4">
        🌙 Made with love for little dreamers
      </div>
    </div>
  );
}
