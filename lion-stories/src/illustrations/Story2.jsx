// Story 2: The Warm Golden Sunset
export function Slide2_1() {
  return (
    <svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Blue sky */}
      <rect width="400" height="320" fill="#bfdbfe"/>
      {/* Clouds */}
      <ellipse cx="80" cy="60" rx="50" ry="22" fill="#fff" opacity="0.9"/>
      <ellipse cx="120" cy="50" rx="40" ry="20" fill="#fff" opacity="0.9"/>
      <ellipse cx="50" cy="55" rx="32" ry="18" fill="#fff" opacity="0.9"/>
      <ellipse cx="300" cy="80" rx="40" ry="18" fill="#fff" opacity="0.8"/>
      <ellipse cx="335" cy="70" rx="30" ry="16" fill="#fff" opacity="0.8"/>
      {/* Sun */}
      <circle cx="200" cy="55" r="36" fill="#fde68a" opacity="0.9"/>
      <circle cx="200" cy="55" r="26" fill="#fbbf24"/>
      {/* Ground / hill */}
      <ellipse cx="200" cy="290" rx="220" ry="70" fill="#86efac"/>
      <ellipse cx="200" cy="275" rx="180" ry="55" fill="#a3e635"/>
      {/* Hill top for lion to sit on */}
      <ellipse cx="200" cy="255" rx="90" ry="30" fill="#bbf7d0"/>
      {/* Birds in sky */}
      <path d="M250,100 Q260,93 270,100" fill="none" stroke="#1e40af" strokeWidth="2" strokeLinecap="round"/>
      <path d="M230,115 Q240,108 250,115" fill="none" stroke="#1e40af" strokeWidth="2" strokeLinecap="round"/>
      <path d="M280,90 Q288,84 296,90" fill="none" stroke="#1e40af" strokeWidth="2" strokeLinecap="round"/>
      {/* Lion sitting on hill, looking up */}
      <g transform="translate(138,190)">
        {/* Mane */}
        <circle cx="62" cy="8" r="40" fill="#f59e0b"/>
        {/* Body */}
        <ellipse cx="62" cy="52" rx="46" ry="32" fill="#fcd34d"/>
        {/* Head tilted up */}
        <circle cx="62" cy="8" r="32" fill="#fcd34d" transform="rotate(-10,62,8)"/>
        {/* Ears */}
        <ellipse cx="36" cy="-20" rx="10" ry="12" fill="#fcd34d"/>
        <ellipse cx="36" cy="-20" rx="6" ry="8" fill="#f9a8d4"/>
        <ellipse cx="86" cy="-22" rx="10" ry="12" fill="#fcd34d"/>
        <ellipse cx="86" cy="-22" rx="6" ry="8" fill="#f9a8d4"/>
        {/* Wide amazed eyes looking up */}
        <ellipse cx="48" cy="4" rx="8" ry="9" fill="#fff"/>
        <ellipse cx="76" cy="4" rx="8" ry="9" fill="#fff"/>
        <circle cx="49" cy="3" r="5" fill="#92400e"/>
        <circle cx="77" cy="3" r="5" fill="#92400e"/>
        <circle cx="50" cy="2" r="2.5" fill="#1c1917"/>
        <circle cx="78" cy="2" r="2.5" fill="#1c1917"/>
        {/* Nose */}
        <ellipse cx="62" cy="18" rx="7" ry="5" fill="#f9a8d4"/>
        <ellipse cx="62" cy="19" rx="4" ry="3" fill="#ec4899"/>
        {/* Happy mouth */}
        <path d="M54,24 Q62,30 70,24" fill="none" stroke="#92400e" strokeWidth="2" strokeLinecap="round"/>
        {/* Whiskers */}
        <line x1="26" y1="14" x2="50" y2="16" stroke="#92400e" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="26" y1="20" x2="50" y2="20" stroke="#92400e" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="74" y1="16" x2="98" y2="14" stroke="#92400e" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="74" y1="20" x2="98" y2="20" stroke="#92400e" strokeWidth="1.5" strokeLinecap="round"/>
        {/* Paws sitting */}
        <ellipse cx="30" cy="80" rx="16" ry="11" fill="#fcd34d"/>
        <ellipse cx="94" cy="80" rx="16" ry="11" fill="#fcd34d"/>
        {/* Tail */}
        <path d="M108,45 Q130,35 128,58 Q126,70 115,67" fill="none" stroke="#f59e0b" strokeWidth="5" strokeLinecap="round"/>
        <ellipse cx="112" cy="67" rx="9" ry="7" fill="#f59e0b"/>
      </g>
    </svg>
  );
}

export function Slide2_2() {
  return (
    <svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="sunsetGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fdba74"/>
          <stop offset="40%" stopColor="#fb923c"/>
          <stop offset="100%" stopColor="#fde68a"/>
        </linearGradient>
      </defs>
      {/* Sunset sky */}
      <rect width="400" height="320" fill="url(#sunsetGrad)"/>
      {/* Sun on horizon */}
      <circle cx="200" cy="200" r="50" fill="#fef3c7" opacity="0.9"/>
      <circle cx="200" cy="200" r="38" fill="#fde68a"/>
      <circle cx="200" cy="200" r="26" fill="#fbbf24"/>
      {/* Glow */}
      <ellipse cx="200" cy="220" rx="140" ry="40" fill="#fde68a" opacity="0.3"/>
      {/* Cloud silhouettes */}
      <ellipse cx="60" cy="120" rx="55" ry="20" fill="#fb923c" opacity="0.6"/>
      <ellipse cx="100" cy="108" rx="40" ry="18" fill="#f97316" opacity="0.5"/>
      <ellipse cx="320" cy="130" rx="48" ry="18" fill="#fb923c" opacity="0.6"/>
      <ellipse cx="350" cy="118" rx="32" ry="15" fill="#f97316" opacity="0.5"/>
      {/* Horizon line */}
      <rect x="0" y="220" width="400" height="100" fill="#16a34a"/>
      {/* Silhouette trees */}
      <rect x="20" y="165" width="10" height="60" fill="#14532d"/>
      <ellipse cx="25" cy="158" rx="22" ry="28" fill="#14532d"/>
      <rect x="365" y="170" width="10" height="55" fill="#14532d"/>
      <ellipse cx="370" cy="163" rx="20" ry="26" fill="#14532d"/>
      {/* Lion silhouette on hill */}
      <g transform="translate(145,188)" opacity="1">
        {/* Mane silhouette */}
        <circle cx="55" cy="0" r="36" fill="#92400e"/>
        {/* Body */}
        <ellipse cx="55" cy="40" rx="44" ry="28" fill="#b45309"/>
        {/* Head */}
        <circle cx="55" cy="0" r="28" fill="#b45309"/>
        {/* Ears */}
        <ellipse cx="32" cy="-22" rx="9" ry="11" fill="#b45309"/>
        <ellipse cx="78" cy="-22" rx="9" ry="11" fill="#b45309"/>
        {/* Nose */}
        <ellipse cx="55" cy="10" rx="6" ry="4" fill="#fde68a" opacity="0.6"/>
        {/* Eye shine */}
        <circle cx="44" cy="-2" r="5" fill="#fde68a" opacity="0.7"/>
        <circle cx="66" cy="-2" r="5" fill="#fde68a" opacity="0.7"/>
        <circle cx="44" cy="-2" r="2.5" fill="#fff" opacity="0.8"/>
        <circle cx="66" cy="-2" r="2.5" fill="#fff" opacity="0.8"/>
        {/* Paws */}
        <ellipse cx="22" cy="65" rx="14" ry="9" fill="#b45309"/>
        <ellipse cx="88" cy="65" rx="14" ry="9" fill="#b45309"/>
        {/* Tail */}
        <path d="M99,32 Q120,22 118,44 Q116,55 106,52" fill="none" stroke="#92400e" strokeWidth="5" strokeLinecap="round"/>
        <ellipse cx="103" cy="52" rx="8" ry="7" fill="#92400e"/>
      </g>
    </svg>
  );
}

export function Slide2_3() {
  return (
    <svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="glowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fde68a"/>
          <stop offset="50%" stopColor="#fdba74"/>
          <stop offset="100%" stopColor="#a3e635"/>
        </linearGradient>
        <radialGradient id="sunGlow" cx="50%" cy="70%" r="60%">
          <stop offset="0%" stopColor="#fef3c7" stopOpacity="0.6"/>
          <stop offset="100%" stopColor="#fde68a" stopOpacity="0"/>
        </radialGradient>
      </defs>
      {/* Warm dusk sky */}
      <rect width="400" height="320" fill="url(#glowGrad)"/>
      {/* Golden glow on horizon */}
      <rect width="400" height="320" fill="url(#sunGlow)"/>
      {/* Soft horizon glow */}
      <ellipse cx="200" cy="240" rx="200" ry="60" fill="#fef3c7" opacity="0.4"/>
      {/* Ground */}
      <rect x="0" y="250" width="400" height="80" fill="#4d7c0f"/>
      <ellipse cx="200" cy="252" rx="200" ry="20" fill="#65a30d"/>
      {/* Warm light rays */}
      <line x1="200" y1="240" x2="50" y2="100" stroke="#fde68a" strokeWidth="2" opacity="0.2"/>
      <line x1="200" y1="240" x2="150" y2="80" stroke="#fde68a" strokeWidth="2" opacity="0.2"/>
      <line x1="200" y1="240" x2="350" y2="90" stroke="#fde68a" strokeWidth="2" opacity="0.2"/>
      <line x1="200" y1="240" x2="300" y2="70" stroke="#fde68a" strokeWidth="2" opacity="0.2"/>
      {/* Flying bird silhouettes */}
      <path d="M100,140 Q110,133 120,140" fill="none" stroke="#7c2d12" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M130,120 Q140,113 150,120" fill="none" stroke="#7c2d12" strokeWidth="2" strokeLinecap="round"/>
      <path d="M80,158 Q90,151 100,158" fill="none" stroke="#7c2d12" strokeWidth="2" strokeLinecap="round"/>
      {/* Lion basking, relaxed */}
      <g transform="translate(110,190)">
        {/* Warm glow around lion */}
        <ellipse cx="80" cy="40" rx="90" ry="45" fill="#fef3c7" opacity="0.3"/>
        {/* Mane */}
        <circle cx="80" cy="8" r="42" fill="#f59e0b"/>
        {/* Body */}
        <ellipse cx="80" cy="52" rx="50" ry="32" fill="#fcd34d"/>
        {/* Head */}
        <circle cx="80" cy="8" r="33" fill="#fcd34d"/>
        {/* Ears */}
        <ellipse cx="52" cy="-18" rx="10" ry="12" fill="#fcd34d"/>
        <ellipse cx="52" cy="-18" rx="6" ry="8" fill="#f9a8d4"/>
        <ellipse cx="108" cy="-18" rx="10" ry="12" fill="#fcd34d"/>
        <ellipse cx="108" cy="-18" rx="6" ry="8" fill="#f9a8d4"/>
        {/* Peaceful half-closed eyes */}
        <ellipse cx="66" cy="6" rx="8" ry="6" fill="#fff"/>
        <ellipse cx="94" cy="6" rx="8" ry="6" fill="#fff"/>
        <path d="M58,3 Q66,0 74,3" fill="#fcd34d" stroke="none"/>
        <path d="M86,3 Q94,0 102,3" fill="#fcd34d" stroke="none"/>
        <circle cx="66" cy="7" r="4" fill="#92400e"/>
        <circle cx="94" cy="7" r="4" fill="#92400e"/>
        <circle cx="67" cy="8" r="2" fill="#1c1917"/>
        <circle cx="95" cy="8" r="2" fill="#1c1917"/>
        {/* Nose */}
        <ellipse cx="80" cy="20" rx="7" ry="5" fill="#f9a8d4"/>
        <ellipse cx="80" cy="21" rx="4" ry="3" fill="#ec4899"/>
        {/* Smile */}
        <path d="M72,26 Q80,32 88,26" fill="none" stroke="#92400e" strokeWidth="2" strokeLinecap="round"/>
        {/* Whiskers */}
        <line x1="42" y1="16" x2="68" y2="18" stroke="#92400e" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="42" y1="22" x2="68" y2="22" stroke="#92400e" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="92" y1="18" x2="118" y2="16" stroke="#92400e" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="92" y1="22" x2="118" y2="22" stroke="#92400e" strokeWidth="1.5" strokeLinecap="round"/>
        {/* Paws */}
        <ellipse cx="38" cy="78" rx="16" ry="11" fill="#fcd34d"/>
        <ellipse cx="122" cy="78" rx="16" ry="11" fill="#fcd34d"/>
        {/* Tail */}
        <path d="M130,50 Q155,38 152,62 Q150,76 138,72" fill="none" stroke="#f59e0b" strokeWidth="5" strokeLinecap="round"/>
        <ellipse cx="135" cy="72" rx="10" ry="8" fill="#f59e0b"/>
      </g>
    </svg>
  );
}

export function Slide2_4() {
  return (
    <svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="nightGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1e1b4b"/>
          <stop offset="100%" stopColor="#312e81"/>
        </linearGradient>
      </defs>
      {/* Night sky */}
      <rect width="400" height="320" fill="url(#nightGrad2)"/>
      {/* Crescent moon */}
      <circle cx="300" cy="65" r="32" fill="#fde68a" opacity="0.95"/>
      <circle cx="288" cy="58" r="28" fill="#1e1b4b"/>
      {/* Stars */}
      {[[50,40],[120,25],[180,50],[240,30],[350,55],[80,90],[160,80],[280,75],[330,30],[50,130]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r={i%3===0?2.5:1.8} fill="#fde68a" opacity={0.7+Math.sin(i)*0.3} className="star"/>
      ))}
      {/* Ground */}
      <rect x="0" y="258" width="400" height="70" fill="#14532d"/>
      <ellipse cx="200" cy="260" rx="200" ry="20" fill="#166534"/>
      {/* Fireflies */}
      <circle cx="70" cy="210" r="4" fill="#fde68a" opacity="0.8" className="glow"/>
      <circle cx="330" cy="195" r="3.5" fill="#fde68a" opacity="0.7" className="glow"/>
      <circle cx="50" cy="240" r="3" fill="#fde68a" opacity="0.6" className="glow"/>
      {/* Lion sleeping curled, peaceful */}
      <g transform="translate(100,210)">
        {/* Body curled */}
        <ellipse cx="95" cy="35" rx="90" ry="32" fill="#fcd34d"/>
        {/* Mane */}
        <circle cx="35" cy="15" r="40" fill="#f59e0b"/>
        {/* Head resting */}
        <circle cx="35" cy="15" r="30" fill="#fcd34d"/>
        {/* Ears */}
        <ellipse cx="14" cy="-10" rx="9" ry="11" fill="#fcd34d"/>
        <ellipse cx="14" cy="-10" rx="5" ry="7" fill="#f9a8d4"/>
        <ellipse cx="54" cy="-12" rx="9" ry="11" fill="#fcd34d"/>
        <ellipse cx="54" cy="-12" rx="5" ry="7" fill="#f9a8d4"/>
        {/* Closed eyes — gentle curves */}
        <path d="M20,12 Q28,8 36,12" fill="none" stroke="#92400e" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M36,12 Q44,8 52,12" fill="none" stroke="#92400e" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Smile */}
        <path d="M26,22 Q35,28 44,22" fill="none" stroke="#92400e" strokeWidth="2" strokeLinecap="round"/>
        {/* Nose */}
        <ellipse cx="35" cy="18" rx="6" ry="4" fill="#f9a8d4"/>
        {/* Paws */}
        <ellipse cx="5" cy="38" rx="20" ry="10" fill="#fcd34d"/>
        <ellipse cx="48" cy="42" rx="20" ry="10" fill="#fcd34d"/>
        {/* Tail curled */}
        <path d="M185,18 Q200,5 197,30 Q194,45 180,42 Q170,40 172,30" fill="none" stroke="#f59e0b" strokeWidth="6" strokeLinecap="round"/>
        <circle cx="173" cy="30" r="10" fill="#f59e0b"/>
        {/* ZZZ */}
        <text x="75" y="-15" fontSize="16" fill="#a78bfa" fontWeight="bold" opacity="0.8">z</text>
        <text x="88" y="-28" fontSize="13" fill="#a78bfa" fontWeight="bold" opacity="0.6">z</text>
        <text x="99" y="-38" fontSize="10" fill="#a78bfa" fontWeight="bold" opacity="0.4">z</text>
      </g>
    </svg>
  );
}
