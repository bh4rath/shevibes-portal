// Story 1: Sleepy Lion's Gentle Dream
export function Slide1_1() {
  return (
    <svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Sky */}
      <rect width="400" height="320" fill="#fff9e6"/>
      {/* Sun */}
      <circle cx="320" cy="60" r="38" fill="#fde68a" opacity="0.9"/>
      <circle cx="320" cy="60" r="28" fill="#fbbf24"/>
      {/* Sun rays */}
      {[0,45,90,135,180,225,270,315].map((angle, i) => (
        <line key={i} x1="320" y1="60"
          x2={320 + 52 * Math.cos(angle * Math.PI / 180)}
          y2={60 + 52 * Math.sin(angle * Math.PI / 180)}
          stroke="#fde68a" strokeWidth="3" strokeLinecap="round"/>
      ))}
      {/* Ground */}
      <ellipse cx="200" cy="295" rx="200" ry="50" fill="#86efac"/>
      <rect x="0" y="270" width="400" height="60" fill="#86efac"/>
      {/* Tall grass blades */}
      {[30,60,80,110,150,200,250,290,330,360].map((x, i) => (
        <ellipse key={i} cx={x} cy={258} rx="5" ry="18" fill="#4ade80" transform={`rotate(${(i%3-1)*10},${x},258)`}/>
      ))}
      {/* Butterfly 1 */}
      <g transform="translate(100,120)">
        <ellipse cx="-12" cy="0" rx="14" ry="9" fill="#f9a8d4" opacity="0.85" transform="rotate(-20)"/>
        <ellipse cx="12" cy="0" rx="14" ry="9" fill="#f9a8d4" opacity="0.85" transform="rotate(20)"/>
        <ellipse cx="-8" cy="5" rx="9" ry="6" fill="#fce7f3" opacity="0.7" transform="rotate(-20)"/>
        <ellipse cx="8" cy="5" rx="9" ry="6" fill="#fce7f3" opacity="0.7" transform="rotate(20)"/>
        <ellipse cx="0" cy="0" rx="3" ry="7" fill="#6b21a8"/>
      </g>
      {/* Butterfly 2 */}
      <g transform="translate(270,90)">
        <ellipse cx="-10" cy="0" rx="11" ry="7" fill="#a78bfa" opacity="0.85" transform="rotate(-20)"/>
        <ellipse cx="10" cy="0" rx="11" ry="7" fill="#a78bfa" opacity="0.85" transform="rotate(20)"/>
        <ellipse cx="-6" cy="4" rx="7" ry="5" fill="#ede9fe" opacity="0.7" transform="rotate(-20)"/>
        <ellipse cx="6" cy="4" rx="7" ry="5" fill="#ede9fe" opacity="0.7" transform="rotate(20)"/>
        <ellipse cx="0" cy="0" rx="2" ry="5" fill="#4c1d95"/>
      </g>
      {/* Lion body */}
      <g transform="translate(160,200)" className="float">
        {/* Mane */}
        <circle cx="40" cy="-20" r="38" fill="#f59e0b"/>
        {/* Body */}
        <ellipse cx="40" cy="30" rx="45" ry="32" fill="#fcd34d"/>
        {/* Head */}
        <circle cx="40" cy="-20" r="30" fill="#fcd34d"/>
        {/* Ears */}
        <ellipse cx="15" cy="-46" rx="10" ry="12" fill="#fcd34d"/>
        <ellipse cx="65" cy="-46" rx="10" ry="12" fill="#fcd34d"/>
        <ellipse cx="15" cy="-46" rx="6" ry="8" fill="#f9a8d4"/>
        <ellipse cx="65" cy="-46" rx="6" ry="8" fill="#f9a8d4"/>
        {/* Eyes - wide open, happy */}
        <ellipse cx="28" cy="-22" rx="6" ry="7" fill="#fff"/>
        <ellipse cx="52" cy="-22" rx="6" ry="7" fill="#fff"/>
        <circle cx="29" cy="-21" r="4" fill="#92400e"/>
        <circle cx="53" cy="-21" r="4" fill="#92400e"/>
        <circle cx="30" cy="-22" r="2" fill="#1c1917"/>
        <circle cx="54" cy="-22" r="2" fill="#1c1917"/>
        {/* Nose */}
        <ellipse cx="40" cy="-8" rx="7" ry="5" fill="#f9a8d4"/>
        <ellipse cx="40" cy="-7" rx="4" ry="3" fill="#ec4899"/>
        {/* Smile */}
        <path d="M32,-2 Q40,6 48,-2" fill="none" stroke="#92400e" strokeWidth="2" strokeLinecap="round"/>
        {/* Whiskers */}
        <line x1="10" y1="-10" x2="30" y2="-8" stroke="#92400e" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="10" y1="-6" x2="30" y2="-6" stroke="#92400e" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="50" y1="-8" x2="70" y2="-10" stroke="#92400e" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="50" y1="-6" x2="70" y2="-6" stroke="#92400e" strokeWidth="1.5" strokeLinecap="round"/>
        {/* Legs */}
        <ellipse cx="10" cy="58" rx="12" ry="10" fill="#fcd34d"/>
        <ellipse cx="70" cy="58" rx="12" ry="10" fill="#fcd34d"/>
        {/* Tail */}
        <path d="M85,20 Q110,10 108,40 Q106,55 95,50" fill="none" stroke="#f59e0b" strokeWidth="5" strokeLinecap="round"/>
        <ellipse cx="92" cy="50" rx="9" ry="7" fill="#f59e0b"/>
      </g>
    </svg>
  );
}

export function Slide1_2() {
  return (
    <svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Sky — warmer, afternoon */}
      <rect width="400" height="320" fill="#fef3c7"/>
      {/* Sun lower */}
      <circle cx="340" cy="100" r="32" fill="#fde68a" opacity="0.8"/>
      <circle cx="340" cy="100" r="22" fill="#fbbf24"/>
      {/* Clouds */}
      <ellipse cx="100" cy="70" rx="45" ry="22" fill="#fff" opacity="0.7"/>
      <ellipse cx="140" cy="58" rx="35" ry="20" fill="#fff" opacity="0.7"/>
      <ellipse cx="70" cy="60" rx="30" ry="18" fill="#fff" opacity="0.7"/>
      {/* Ground */}
      <rect x="0" y="270" width="400" height="60" fill="#86efac"/>
      {/* Grass */}
      {[20,55,90,140,200,260,310,355].map((x,i) => (
        <ellipse key={i} cx={x} cy={262} rx="5" ry="16" fill="#4ade80" transform={`rotate(${(i%3-1)*8},${x},262)`}/>
      ))}
      {/* Lion sitting, tired */}
      <g transform="translate(140,185)">
        {/* Mane */}
        <circle cx="60" cy="10" r="42" fill="#f59e0b"/>
        {/* Body */}
        <ellipse cx="60" cy="60" rx="48" ry="36" fill="#fcd34d"/>
        {/* Head */}
        <circle cx="60" cy="10" r="33" fill="#fcd34d"/>
        {/* Ears */}
        <ellipse cx="32" cy="-18" rx="11" ry="13" fill="#fcd34d"/>
        <ellipse cx="88" cy="-18" rx="11" ry="13" fill="#fcd34d"/>
        <ellipse cx="32" cy="-18" rx="7" ry="9" fill="#f9a8d4"/>
        <ellipse cx="88" cy="-18" rx="7" ry="9" fill="#f9a8d4"/>
        {/* Heavy droopy eyes */}
        <ellipse cx="45" cy="8" rx="8" ry="5" fill="#fff"/>
        <ellipse cx="75" cy="8" rx="8" ry="5" fill="#fff"/>
        {/* Half-closed eyelids */}
        <path d="M37,5 Q45,2 53,5" fill="#f59e0b" stroke="none"/>
        <path d="M67,5 Q75,2 83,5" fill="#f59e0b" stroke="none"/>
        <circle cx="46" cy="9" r="4" fill="#92400e"/>
        <circle cx="76" cy="9" r="4" fill="#92400e"/>
        <circle cx="47" cy="10" r="2" fill="#1c1917"/>
        <circle cx="77" cy="10" r="2" fill="#1c1917"/>
        {/* ZZZ */}
        <text x="108" y="-10" fontSize="14" fill="#a78bfa" fontWeight="bold" opacity="0.8">z</text>
        <text x="118" y="-22" fontSize="11" fill="#a78bfa" fontWeight="bold" opacity="0.6">z</text>
        <text x="126" y="-32" fontSize="9" fill="#a78bfa" fontWeight="bold" opacity="0.4">z</text>
        {/* Nose */}
        <ellipse cx="60" cy="22" rx="7" ry="5" fill="#f9a8d4"/>
        <ellipse cx="60" cy="23" rx="4" ry="3" fill="#ec4899"/>
        {/* Relaxed mouth */}
        <path d="M52,28 Q60,33 68,28" fill="none" stroke="#92400e" strokeWidth="2" strokeLinecap="round"/>
        {/* Whiskers */}
        <line x1="25" y1="18" x2="50" y2="20" stroke="#92400e" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="25" y1="24" x2="50" y2="23" stroke="#92400e" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="70" y1="20" x2="95" y2="18" stroke="#92400e" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="70" y1="23" x2="95" y2="24" stroke="#92400e" strokeWidth="1.5" strokeLinecap="round"/>
        {/* Paws */}
        <ellipse cx="20" cy="90" rx="14" ry="11" fill="#fcd34d"/>
        <ellipse cx="100" cy="90" rx="14" ry="11" fill="#fcd34d"/>
        {/* Tail */}
        <path d="M108,50 Q135,40 132,65 Q130,78 118,74" fill="none" stroke="#f59e0b" strokeWidth="5" strokeLinecap="round"/>
        <ellipse cx="115" cy="74" rx="10" ry="8" fill="#f59e0b"/>
      </g>
    </svg>
  );
}

export function Slide1_3() {
  return (
    <svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Dusk sky */}
      <rect width="400" height="320" fill="#fed7aa"/>
      <rect width="400" height="160" fill="#fdba74" opacity="0.5"/>
      {/* Stream */}
      <ellipse cx="300" cy="290" rx="90" ry="22" fill="#bae6fd" opacity="0.8"/>
      <path d="M230,270 Q300,255 370,270 Q350,285 230,285 Z" fill="#7dd3fc" opacity="0.6"/>
      {/* Ripples */}
      <ellipse cx="290" cy="278" rx="18" ry="5" fill="none" stroke="#e0f2fe" strokeWidth="1.5" opacity="0.7"/>
      <ellipse cx="320" cy="283" rx="12" ry="4" fill="none" stroke="#e0f2fe" strokeWidth="1.5" opacity="0.7"/>
      {/* Ground */}
      <rect x="0" y="265" width="400" height="60" fill="#86efac"/>
      {/* Soft grass patch */}
      <ellipse cx="120" cy="268" rx="80" ry="18" fill="#a3e635" opacity="0.6"/>
      {/* Trees */}
      <rect x="30" y="160" width="12" height="110" fill="#a16207"/>
      <ellipse cx="36" cy="145" rx="30" ry="35" fill="#4ade80"/>
      <ellipse cx="20" cy="155" rx="22" ry="28" fill="#86efac"/>
      <ellipse cx="55" cy="150" rx="22" ry="28" fill="#4ade80"/>
      <rect x="340" y="175" width="10" height="95" fill="#a16207"/>
      <ellipse cx="345" cy="160" rx="26" ry="30" fill="#4ade80"/>
      {/* Grass blades */}
      {[80,110,145,185].map((x,i) => (
        <ellipse key={i} cx={x} cy={262} rx="4" ry="14" fill="#4ade80" transform={`rotate(${(i%2===0?-1:1)*12},${x},262)`}/>
      ))}
      {/* Lion padding softly — side view */}
      <g transform="translate(90,195)">
        {/* Mane */}
        <circle cx="100" cy="20" r="38" fill="#f59e0b"/>
        {/* Body */}
        <ellipse cx="60" cy="40" rx="55" ry="30" fill="#fcd34d"/>
        {/* Head */}
        <circle cx="100" cy="20" r="30" fill="#fcd34d"/>
        {/* Ear */}
        <ellipse cx="88" cy="-6" rx="9" ry="11" fill="#fcd34d"/>
        <ellipse cx="88" cy="-6" rx="6" ry="7" fill="#f9a8d4"/>
        {/* Eye — side, sleepy */}
        <ellipse cx="110" cy="18" rx="7" ry="5" fill="#fff"/>
        <path d="M103,15 Q110,12 117,15" fill="#f59e0b" stroke="none"/>
        <circle cx="111" cy="19" r="3.5" fill="#92400e"/>
        <circle cx="112" cy="20" r="1.8" fill="#1c1917"/>
        {/* Nose */}
        <ellipse cx="126" cy="24" rx="6" ry="4" fill="#f9a8d4"/>
        <ellipse cx="126" cy="25" rx="3.5" ry="2.5" fill="#ec4899"/>
        {/* Mouth */}
        <path d="M122,28 Q128,33 134,28" fill="none" stroke="#92400e" strokeWidth="1.5" strokeLinecap="round"/>
        {/* Legs walking */}
        <ellipse cx="20" cy="65" rx="10" ry="14" fill="#fcd34d" transform="rotate(15,20,65)"/>
        <ellipse cx="40" cy="72" rx="10" ry="14" fill="#fcd34d" transform="rotate(-10,40,72)"/>
        <ellipse cx="80" cy="72" rx="10" ry="14" fill="#fcd34d" transform="rotate(10,80,72)"/>
        <ellipse cx="100" cy="65" rx="10" ry="14" fill="#fcd34d" transform="rotate(-15,100,65)"/>
        {/* Tail */}
        <path d="M5,30 Q-20,20 -18,45 Q-16,58 -5,54" fill="none" stroke="#f59e0b" strokeWidth="5" strokeLinecap="round"/>
        <ellipse cx="-6" cy="53" rx="9" ry="7" fill="#f59e0b"/>
      </g>
    </svg>
  );
}

export function Slide1_4() {
  return (
    <svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Night sky */}
      <rect width="400" height="320" fill="#1e1b4b"/>
      <rect width="400" height="320" fill="url(#nightGrad1)"/>
      <defs>
        <radialGradient id="nightGrad1" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#312e81"/>
          <stop offset="100%" stopColor="#0f0a1e"/>
        </radialGradient>
      </defs>
      {/* Moon */}
      <circle cx="330" cy="60" r="30" fill="#fde68a" opacity="0.9"/>
      <circle cx="320" cy="55" r="26" fill="#1e1b4b" opacity="0.4"/>
      {/* Stars */}
      <circle cx="40" cy="30" r="2.5" fill="#fde68a" className="star"/>
      <circle cx="100" cy="50" r="2" fill="#fde68a" className="star"/>
      <circle cx="170" cy="25" r="3" fill="#fde68a" className="star"/>
      <circle cx="230" cy="45" r="2" fill="#fde68a" className="star"/>
      <circle cx="80" cy="80" r="1.5" fill="#fde68a" className="star"/>
      <circle cx="150" cy="70" r="2" fill="#fde68a" className="star"/>
      <circle cx="260" cy="30" r="2.5" fill="#fde68a" className="star"/>
      <circle cx="50" cy="110" r="1.5" fill="#fde68a" className="star"/>
      {/* Ground */}
      <rect x="0" y="255" width="400" height="70" fill="#14532d"/>
      {/* Soft glow spot on ground */}
      <ellipse cx="160" cy="265" rx="100" ry="20" fill="#fef3c7" opacity="0.1"/>
      {/* Grass */}
      {[30,70,110,200,260,310,360].map((x,i) => (
        <ellipse key={i} cx={x} cy={252} rx="4" ry="13" fill="#166534" transform={`rotate(${(i%3-1)*10},${x},252)`}/>
      ))}
      {/* Firefly */}
      <circle cx="280" cy="200" r="4" fill="#fde68a" opacity="0.8" className="glow"/>
      <circle cx="60" cy="180" r="3" fill="#fde68a" opacity="0.6" className="glow"/>
      {/* Lion sleeping curled up */}
      <g transform="translate(90,220)">
        {/* Body curled */}
        <ellipse cx="80" cy="30" rx="75" ry="30" fill="#fcd34d"/>
        {/* Mane */}
        <circle cx="30" cy="10" r="38" fill="#f59e0b" opacity="0.95"/>
        {/* Head resting on paws */}
        <circle cx="30" cy="10" r="28" fill="#fcd34d"/>
        {/* Ears */}
        <ellipse cx="10" cy="-14" rx="9" ry="10" fill="#fcd34d"/>
        <ellipse cx="10" cy="-14" rx="5" ry="7" fill="#f9a8d4"/>
        <ellipse cx="48" cy="-16" rx="9" ry="10" fill="#fcd34d"/>
        <ellipse cx="48" cy="-16" rx="5" ry="7" fill="#f9a8d4"/>
        {/* Closed eyes */}
        <path d="M16,8 Q24,4 32,8" fill="none" stroke="#92400e" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M30,8 Q38,4 46,8" fill="none" stroke="#92400e" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Smile */}
        <path d="M22,18 Q30,23 38,18" fill="none" stroke="#92400e" strokeWidth="1.5" strokeLinecap="round"/>
        {/* Nose */}
        <ellipse cx="30" cy="14" rx="6" ry="4" fill="#f9a8d4"/>
        <ellipse cx="30" cy="15" rx="3.5" ry="2.5" fill="#ec4899"/>
        {/* Paws under head */}
        <ellipse cx="0" cy="28" rx="20" ry="10" fill="#fcd34d"/>
        <ellipse cx="40" cy="30" rx="20" ry="10" fill="#fcd34d"/>
        {/* Tail curled around */}
        <path d="M155,10 Q168,0 165,25 Q162,42 148,38 Q138,36 140,26" fill="none" stroke="#f59e0b" strokeWidth="6" strokeLinecap="round"/>
        <circle cx="141" cy="25" r="9" fill="#f59e0b"/>
        {/* Dream bubble */}
        <circle cx="75" cy="-30" r="3" fill="#c7d2fe" opacity="0.7"/>
        <circle cx="82" cy="-42" r="5" fill="#c7d2fe" opacity="0.6"/>
        <ellipse cx="95" cy="-58" rx="18" ry="14" fill="#c7d2fe" opacity="0.5"/>
        {/* Butterfly in dream */}
        <ellipse cx="90" cy="-60" rx="7" ry="5" fill="#f9a8d4" opacity="0.8" transform="rotate(-20,90,-60)"/>
        <ellipse cx="100" cy="-60" rx="7" ry="5" fill="#f9a8d4" opacity="0.8" transform="rotate(20,100,-60)"/>
        <ellipse cx="95" cy="-60" rx="2" ry="5" fill="#6b21a8" opacity="0.7"/>
      </g>
    </svg>
  );
}
