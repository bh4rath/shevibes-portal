// Story 3: Counting Stars with Lion
export function Slide3_1() {
  return (
    <svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="deepNight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0f172a"/>
          <stop offset="60%" stopColor="#1e1b4b"/>
          <stop offset="100%" stopColor="#312e81"/>
        </linearGradient>
      </defs>
      <rect width="400" height="320" fill="url(#deepNight)"/>
      {/* A few early stars */}
      <circle cx="180" cy="40" r="2" fill="#fde68a" opacity="0.5" className="star"/>
      <circle cx="280" cy="30" r="1.5" fill="#fde68a" opacity="0.4" className="star"/>
      <circle cx="100" cy="55" r="1.5" fill="#fde68a" opacity="0.4" className="star"/>
      {/* Ground */}
      <rect x="0" y="255" width="400" height="70" fill="#14532d"/>
      <ellipse cx="200" cy="257" rx="200" ry="22" fill="#166534"/>
      {/* Small hill */}
      <ellipse cx="200" cy="260" rx="120" ry="35" fill="#15803d"/>
      {/* Lion lying on back, looking up, amazed */}
      <g transform="translate(130,195)">
        {/* Body lying down */}
        <ellipse cx="70" cy="45" rx="72" ry="28" fill="#fcd34d"/>
        {/* Mane */}
        <circle cx="70" cy="20" r="40" fill="#f59e0b"/>
        {/* Head */}
        <circle cx="70" cy="20" r="30" fill="#fcd34d"/>
        {/* Ears */}
        <ellipse cx="46" cy="-5" rx="10" ry="12" fill="#fcd34d"/>
        <ellipse cx="46" cy="-5" rx="6" ry="8" fill="#f9a8d4"/>
        <ellipse cx="94" cy="-5" rx="10" ry="12" fill="#fcd34d"/>
        <ellipse cx="94" cy="-5" rx="6" ry="8" fill="#f9a8d4"/>
        {/* Wide amazed eyes */}
        <ellipse cx="56" cy="18" rx="9" ry="10" fill="#fff"/>
        <ellipse cx="84" cy="18" rx="9" ry="10" fill="#fff"/>
        <circle cx="57" cy="17" r="6" fill="#92400e"/>
        <circle cx="85" cy="17" r="6" fill="#92400e"/>
        <circle cx="58" cy="16" r="3" fill="#1c1917"/>
        <circle cx="86" cy="16" r="3" fill="#1c1917"/>
        {/* Star reflections in eyes */}
        <circle cx="60" cy="14" r="1.5" fill="#fde68a" opacity="0.8"/>
        <circle cx="88" cy="14" r="1.5" fill="#fde68a" opacity="0.8"/>
        {/* Nose */}
        <ellipse cx="70" cy="30" rx="7" ry="5" fill="#f9a8d4"/>
        <ellipse cx="70" cy="31" rx="4" ry="3" fill="#ec4899"/>
        {/* Open mouth O — amazed */}
        <ellipse cx="70" cy="40" rx="6" ry="5" fill="#92400e"/>
        <ellipse cx="70" cy="40" rx="4" ry="3" fill="#f9a8d4"/>
        {/* Paws up in air */}
        <ellipse cx="20" cy="30" rx="14" ry="10" fill="#fcd34d" transform="rotate(-30,20,30)"/>
        <ellipse cx="120" cy="30" rx="14" ry="10" fill="#fcd34d" transform="rotate(30,120,30)"/>
        {/* Back legs */}
        <ellipse cx="25" cy="65" rx="12" ry="8" fill="#fcd34d"/>
        <ellipse cx="115" cy="65" rx="12" ry="8" fill="#fcd34d"/>
        {/* Tail */}
        <path d="M0,50 Q-20,60 -15,75 Q-10,85 0,80" fill="none" stroke="#f59e0b" strokeWidth="5" strokeLinecap="round"/>
        <circle cx="1" cy="79" r="8" fill="#f59e0b"/>
      </g>
    </svg>
  );
}

export function Slide3_2() {
  return (
    <svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <radialGradient id="starGlow1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fde68a" stopOpacity="0.4"/>
          <stop offset="100%" stopColor="#fde68a" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <rect width="400" height="320" fill="#0f172a"/>
      {/* First stars appearing with glow */}
      {[[80,50],[200,30],[320,60],[140,85],[260,80]].map(([x,y],i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="16" fill="url(#starGlow1)"/>
          <circle cx={x} cy={y} r="3.5" fill="#fde68a" className="star"/>
          {/* 4-point sparkle */}
          <line x1={x} y1={y-8} x2={x} y2={y+8} stroke="#fde68a" strokeWidth="1" opacity="0.6"/>
          <line x1={x-8} y1={y} x2={x+8} y2={y} stroke="#fde68a" strokeWidth="1" opacity="0.6"/>
        </g>
      ))}
      {/* Dim stars */}
      {[[40,100],[170,110],[300,95],[370,40],[50,130]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="1.5" fill="#fde68a" opacity="0.3" className="star"/>
      ))}
      {/* Ground */}
      <rect x="0" y="255" width="400" height="70" fill="#14532d"/>
      <ellipse cx="200" cy="258" rx="200" ry="22" fill="#15803d"/>
      {/* Numbers floating near stars */}
      <text x="66" y="42" fontSize="14" fill="#fde68a" fontWeight="bold" opacity="0.9">1</text>
      <text x="186" y="22" fontSize="14" fill="#fde68a" fontWeight="bold" opacity="0.9">2</text>
      <text x="306" y="52" fontSize="14" fill="#fde68a" fontWeight="bold" opacity="0.9">3</text>
      {/* Lion sitting, pointing up with paw */}
      <g transform="translate(140,192)">
        {/* Mane */}
        <circle cx="60" cy="8" r="40" fill="#f59e0b"/>
        {/* Body */}
        <ellipse cx="60" cy="55" rx="48" ry="32" fill="#fcd34d"/>
        {/* Head */}
        <circle cx="60" cy="8" r="32" fill="#fcd34d"/>
        {/* Ears */}
        <ellipse cx="34" cy="-18" rx="10" ry="12" fill="#fcd34d"/>
        <ellipse cx="34" cy="-18" rx="6" ry="8" fill="#f9a8d4"/>
        <ellipse cx="86" cy="-18" rx="10" ry="12" fill="#fcd34d"/>
        <ellipse cx="86" cy="-18" rx="6" ry="8" fill="#f9a8d4"/>
        {/* Delighted eyes */}
        <ellipse cx="46" cy="6" rx="8" ry="9" fill="#fff"/>
        <ellipse cx="74" cy="6" rx="8" ry="9" fill="#fff"/>
        <circle cx="47" cy="5" r="5" fill="#92400e"/>
        <circle cx="75" cy="5" r="5" fill="#92400e"/>
        <circle cx="48" cy="4" r="2.5" fill="#1c1917"/>
        <circle cx="76" cy="4" r="2.5" fill="#1c1917"/>
        {/* Nose */}
        <ellipse cx="60" cy="20" rx="7" ry="5" fill="#f9a8d4"/>
        <ellipse cx="60" cy="21" rx="4" ry="3" fill="#ec4899"/>
        {/* Happy open mouth */}
        <path d="M50,27 Q60,35 70,27" fill="none" stroke="#92400e" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Arm/paw pointing up */}
        <ellipse cx="8" cy="40" rx="10" ry="22" fill="#fcd34d" transform="rotate(-35,8,40)"/>
        <ellipse cx="2" cy="20" rx="9" ry="8" fill="#fcd34d" transform="rotate(-35,2,20)"/>
        {/* Other paw */}
        <ellipse cx="112" cy="78" rx="16" ry="10" fill="#fcd34d"/>
        {/* Tail */}
        <path d="M108,50 Q130,38 128,62 Q126,75 114,72" fill="none" stroke="#f59e0b" strokeWidth="5" strokeLinecap="round"/>
        <ellipse cx="111" cy="72" rx="9" ry="7" fill="#f59e0b"/>
      </g>
    </svg>
  );
}

export function Slide3_3() {
  return (
    <svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <radialGradient id="milkyWay" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#4338ca" stopOpacity="0.3"/>
          <stop offset="100%" stopColor="#1e1b4b" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <rect width="400" height="320" fill="#0f0a1e"/>
      {/* Milky way band */}
      <rect width="400" height="320" fill="url(#milkyWay)"/>
      {/* Many twinkling stars */}
      {[
        [20,15],[50,35],[80,18],[110,42],[140,12],[170,38],[200,22],[230,48],[260,15],[290,40],[320,20],[350,45],[380,25],
        [35,65],[65,80],[95,58],[125,75],[155,55],[185,72],[215,60],[245,82],[275,65],[305,78],[335,62],[365,80],[395,55],
        [15,105],[45,118],[75,95],[105,112],[135,98],[165,115],[195,100],[225,120],[255,105],[285,118],[315,95],[345,115],
        [30,150],[70,140],[110,155],[150,142],[190,152],[230,138],[270,150],[310,143],[350,155],[388,140],
      ].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r={i%5===0?2.2:i%3===0?1.5:1} fill={i%7===0?"#bfdbfe":"#fde68a"}
          opacity={0.4+Math.sin(i*0.7)*0.4} className="star"/>
      ))}
      {/* A few sparkles */}
      {[[60,30],[200,50],[340,28],[120,70],[280,80]].map(([x,y],i) => (
        <g key={i}>
          <line x1={x} y1={y-6} x2={x} y2={y+6} stroke="#fde68a" strokeWidth="1" opacity="0.7"/>
          <line x1={x-6} y1={y} x2={x+6} y2={y} stroke="#fde68a" strokeWidth="1" opacity="0.7"/>
        </g>
      ))}
      {/* Ground */}
      <rect x="0" y="252" width="400" height="72" fill="#14532d"/>
      <ellipse cx="200" cy="254" rx="200" ry="22" fill="#15803d"/>
      {/* Lion lying peacefully, sleepy, eyes half closed */}
      <g transform="translate(110,205)">
        {/* Body */}
        <ellipse cx="90" cy="38" rx="85" ry="30" fill="#fcd34d"/>
        {/* Mane */}
        <circle cx="35" cy="15" r="38" fill="#f59e0b"/>
        {/* Head resting on front paws */}
        <circle cx="35" cy="15" r="28" fill="#fcd34d"/>
        {/* Ears */}
        <ellipse cx="14" cy="-8" rx="9" ry="11" fill="#fcd34d"/>
        <ellipse cx="14" cy="-8" rx="5" ry="7" fill="#f9a8d4"/>
        <ellipse cx="54" cy="-10" rx="9" ry="11" fill="#fcd34d"/>
        <ellipse cx="54" cy="-10" rx="5" ry="7" fill="#f9a8d4"/>
        {/* Heavily drooping eyes */}
        <ellipse cx="22" cy="13" rx="7" ry="5" fill="#fff"/>
        <ellipse cx="46" cy="13" rx="7" ry="5" fill="#fff"/>
        <path d="M15,10 Q22,7 29,10" fill="#fcd34d" stroke="none"/>
        <path d="M39,10 Q46,7 53,10" fill="#fcd34d" stroke="none"/>
        <circle cx="22" cy="14" r="3.5" fill="#92400e"/>
        <circle cx="46" cy="14" r="3.5" fill="#92400e"/>
        {/* Star in eye */}
        <circle cx="24" cy="12" r="1.5" fill="#fde68a" opacity="0.9"/>
        <circle cx="48" cy="12" r="1.5" fill="#fde68a" opacity="0.9"/>
        {/* Nose */}
        <ellipse cx="35" cy="24" rx="6" ry="4" fill="#f9a8d4"/>
        {/* Gentle smile */}
        <path d="M28,30 Q35,35 42,30" fill="none" stroke="#92400e" strokeWidth="2" strokeLinecap="round"/>
        {/* Front paws */}
        <ellipse cx="2" cy="42" rx="18" ry="10" fill="#fcd34d"/>
        <ellipse cx="40" cy="46" rx="18" ry="10" fill="#fcd34d"/>
        {/* Back paws */}
        <ellipse cx="130" cy="58" rx="20" ry="11" fill="#fcd34d"/>
        <ellipse cx="170" cy="52" rx="20" ry="11" fill="#fcd34d"/>
        {/* Tail curled */}
        <path d="M175,30 Q192,18 190,40 Q188,54 174,50 Q165,48 167,38" fill="none" stroke="#f59e0b" strokeWidth="6" strokeLinecap="round"/>
        <circle cx="168" cy="37" r="10" fill="#f59e0b"/>
        {/* ZZZ */}
        <text x="65" y="-12" fontSize="15" fill="#818cf8" fontWeight="bold" opacity="0.8">z</text>
        <text x="77" y="-24" fontSize="12" fill="#818cf8" fontWeight="bold" opacity="0.6">z</text>
        <text x="87" y="-34" fontSize="10" fill="#818cf8" fontWeight="bold" opacity="0.4">z</text>
      </g>
    </svg>
  );
}

export function Slide3_4() {
  return (
    <svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <radialGradient id="dreamSpace" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#4338ca"/>
          <stop offset="50%" stopColor="#1e1b4b"/>
          <stop offset="100%" stopColor="#0f0a1e"/>
        </radialGradient>
      </defs>
      <rect width="400" height="320" fill="url(#dreamSpace)"/>
      {/* Dreamy stars everywhere */}
      {Array.from({length: 40}).map((_,i) => {
        const x = (i * 47 + 30) % 390;
        const y = (i * 73 + 20) % 290;
        return <circle key={i} cx={x} cy={y} r={i%4===0?2.5:1.5} fill="#fde68a" opacity={0.3+i%3*0.2} className="star"/>;
      })}
      {/* Big dreamy stars */}
      {[[70,60],[190,35],[320,70],[130,130],[280,110],[50,200],[360,160]].map(([x,y],i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="25" fill="#fde68a" opacity="0.05"/>
          <circle cx={x} cy={y} r="4" fill="#fde68a" opacity="0.9" className="star"/>
          <line x1={x} y1={y-10} x2={x} y2={y+10} stroke="#fde68a" strokeWidth="1.5" opacity="0.6"/>
          <line x1={x-10} y1={y} x2={x+10} y2={y} stroke="#fde68a" strokeWidth="1.5" opacity="0.6"/>
          <line x1={x-7} y1={y-7} x2={x+7} y2={y+7} stroke="#fde68a" strokeWidth="1" opacity="0.4"/>
          <line x1={x+7} y1={y-7} x2={x-7} y2={y+7} stroke="#fde68a" strokeWidth="1" opacity="0.4"/>
        </g>
      ))}
      {/* Lion floating among stars - fluffy cloud-like */}
      <g transform="translate(120,180)" className="float">
        {/* Dream cloud */}
        <ellipse cx="80" cy="60" rx="95" ry="40" fill="#c7d2fe" opacity="0.15"/>
        {/* Mane */}
        <circle cx="50" cy="20" r="40" fill="#f59e0b" opacity="0.95"/>
        {/* Body */}
        <ellipse cx="80" cy="60" rx="70" ry="28" fill="#fcd34d" opacity="0.95"/>
        {/* Head */}
        <circle cx="50" cy="20" r="30" fill="#fcd34d"/>
        {/* Ears */}
        <ellipse cx="28" cy="-5" rx="9" ry="11" fill="#fcd34d"/>
        <ellipse cx="28" cy="-5" rx="5" ry="7" fill="#f9a8d4"/>
        <ellipse cx="70" cy="-7" rx="9" ry="11" fill="#fcd34d"/>
        <ellipse cx="70" cy="-7" rx="5" ry="7" fill="#f9a8d4"/>
        {/* Closed eyes — smile lines */}
        <path d="M32,18 Q41,13 50,18" fill="none" stroke="#92400e" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M50,18 Q59,13 68,18" fill="none" stroke="#92400e" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Big smile */}
        <path d="M38,28 Q50,37 62,28" fill="none" stroke="#92400e" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Nose */}
        <ellipse cx="50" cy="24" rx="6" ry="4" fill="#f9a8d4"/>
        {/* Paws */}
        <ellipse cx="18" cy="55" rx="16" ry="10" fill="#fcd34d"/>
        <ellipse cx="142" cy="55" rx="16" ry="10" fill="#fcd34d"/>
        {/* Back paws */}
        <ellipse cx="30" cy="78" rx="14" ry="9" fill="#fcd34d"/>
        <ellipse cx="130" cy="78" rx="14" ry="9" fill="#fcd34d"/>
        {/* Tail floating */}
        <path d="M155,45 Q175,30 172,55 Q170,68 156,64" fill="none" stroke="#f59e0b" strokeWidth="6" strokeLinecap="round"/>
        <circle cx="157" cy="63" r="10" fill="#f59e0b"/>
        {/* Star sparkles around */}
        <circle cx="-15" cy="20" r="3" fill="#fde68a" className="star" opacity="0.8"/>
        <circle cx="175" cy="25" r="3" fill="#fde68a" className="star" opacity="0.8"/>
        <circle cx="80" cy="-20" r="2.5" fill="#fde68a" className="star" opacity="0.8"/>
      </g>
    </svg>
  );
}
