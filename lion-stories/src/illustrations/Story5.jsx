// Story 5: Lion's Magical Night Garden
export function Slide5_1() {
  return (
    <svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Twilight sky */}
      <rect width="400" height="320" fill="#e0e7ff"/>
      <rect width="400" height="180" fill="#c7d2fe" opacity="0.5"/>
      {/* Moon peeking */}
      <circle cx="340" cy="50" r="24" fill="#fde68a" opacity="0.8"/>
      {/* Garden path */}
      <ellipse cx="200" cy="295" rx="50" ry="15" fill="#d4d4aa"/>
      <rect x="185" y="190" width="30" height="110" fill="#d4d4aa" rx="8"/>
      {/* Garden gate */}
      {/* Gate posts */}
      <rect x="158" y="170" width="14" height="80" rx="4" fill="#a16207"/>
      <rect x="228" y="170" width="14" height="80" rx="4" fill="#a16207"/>
      {/* Gate arch */}
      <path d="M158,170 Q200,130 242,170" fill="none" stroke="#a16207" strokeWidth="8" strokeLinecap="round"/>
      {/* Vine on arch */}
      <path d="M158,170 Q200,135 242,170" fill="none" stroke="#4ade80" strokeWidth="4" strokeDasharray="8,4"/>
      {/* Flowers on gate arch */}
      {[[170,152],[200,132],[230,152]].map(([x,y],i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="8" fill={["#f9a8d4","#fde68a","#c4b5fd"][i]}/>
          <circle cx={x} cy={y} r="3" fill="#fef3c7"/>
        </g>
      ))}
      {/* Gate bars */}
      <line x1="172" y1="172" x2="172" y2="245" stroke="#a16207" strokeWidth="5"/>
      <line x1="192" y1="172" x2="192" y2="245" stroke="#a16207" strokeWidth="5"/>
      <line x1="208" y1="172" x2="208" y2="245" stroke="#a16207" strokeWidth="5"/>
      <line x1="228" y1="172" x2="228" y2="245" stroke="#a16207" strokeWidth="5"/>
      {/* Horizontal bar */}
      <line x1="162" y1="210" x2="238" y2="210" stroke="#a16207" strokeWidth="5"/>
      {/* Ground */}
      <rect x="0" y="270" width="400" height="55" fill="#4ade80"/>
      <rect x="0" y="255" width="160" height="50" fill="#86efac"/>
      <rect x="240" y="255" width="160" height="50" fill="#86efac"/>
      {/* Flowers outside gate */}
      {[[30,250],[70,240],[320,250],[360,240]].map(([x,y],i) => (
        <g key={i}>
          <rect x={x-2} y={y} width="4" height="20" fill="#4ade80"/>
          <circle cx={x} cy={y} r="9" fill={["#f9a8d4","#fde68a","#c4b5fd","#fbcfe8"][i]}/>
          <circle cx={x} cy={y} r="4" fill="#fef3c7"/>
        </g>
      ))}
      {/* Lion approaching gate, amazed */}
      <g transform="translate(100,215)">
        {/* Mane */}
        <circle cx="55" cy="8" r="38" fill="#f59e0b"/>
        {/* Body */}
        <ellipse cx="40" cy="50" rx="44" ry="28" fill="#fcd34d"/>
        {/* Head looking at gate */}
        <circle cx="55" cy="8" r="30" fill="#fcd34d"/>
        {/* Ears */}
        <ellipse cx="34" cy="-16" rx="10" ry="11" fill="#fcd34d"/>
        <ellipse cx="34" cy="-16" rx="6" ry="7" fill="#f9a8d4"/>
        <ellipse cx="76" cy="-18" rx="10" ry="11" fill="#fcd34d"/>
        <ellipse cx="76" cy="-18" rx="6" ry="7" fill="#f9a8d4"/>
        {/* Wide amazed eyes */}
        <ellipse cx="42" cy="5" rx="8" ry="9" fill="#fff"/>
        <ellipse cx="68" cy="5" rx="8" ry="9" fill="#fff"/>
        <circle cx="44" cy="4" r="5" fill="#92400e"/>
        <circle cx="70" cy="4" r="5" fill="#92400e"/>
        <circle cx="45" cy="3" r="2.5" fill="#1c1917"/>
        <circle cx="71" cy="3" r="2.5" fill="#1c1917"/>
        {/* Nose */}
        <ellipse cx="55" cy="18" rx="7" ry="5" fill="#f9a8d4"/>
        <ellipse cx="55" cy="19" rx="4" ry="3" fill="#ec4899"/>
        {/* Open amazed mouth */}
        <path d="M46,24 Q55,32 64,24" fill="none" stroke="#92400e" strokeWidth="2" strokeLinecap="round"/>
        {/* Paw on gate */}
        <ellipse cx="90" cy="40" rx="12" ry="8" fill="#fcd34d" transform="rotate(20,90,40)"/>
        {/* Legs */}
        <ellipse cx="20" cy="72" rx="12" ry="8" fill="#fcd34d"/>
        <ellipse cx="60" cy="72" rx="12" ry="8" fill="#fcd34d"/>
        {/* Tail */}
        <path d="M-5,38 Q-28,26 -25,48 Q-22,62 -10,58" fill="none" stroke="#f59e0b" strokeWidth="5" strokeLinecap="round"/>
        <circle cx="-10" cy="57" r="8" fill="#f59e0b"/>
      </g>
    </svg>
  );
}

export function Slide5_2() {
  return (
    <svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <radialGradient id="flowerGlow1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fde68a" stopOpacity="0.5"/>
          <stop offset="100%" stopColor="#fde68a" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="flowerGlow2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f9a8d4" stopOpacity="0.5"/>
          <stop offset="100%" stopColor="#f9a8d4" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="flowerGlow3" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.5"/>
          <stop offset="100%" stopColor="#a78bfa" stopOpacity="0"/>
        </radialGradient>
      </defs>
      {/* Night garden sky */}
      <rect width="400" height="320" fill="#1e1b4b"/>
      {/* Stars */}
      {[[40,25],[100,15],[180,30],[250,18],[320,28],[360,12],[70,55],[200,50],[330,55]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="1.5" fill="#fde68a" opacity="0.6" className="star"/>
      ))}
      {/* Ground */}
      <rect x="0" y="255" width="400" height="70" fill="#14532d"/>
      {/* Glowing flowers — large, magical */}
      {[
        {x:60, y:230, color:"#fde68a", glow:"url(#flowerGlow1)", petals:"#fbbf24", size:22, stemH:45},
        {x:120, y:215, color:"#f9a8d4", glow:"url(#flowerGlow2)", petals:"#ec4899", size:18, stemH:35},
        {x:200, y:225, color:"#a78bfa", glow:"url(#flowerGlow3)", petals:"#7c3aed", size:20, stemH:40},
        {x:280, y:218, color:"#f9a8d4", glow:"url(#flowerGlow2)", petals:"#db2777", size:18, stemH:36},
        {x:340, y:228, color:"#fde68a", glow:"url(#flowerGlow1)", petals:"#d97706", size:22, stemH:45},
      ].map(({x,y,color,glow,petals,size,stemH},i) => (
        <g key={i} className="glow">
          {/* Glow aura */}
          <circle cx={x} cy={y} r={size+20} fill={glow} opacity="0.8"/>
          {/* Stem */}
          <line x1={x} y1={y} x2={x} y2={y+stemH} stroke="#4ade80" strokeWidth="3" strokeLinecap="round"/>
          {/* Leaf */}
          <ellipse cx={x-10} cy={y+stemH/2} rx="10" ry="5" fill="#4ade80" transform={`rotate(-30,${x-10},${y+stemH/2})`}/>
          {/* Petals */}
          {[0,60,120,180,240,300].map((angle,j) => (
            <ellipse key={j} cx={x + (size-4)*Math.cos(angle*Math.PI/180)} cy={y + (size-4)*Math.sin(angle*Math.PI/180)}
              rx={size/2} ry={size/3} fill={color} opacity="0.9"
              transform={`rotate(${angle},${x + (size-4)*Math.cos(angle*Math.PI/180)},${y + (size-4)*Math.sin(angle*Math.PI/180)})`}/>
          ))}
          {/* Center */}
          <circle cx={x} cy={y} r={size/3} fill={petals}/>
          <circle cx={x} cy={y} r={size/5} fill="#fff" opacity="0.6"/>
        </g>
      ))}
      {/* Fireflies */}
      {[[90,180],[180,165],[310,178],[50,200],[350,195]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="3.5" fill="#fde68a" opacity="0.8" className="glow"/>
      ))}
      {/* Lion walking into garden, wonder-struck */}
      <g transform="translate(145,192)">
        {/* Mane */}
        <circle cx="55" cy="10" r="38" fill="#f59e0b"/>
        {/* Body */}
        <ellipse cx="40" cy="52" rx="44" ry="28" fill="#fcd34d"/>
        {/* Head */}
        <circle cx="55" cy="10" r="30" fill="#fcd34d"/>
        {/* Ears */}
        <ellipse cx="34" cy="-14" rx="10" ry="11" fill="#fcd34d"/>
        <ellipse cx="34" cy="-14" rx="6" ry="7" fill="#f9a8d4"/>
        <ellipse cx="76" cy="-16" rx="10" ry="11" fill="#fcd34d"/>
        <ellipse cx="76" cy="-16" rx="6" ry="7" fill="#f9a8d4"/>
        {/* Eyes sparkling */}
        <ellipse cx="42" cy="8" rx="8" ry="9" fill="#fff"/>
        <ellipse cx="68" cy="8" rx="8" ry="9" fill="#fff"/>
        <circle cx="43" cy="7" r="5" fill="#92400e"/>
        <circle cx="69" cy="7" r="5" fill="#92400e"/>
        <circle cx="44" cy="6" r="2.5" fill="#1c1917"/>
        <circle cx="70" cy="6" r="2.5" fill="#1c1917"/>
        <circle cx="45" cy="4" r="1.5" fill="#fde68a" opacity="0.9"/>
        <circle cx="71" cy="4" r="1.5" fill="#fde68a" opacity="0.9"/>
        {/* Nose */}
        <ellipse cx="55" cy="20" rx="7" ry="5" fill="#f9a8d4"/>
        <ellipse cx="55" cy="21" rx="4" ry="3" fill="#ec4899"/>
        {/* Big smile */}
        <path d="M46,27 Q55,35 64,27" fill="none" stroke="#92400e" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Legs */}
        <ellipse cx="15" cy="72" rx="11" ry="14" fill="#fcd34d" transform="rotate(10,15,72)"/>
        <ellipse cx="65" cy="74" rx="11" ry="14" fill="#fcd34d" transform="rotate(-10,65,74)"/>
        {/* Tail */}
        <path d="M-4,40 Q-26,28 -23,50 Q-20,63 -8,59" fill="none" stroke="#f59e0b" strokeWidth="5" strokeLinecap="round"/>
        <circle cx="-8" cy="58" r="8" fill="#f59e0b"/>
      </g>
    </svg>
  );
}

export function Slide5_3() {
  return (
    <svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Deep calm night garden */}
      <rect width="400" height="320" fill="#1a1035"/>
      {/* Soft garden glow */}
      <ellipse cx="200" cy="250" rx="200" ry="100" fill="#4ade80" opacity="0.06"/>
      {/* Stars */}
      {[[30,20],[80,40],[160,18],[240,35],[300,22],[360,38],[50,70],[200,60],[340,68]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="1.5" fill="#fde68a" opacity="0.5" className="star"/>
      ))}
      {/* Moon */}
      <circle cx="60" cy="55" r="26" fill="#fde68a" opacity="0.85"/>
      <circle cx="52" cy="50" r="22" fill="#1a1035" opacity="0.3"/>
      {/* Ground */}
      <rect x="0" y="258" width="400" height="65" fill="#14532d"/>
      {/* Small glowing flowers */}
      {[[30,252],[80,248],[130,254],[210,250],[260,248],[310,253],[370,250]].map(([x,y],i) => (
        <g key={i} className="glow">
          <circle cx={x} cy={y} r="14" fill={["#fde68a","#f9a8d4","#a78bfa","#6ee7b7","#fde68a","#f9a8d4","#a78bfa"][i]} opacity="0.15"/>
          <circle cx={x} cy={y} r="6" fill={["#fbbf24","#ec4899","#7c3aed","#10b981","#fbbf24","#ec4899","#7c3aed"][i]} opacity="0.8"/>
          <circle cx={x} cy={y} r="2.5" fill="#fff" opacity="0.6"/>
        </g>
      ))}
      {/* Sleeping bunny */}
      <g transform="translate(50,235)">
        {/* Body */}
        <ellipse cx="30" cy="18" rx="28" ry="16" fill="#fef3c7"/>
        {/* Head */}
        <circle cx="50" cy="10" r="16" fill="#fef3c7"/>
        {/* Ears */}
        <ellipse cx="44" cy="-14" rx="5" ry="16" fill="#fef3c7"/>
        <ellipse cx="44" cy="-14" rx="3" ry="12" fill="#fce7f3"/>
        <ellipse cx="56" cy="-16" rx="5" ry="16" fill="#fef3c7"/>
        <ellipse cx="56" cy="-16" rx="3" ry="12" fill="#fce7f3"/>
        {/* Closed eyes */}
        <path d="M44,9 Q49,6 54,9" fill="none" stroke="#92400e" strokeWidth="1.5" strokeLinecap="round"/>
        {/* Nose */}
        <circle cx="58" cy="14" r="3" fill="#f9a8d4"/>
        {/* Leaf blanket */}
        <ellipse cx="25" cy="22" rx="22" ry="8" fill="#4ade80" opacity="0.6"/>
        {/* ZZZ */}
        <text x="65" y="5" fontSize="10" fill="#a78bfa" fontWeight="bold" opacity="0.7">z z</text>
      </g>
      {/* Sleeping owl on branch */}
      <g transform="translate(310,155)">
        {/* Branch */}
        <path d="M-20,35 Q30,30 70,38" fill="none" stroke="#a16207" strokeWidth="6" strokeLinecap="round"/>
        {/* Body */}
        <ellipse cx="30" cy="15" rx="20" ry="24" fill="#d97706"/>
        {/* Wing marks */}
        <ellipse cx="14" cy="20" rx="8" ry="14" fill="#b45309" opacity="0.6"/>
        <ellipse cx="46" cy="20" rx="8" ry="14" fill="#b45309" opacity="0.6"/>
        {/* Head */}
        <circle cx="30" cy="-5" r="18" fill="#fbbf24"/>
        {/* Ear tufts */}
        <path d="M20,-20 Q24,-30 28,-20" fill="#d97706"/>
        <path d="M32,-20 Q36,-30 40,-20" fill="#d97706"/>
        {/* Closed eyes */}
        <path d="M21,-7 Q26,-11 31,-7" fill="none" stroke="#92400e" strokeWidth="2" strokeLinecap="round"/>
        <path d="M29,-7 Q34,-11 39,-7" fill="none" stroke="#92400e" strokeWidth="2" strokeLinecap="round"/>
        {/* Beak */}
        <path d="M27,0 Q30,4 33,0" fill="#f97316"/>
        {/* ZZZ */}
        <text x="48" y="-15" fontSize="10" fill="#a78bfa" fontWeight="bold" opacity="0.7">z z</text>
      </g>
      {/* Fireflies */}
      {[[140,200],[220,190],[280,210],[170,230]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="3" fill="#fde68a" opacity="0.7" className="glow"/>
      ))}
      {/* Lion tiptoeing carefully, gentle smile */}
      <g transform="translate(145,192)">
        {/* Mane */}
        <circle cx="60" cy="8" r="40" fill="#f59e0b"/>
        {/* Body */}
        <ellipse cx="45" cy="50" rx="46" ry="30" fill="#fcd34d"/>
        {/* Head */}
        <circle cx="60" cy="8" r="32" fill="#fcd34d"/>
        {/* Ears */}
        <ellipse cx="36" cy="-16" rx="10" ry="12" fill="#fcd34d"/>
        <ellipse cx="36" cy="-16" rx="6" ry="8" fill="#f9a8d4"/>
        <ellipse cx="84" cy="-18" rx="10" ry="12" fill="#fcd34d"/>
        <ellipse cx="84" cy="-18" rx="6" ry="8" fill="#f9a8d4"/>
        {/* Gentle soft eyes */}
        <ellipse cx="46" cy="6" rx="7" ry="8" fill="#fff"/>
        <ellipse cx="74" cy="6" rx="7" ry="8" fill="#fff"/>
        <path d="M39,3 Q46,0 53,3" fill="#fcd34d" stroke="none"/>
        <path d="M67,3 Q74,0 81,3" fill="#fcd34d" stroke="none"/>
        <circle cx="46" cy="7" r="4.5" fill="#92400e"/>
        <circle cx="74" cy="7" r="4.5" fill="#92400e"/>
        <circle cx="47" cy="8" r="2.2" fill="#1c1917"/>
        <circle cx="75" cy="8" r="2.2" fill="#1c1917"/>
        {/* Nose */}
        <ellipse cx="60" cy="20" rx="7" ry="5" fill="#f9a8d4"/>
        {/* Gentle smile */}
        <path d="M52,26 Q60,32 68,26" fill="none" stroke="#92400e" strokeWidth="2" strokeLinecap="round"/>
        {/* Tiptoeing legs */}
        <ellipse cx="15" cy="72" rx="11" ry="12" fill="#fcd34d" transform="rotate(20,15,72)"/>
        <ellipse cx="75" cy="68" rx="11" ry="12" fill="#fcd34d" transform="rotate(-20,75,68)"/>
        {/* Tail up */}
        <path d="M-5,38 Q-25,18 -20,42 Q-15,58 -3,52" fill="none" stroke="#f59e0b" strokeWidth="5" strokeLinecap="round"/>
        <circle cx="-4" cy="51" r="8" fill="#f59e0b"/>
      </g>
    </svg>
  );
}

export function Slide5_4() {
  return (
    <svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <radialGradient id="gardenDream" cx="50%" cy="60%" r="55%">
          <stop offset="0%" stopColor="#f0abfc" stopOpacity="0.2"/>
          <stop offset="50%" stopColor="#818cf8" stopOpacity="0.1"/>
          <stop offset="100%" stopColor="#0f172a" stopOpacity="0"/>
        </radialGradient>
      </defs>
      {/* Deep magical night */}
      <rect width="400" height="320" fill="#0f0a1e"/>
      <rect width="400" height="320" fill="url(#gardenDream)"/>
      {/* Moon */}
      <circle cx="320" cy="50" r="30" fill="#fde68a" opacity="0.9"/>
      <circle cx="310" cy="44" r="26" fill="#0f0a1e" opacity="0.25"/>
      {/* Stars */}
      {Array.from({length:30}).map((_,i) => {
        const x = (i*67+20)%390; const y = (i*53+15)%200;
        return <circle key={i} cx={x} cy={y} r={i%5===0?2:1.3} fill="#fde68a" opacity={0.3+i%4*0.2} className="star"/>;
      })}
      {/* Ground */}
      <rect x="0" y="255" width="400" height="70" fill="#14532d"/>
      {/* Glowing petal bed */}
      <ellipse cx="200" cy="270" rx="130" ry="25" fill="#f9a8d4" opacity="0.2"/>
      <ellipse cx="200" cy="268" rx="100" ry="16" fill="#fde68a" opacity="0.1"/>
      {/* Magical glowing flowers all around */}
      {[
        {x:30, y:245, c:"#fde68a", s:10},
        {x:80, y:238, c:"#f9a8d4", s:12},
        {x:140, y:242, c:"#a78bfa", s:10},
        {x:260, y:242, c:"#6ee7b7", s:10},
        {x:320, y:238, c:"#f9a8d4", s:12},
        {x:370, y:245, c:"#fde68a", s:10},
      ].map(({x,y,c,s},i) => (
        <g key={i} className="glow">
          <circle cx={x} cy={y} r={s+14} fill={c} opacity="0.1"/>
          {[0,60,120,180,240,300].map((a,j) => (
            <ellipse key={j} cx={x+(s-2)*Math.cos(a*Math.PI/180)} cy={y+(s-2)*Math.sin(a*Math.PI/180)}
              rx={s/2} ry={s/3} fill={c} opacity="0.7"
              transform={`rotate(${a},${x+(s-2)*Math.cos(a*Math.PI/180)},${y+(s-2)*Math.sin(a*Math.PI/180)})`}/>
          ))}
          <circle cx={x} cy={y} r={s/2.5} fill="#fff" opacity="0.5"/>
        </g>
      ))}
      {/* Fireflies */}
      {[[60,210],[120,195],[280,200],[340,215],[180,188]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="3.5" fill="#fde68a" opacity="0.7" className="glow"/>
      ))}
      {/* Lion sleeping on flower petals, at perfect peace */}
      <g transform="translate(85,210)" className="float">
        {/* Petal bed */}
        <ellipse cx="115" cy="65" rx="110" ry="28" fill="#f9a8d4" opacity="0.2"/>
        {/* Mane */}
        <circle cx="40" cy="20" r="42" fill="#f59e0b" opacity="0.95"/>
        {/* Body curled */}
        <ellipse cx="115" cy="48" rx="100" ry="30" fill="#fcd34d"/>
        {/* Head resting */}
        <circle cx="40" cy="20" r="32" fill="#fcd34d"/>
        {/* Ears */}
        <ellipse cx="16" cy="-5" rx="10" ry="12" fill="#fcd34d"/>
        <ellipse cx="16" cy="-5" rx="6" ry="8" fill="#f9a8d4"/>
        <ellipse cx="60" cy="-8" rx="10" ry="12" fill="#fcd34d"/>
        <ellipse cx="60" cy="-8" rx="6" ry="8" fill="#f9a8d4"/>
        {/* Closed eyes, total peace */}
        <path d="M22,16 Q32,11 42,16" fill="none" stroke="#92400e" strokeWidth="3" strokeLinecap="round"/>
        <path d="M38,16 Q48,11 58,16" fill="none" stroke="#92400e" strokeWidth="3" strokeLinecap="round"/>
        {/* Contented smile */}
        <path d="M28,28 Q40,36 52,28" fill="none" stroke="#92400e" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Nose */}
        <ellipse cx="40" cy="22" rx="7" ry="5" fill="#f9a8d4"/>
        <ellipse cx="40" cy="23" rx="4" ry="3" fill="#ec4899"/>
        {/* Paws tucked */}
        <ellipse cx="5" cy="46" rx="22" ry="11" fill="#fcd34d"/>
        <ellipse cx="48" cy="50" rx="22" ry="11" fill="#fcd34d"/>
        {/* Back body/legs */}
        <ellipse cx="140" cy="58" rx="30" ry="15" fill="#fcd34d"/>
        <ellipse cx="195" cy="52" rx="22" ry="14" fill="#fcd34d"/>
        {/* Tail curled */}
        <path d="M215,35 Q234,20 232,45 Q230,60 214,56 Q203,53 205,42" fill="none" stroke="#f59e0b" strokeWidth="7" strokeLinecap="round"/>
        <circle cx="206" cy="41" r="12" fill="#f59e0b"/>
        {/* Flower petal on head */}
        <circle cx="40" cy="-10" r="8" fill="#f9a8d4" opacity="0.6"/>
        <circle cx="55" cy="-5" r="6" fill="#a78bfa" opacity="0.5"/>
        {/* Dream bubble with garden */}
        <circle cx="90" cy="-15" r="4" fill="#c7d2fe" opacity="0.6"/>
        <circle cx="100" cy="-28" r="6" fill="#c7d2fe" opacity="0.5"/>
        <ellipse cx="118" cy="-46" rx="22" ry="16" fill="#c7d2fe" opacity="0.4"/>
        {/* Tiny flower in dream */}
        {[0,72,144,216,288].map((a,j) => (
          <ellipse key={j} cx={118+(9)*Math.cos(a*Math.PI/180)} cy={-46+(9)*Math.sin(a*Math.PI/180)}
            rx="5" ry="3" fill="#f9a8d4" opacity="0.7"
            transform={`rotate(${a},${118+(9)*Math.cos(a*Math.PI/180)},${-46+(9)*Math.sin(a*Math.PI/180)})`}/>
        ))}
        <circle cx="118" cy="-46" r="4" fill="#fde68a" opacity="0.7"/>
        {/* ZZZ gentle */}
        <text x="78" y="-5" fontSize="14" fill="#818cf8" fontWeight="bold" opacity="0.7">z</text>
        <text x="90" y="-17" fontSize="11" fill="#818cf8" fontWeight="bold" opacity="0.5">z</text>
        <text x="100" y="-27" fontSize="9" fill="#818cf8" fontWeight="bold" opacity="0.35">z</text>
      </g>
    </svg>
  );
}
