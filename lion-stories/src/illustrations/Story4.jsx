// Story 4: Mama Lion's Lullaby
export function Slide4_1() {
  return (
    <svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Warm indoor/den sky */}
      <rect width="400" height="320" fill="#fef3c7"/>
      {/* Cozy warm background */}
      <ellipse cx="200" cy="160" rx="200" ry="160" fill="#fde68a" opacity="0.2"/>
      {/* Ground */}
      <rect x="0" y="260" width="400" height="65" fill="#a16207"/>
      <ellipse cx="200" cy="262" rx="200" ry="20" fill="#ca8a04" opacity="0.6"/>
      {/* Soft nest/bed */}
      <ellipse cx="200" cy="268" rx="120" ry="28" fill="#92400e" opacity="0.4"/>
      <ellipse cx="200" cy="264" rx="100" ry="20" fill="#d97706" opacity="0.3"/>
      {/* Mama Lion — large, sitting */}
      <g transform="translate(80,155)">
        {/* Mama mane — bigger */}
        <circle cx="80" cy="20" r="55" fill="#d97706"/>
        {/* Mama body */}
        <ellipse cx="80" cy="80" rx="70" ry="45" fill="#fbbf24"/>
        {/* Mama head */}
        <circle cx="80" cy="20" r="44" fill="#fbbf24"/>
        {/* Mama ears */}
        <ellipse cx="44" cy="-22" rx="14" ry="16" fill="#fbbf24"/>
        <ellipse cx="44" cy="-22" rx="9" ry="11" fill="#f9a8d4"/>
        <ellipse cx="116" cy="-22" rx="14" ry="16" fill="#fbbf24"/>
        <ellipse cx="116" cy="-22" rx="9" ry="11" fill="#f9a8d4"/>
        {/* Mama eyes — gentle, warm */}
        <ellipse cx="62" cy="16" rx="9" ry="10" fill="#fff"/>
        <ellipse cx="98" cy="16" rx="9" ry="10" fill="#fff"/>
        <circle cx="63" cy="15" r="6" fill="#92400e"/>
        <circle cx="99" cy="15" r="6" fill="#92400e"/>
        <circle cx="64" cy="14" r="3" fill="#1c1917"/>
        <circle cx="100" cy="14" r="3" fill="#1c1917"/>
        {/* Heart in eyes */}
        <circle cx="66" cy="12" r="1.5" fill="#fde68a" opacity="0.8"/>
        <circle cx="102" cy="12" r="1.5" fill="#fde68a" opacity="0.8"/>
        {/* Mama nose */}
        <ellipse cx="80" cy="32" rx="9" ry="6" fill="#f9a8d4"/>
        <ellipse cx="80" cy="33" rx="5.5" ry="4" fill="#ec4899"/>
        {/* Mama smile */}
        <path d="M68,40 Q80,48 92,40" fill="none" stroke="#92400e" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Mama whiskers */}
        <line x1="30" y1="26" x2="62" y2="30" stroke="#92400e" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="30" y1="34" x2="62" y2="35" stroke="#92400e" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="98" y1="30" x2="130" y2="26" stroke="#92400e" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="98" y1="35" x2="130" y2="34" stroke="#92400e" strokeWidth="1.5" strokeLinecap="round"/>
        {/* Mama paws curled around cub */}
        <ellipse cx="15" cy="100" rx="20" ry="14" fill="#fbbf24"/>
        <ellipse cx="145" cy="100" rx="20" ry="14" fill="#fbbf24"/>
        {/* Mama tail */}
        <path d="M150,70 Q180,55 177,80 Q174,95 160,90" fill="none" stroke="#d97706" strokeWidth="7" strokeLinecap="round"/>
        <circle cx="157" cy="90" r="12" fill="#d97706"/>
      </g>
      {/* Baby cub Milo — small, between mama's paws */}
      <g transform="translate(160,225)">
        {/* Small mane */}
        <circle cx="40" cy="5" r="22" fill="#fbbf24"/>
        {/* Baby body */}
        <ellipse cx="40" cy="30" rx="30" ry="18" fill="#fef3c7"/>
        {/* Baby head */}
        <circle cx="40" cy="5" r="18" fill="#fef3c7"/>
        {/* Baby ears */}
        <ellipse cx="26" cy="-10" rx="7" ry="8" fill="#fef3c7"/>
        <ellipse cx="26" cy="-10" rx="4" ry="5" fill="#fce7f3"/>
        <ellipse cx="54" cy="-10" rx="7" ry="8" fill="#fef3c7"/>
        <ellipse cx="54" cy="-10" rx="4" ry="5" fill="#fce7f3"/>
        {/* Baby eyes — big, wondering */}
        <ellipse cx="32" cy="3" rx="6" ry="7" fill="#fff"/>
        <ellipse cx="48" cy="3" rx="6" ry="7" fill="#fff"/>
        <circle cx="33" cy="2" r="4" fill="#92400e"/>
        <circle cx="49" cy="2" r="4" fill="#92400e"/>
        <circle cx="34" cy="1" r="2" fill="#1c1917"/>
        <circle cx="50" cy="1" r="2" fill="#1c1917"/>
        {/* Baby nose */}
        <ellipse cx="40" cy="12" rx="5" ry="3.5" fill="#f9a8d4"/>
        {/* Baby smile */}
        <path d="M34,17 Q40,21 46,17" fill="none" stroke="#92400e" strokeWidth="1.5" strokeLinecap="round"/>
        {/* Baby paws */}
        <ellipse cx="22" cy="42" rx="10" ry="7" fill="#fef3c7"/>
        <ellipse cx="58" cy="42" rx="10" ry="7" fill="#fef3c7"/>
      </g>
    </svg>
  );
}

export function Slide4_2() {
  return (
    <svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Warm dusk */}
      <rect width="400" height="320" fill="#fef3c7"/>
      <rect width="400" height="180" fill="#fed7aa" opacity="0.4"/>
      {/* Musical notes floating */}
      {[[80,80],[140,55],[200,70],[260,50],[320,80],[100,120],[280,110]].map(([x,y],i) => (
        <g key={i} opacity={0.6+i%3*0.15}>
          <circle cx={x} cy={y+8} r="7" fill="#a78bfa"/>
          <rect x={x+5} y={y-12} width="3" height="20" fill="#a78bfa"/>
          <rect x={x+5} y={y-12} width="12" height="3" fill="#a78bfa"/>
        </g>
      ))}
      {/* Extra mini notes */}
      {[[170,40],[230,90]].map(([x,y],i) => (
        <g key={i} opacity="0.5">
          <circle cx={x} cy={y+5} r="5" fill="#c084fc"/>
          <rect x={x+4} y={y-8} width="2" height="14" fill="#c084fc"/>
        </g>
      ))}
      {/* Ground */}
      <rect x="0" y="260" width="400" height="65" fill="#a16207"/>
      <ellipse cx="200" cy="262" rx="200" ry="20" fill="#ca8a04" opacity="0.5"/>
      {/* Cozy nest */}
      <ellipse cx="200" cy="268" rx="110" ry="24" fill="#92400e" opacity="0.35"/>
      {/* Mama humming, eyes half-closed, peaceful */}
      <g transform="translate(85,155)">
        {/* Mama mane */}
        <circle cx="75" cy="18" r="52" fill="#d97706"/>
        {/* Mama body */}
        <ellipse cx="75" cy="75" rx="65" ry="42" fill="#fbbf24"/>
        {/* Mama head */}
        <circle cx="75" cy="18" r="42" fill="#fbbf24"/>
        {/* Mama ears */}
        <ellipse cx="40" cy="-20" rx="13" ry="15" fill="#fbbf24"/>
        <ellipse cx="40" cy="-20" rx="8" ry="10" fill="#f9a8d4"/>
        <ellipse cx="110" cy="-20" rx="13" ry="15" fill="#fbbf24"/>
        <ellipse cx="110" cy="-20" rx="8" ry="10" fill="#f9a8d4"/>
        {/* Mama eyes — peaceful, half-closed */}
        <ellipse cx="58" cy="14" rx="9" ry="7" fill="#fff"/>
        <ellipse cx="92" cy="14" rx="9" ry="7" fill="#fff"/>
        <path d="M49,11 Q58,8 67,11" fill="#fbbf24" stroke="none"/>
        <path d="M83,11 Q92,8 101,11" fill="#fbbf24" stroke="none"/>
        <circle cx="58" cy="15" r="5" fill="#92400e"/>
        <circle cx="92" cy="15" r="5" fill="#92400e"/>
        <circle cx="59" cy="16" r="2.5" fill="#1c1917"/>
        <circle cx="93" cy="16" r="2.5" fill="#1c1917"/>
        {/* Mama nose */}
        <ellipse cx="75" cy="30" rx="8" ry="6" fill="#f9a8d4"/>
        <ellipse cx="75" cy="31" rx="5" ry="3.5" fill="#ec4899"/>
        {/* Humming mouth — small O */}
        <ellipse cx="75" cy="40" rx="6" ry="5" fill="#92400e"/>
        <ellipse cx="75" cy="40" rx="4" ry="3" fill="#fde68a" opacity="0.6"/>
        {/* Whiskers */}
        <line x1="28" y1="24" x2="58" y2="28" stroke="#92400e" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="28" y1="32" x2="58" y2="33" stroke="#92400e" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="92" y1="28" x2="122" y2="24" stroke="#92400e" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="92" y1="33" x2="122" y2="32" stroke="#92400e" strokeWidth="1.5" strokeLinecap="round"/>
        {/* Paws cradling */}
        <ellipse cx="12" cy="96" rx="18" ry="12" fill="#fbbf24"/>
        <ellipse cx="138" cy="96" rx="18" ry="12" fill="#fbbf24"/>
        {/* Tail */}
        <path d="M143,66 Q170,52 167,76 Q164,90 152,86" fill="none" stroke="#d97706" strokeWidth="7" strokeLinecap="round"/>
        <circle cx="149" cy="86" r="12" fill="#d97706"/>
      </g>
      {/* Baby cub — eyes drooping, hearing lullaby */}
      <g transform="translate(163,228)">
        <circle cx="37" cy="3" r="20" fill="#fbbf24"/>
        <ellipse cx="37" cy="27" rx="28" ry="16" fill="#fef3c7"/>
        <circle cx="37" cy="3" r="16" fill="#fef3c7"/>
        <ellipse cx="24" cy="-10" rx="6" ry="7" fill="#fef3c7"/>
        <ellipse cx="24" cy="-10" rx="3.5" ry="4.5" fill="#fce7f3"/>
        <ellipse cx="50" cy="-10" rx="6" ry="7" fill="#fef3c7"/>
        <ellipse cx="50" cy="-10" rx="3.5" ry="4.5" fill="#fce7f3"/>
        {/* Half-closed sleepy eyes */}
        <ellipse cx="29" cy="2" rx="5" ry="4" fill="#fff"/>
        <ellipse cx="45" cy="2" rx="5" ry="4" fill="#fff"/>
        <path d="M24,-1 Q29,-4 34,-1" fill="#fef3c7" stroke="none"/>
        <path d="M40,-1 Q45,-4 50,-1" fill="#fef3c7" stroke="none"/>
        <circle cx="29" cy="3" r="3" fill="#92400e"/>
        <circle cx="45" cy="3" r="3" fill="#92400e"/>
        {/* Nose */}
        <ellipse cx="37" cy="10" rx="4" ry="3" fill="#f9a8d4"/>
        {/* Content smile */}
        <path d="M31,15 Q37,19 43,15" fill="none" stroke="#92400e" strokeWidth="1.5" strokeLinecap="round"/>
        {/* Paws */}
        <ellipse cx="20" cy="38" rx="9" ry="6" fill="#fef3c7"/>
        <ellipse cx="54" cy="38" rx="9" ry="6" fill="#fef3c7"/>
      </g>
    </svg>
  );
}

export function Slide4_3() {
  return (
    <svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Very warm, glowing background */}
      <rect width="400" height="320" fill="#fef3c7"/>
      <ellipse cx="200" cy="200" rx="200" ry="200" fill="#fde68a" opacity="0.3"/>
      {/* Warm heart glow */}
      <ellipse cx="200" cy="200" rx="130" ry="100" fill="#fef3c7" opacity="0.5"/>
      {/* Floating hearts */}
      {[[80,60],[160,40],[250,55],[330,45],[120,100],[290,90]].map(([x,y],i) => (
        <g key={i} opacity={0.4+i%3*0.2}>
          <path d={`M${x},${y+4} C${x-7},${y-4} ${x-14},${y+2} ${x-7},${y+10} Z`} fill="#f9a8d4"/>
          <path d={`M${x},${y+4} C${x+7},${y-4} ${x+14},${y+2} ${x+7},${y+10} Z`} fill="#f9a8d4"/>
        </g>
      ))}
      {/* Ground */}
      <rect x="0" y="260" width="400" height="65" fill="#a16207"/>
      <ellipse cx="200" cy="262" rx="200" ry="20" fill="#ca8a04" opacity="0.4"/>
      {/* Nest */}
      <ellipse cx="200" cy="268" rx="130" ry="26" fill="#92400e" opacity="0.3"/>
      {/* Mama and baby in big warm hug */}
      {/* Mama */}
      <g transform="translate(80,150)">
        {/* Big warm mane */}
        <circle cx="80" cy="22" r="58" fill="#d97706"/>
        <circle cx="80" cy="22" r="50" fill="#fbbf24" opacity="0.5"/>
        {/* Body */}
        <ellipse cx="80" cy="82" rx="72" ry="46" fill="#fbbf24"/>
        {/* Head */}
        <circle cx="80" cy="22" r="44" fill="#fbbf24"/>
        {/* Ears */}
        <ellipse cx="42" cy="-24" rx="14" ry="16" fill="#fbbf24"/>
        <ellipse cx="42" cy="-24" rx="9" ry="11" fill="#f9a8d4"/>
        <ellipse cx="118" cy="-24" rx="14" ry="16" fill="#fbbf24"/>
        <ellipse cx="118" cy="-24" rx="9" ry="11" fill="#f9a8d4"/>
        {/* Eyes — love-filled */}
        <ellipse cx="62" cy="18" rx="9" ry="10" fill="#fff"/>
        <ellipse cx="98" cy="18" rx="9" ry="10" fill="#fff"/>
        <circle cx="63" cy="17" r="6" fill="#92400e"/>
        <circle cx="99" cy="17" r="6" fill="#92400e"/>
        <circle cx="64" cy="16" r="3" fill="#1c1917"/>
        <circle cx="100" cy="16" r="3" fill="#1c1917"/>
        <circle cx="66" cy="13" r="2" fill="#fde68a" opacity="0.9"/>
        <circle cx="102" cy="13" r="2" fill="#fde68a" opacity="0.9"/>
        {/* Nose */}
        <ellipse cx="80" cy="34" rx="9" ry="6" fill="#f9a8d4"/>
        <ellipse cx="80" cy="35" rx="5.5" ry="4" fill="#ec4899"/>
        {/* Big warm smile */}
        <path d="M66,44 Q80,54 94,44" fill="none" stroke="#92400e" strokeWidth="3" strokeLinecap="round"/>
        {/* Big mama arms around baby */}
        <ellipse cx="10" cy="95" rx="20" ry="14" fill="#fbbf24" transform="rotate(-20,10,95)"/>
        <ellipse cx="150" cy="95" rx="20" ry="14" fill="#fbbf24" transform="rotate(20,150,95)"/>
        {/* Arms reaching forward */}
        <path d="M10,82 Q-10,110 15,118" fill="#fbbf24" stroke="#fbbf24" strokeWidth="8" strokeLinecap="round"/>
        <path d="M150,82 Q170,110 145,118" fill="#fbbf24" stroke="#fbbf24" strokeWidth="8" strokeLinecap="round"/>
        {/* Tail */}
        <path d="M152,75 Q178,60 175,84 Q172,98 158,94" fill="none" stroke="#d97706" strokeWidth="7" strokeLinecap="round"/>
        <circle cx="155" cy="94" r="12" fill="#d97706"/>
      </g>
      {/* Baby cub nestled against mama */}
      <g transform="translate(155,228)">
        <circle cx="45" cy="0" r="26" fill="#fbbf24"/>
        <ellipse cx="45" cy="30" rx="36" ry="20" fill="#fef3c7"/>
        <circle cx="45" cy="0" r="20" fill="#fef3c7"/>
        <ellipse cx="30" cy="-15" rx="8" ry="9" fill="#fef3c7"/>
        <ellipse cx="30" cy="-15" rx="5" ry="6" fill="#fce7f3"/>
        <ellipse cx="60" cy="-15" rx="8" ry="9" fill="#fef3c7"/>
        <ellipse cx="60" cy="-15" rx="5" ry="6" fill="#fce7f3"/>
        {/* Baby eyes — closed, happy */}
        <path d="M33,-2 Q39,-6 45,-2" fill="none" stroke="#92400e" strokeWidth="2" strokeLinecap="round"/>
        <path d="M45,-2 Q51,-6 57,-2" fill="none" stroke="#92400e" strokeWidth="2" strokeLinecap="round"/>
        {/* Baby nose */}
        <ellipse cx="45" cy="7" rx="5" ry="4" fill="#f9a8d4"/>
        {/* Baby happy smile */}
        <path d="M38,13 Q45,19 52,13" fill="none" stroke="#92400e" strokeWidth="2" strokeLinecap="round"/>
        {/* Baby paws */}
        <ellipse cx="24" cy="42" rx="12" ry="8" fill="#fef3c7"/>
        <ellipse cx="66" cy="42" rx="12" ry="8" fill="#fef3c7"/>
        {/* Heart above baby */}
        <path d="M45,-30 C38,-40 28,-36 28,-27 C28,-18 45,-10 45,-10 C45,-10 62,-18 62,-27 C62,-36 52,-40 45,-30 Z" fill="#f9a8d4" opacity="0.7"/>
      </g>
    </svg>
  );
}

export function Slide4_4() {
  return (
    <svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <radialGradient id="sleepGlow" cx="50%" cy="60%" r="60%">
          <stop offset="0%" stopColor="#fde68a" stopOpacity="0.2"/>
          <stop offset="100%" stopColor="#1e1b4b" stopOpacity="0"/>
        </radialGradient>
      </defs>
      {/* Night */}
      <rect width="400" height="320" fill="#1e1b4b"/>
      {/* Warm glow around sleeping pair */}
      <rect width="400" height="320" fill="url(#sleepGlow)"/>
      {/* Moon */}
      <circle cx="340" cy="55" r="32" fill="#fde68a" opacity="0.9"/>
      <circle cx="330" cy="50" r="28" fill="#1e1b4b" opacity="0.35"/>
      {/* Stars */}
      {[[40,30],[90,50],[150,25],[220,42],[280,28],[80,85],[190,75],[310,60],[360,90],[55,115],[155,100],[260,110]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r={i%4===0?2.2:1.5} fill="#fde68a" opacity={0.5+Math.sin(i)*0.3} className="star"/>
      ))}
      {/* Ground / nest */}
      <rect x="0" y="255" width="400" height="70" fill="#78350f"/>
      <ellipse cx="200" cy="257" rx="200" ry="22" fill="#92400e" opacity="0.7"/>
      {/* Cozy nest oval */}
      <ellipse cx="200" cy="262" rx="150" ry="30" fill="#a16207" opacity="0.5"/>
      {/* Mama sleeping — large, curled */}
      <g transform="translate(50,195)">
        {/* Mama mane */}
        <circle cx="80" cy="30" r="55" fill="#d97706" opacity="0.95"/>
        {/* Mama body curled around baby */}
        <ellipse cx="130" cy="52" rx="100" ry="34" fill="#fbbf24"/>
        {/* Mama head */}
        <circle cx="80" cy="30" r="42" fill="#fbbf24"/>
        {/* Ears */}
        <ellipse cx="48" cy="0" rx="13" ry="15" fill="#fbbf24"/>
        <ellipse cx="48" cy="0" rx="8" ry="10" fill="#f9a8d4"/>
        <ellipse cx="110" cy="-2" rx="13" ry="15" fill="#fbbf24"/>
        <ellipse cx="110" cy="-2" rx="8" ry="10" fill="#f9a8d4"/>
        {/* Mama eyes — tightly closed, sleeping */}
        <path d="M56,26 Q66,21 76,26" fill="none" stroke="#92400e" strokeWidth="3" strokeLinecap="round"/>
        <path d="M78,26 Q88,21 98,26" fill="none" stroke="#92400e" strokeWidth="3" strokeLinecap="round"/>
        {/* Mama smile */}
        <path d="M68,40 Q80,48 92,40" fill="none" stroke="#92400e" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Nose */}
        <ellipse cx="80" cy="34" rx="8" ry="5.5" fill="#f9a8d4"/>
        {/* Big tail curled around */}
        <path d="M230,30 Q258,10 256,42 Q254,60 236,56 Q222,53 225,40" fill="none" stroke="#d97706" strokeWidth="8" strokeLinecap="round"/>
        <circle cx="226" cy="40" r="13" fill="#d97706"/>
        {/* ZZZ mama */}
        <text x="125" y="5" fontSize="18" fill="#a78bfa" fontWeight="bold" opacity="0.7">z</text>
        <text x="140" y="-10" fontSize="14" fill="#a78bfa" fontWeight="bold" opacity="0.5">z</text>
        <text x="152" y="-22" fontSize="11" fill="#a78bfa" fontWeight="bold" opacity="0.35">z</text>
      </g>
      {/* Baby cub sleeping against mama */}
      <g transform="translate(180,238)">
        <circle cx="40" cy="5" r="24" fill="#fbbf24"/>
        <ellipse cx="40" cy="28" rx="34" ry="18" fill="#fef3c7"/>
        <circle cx="40" cy="5" r="18" fill="#fef3c7"/>
        <ellipse cx="25" cy="-9" rx="7" ry="8" fill="#fef3c7"/>
        <ellipse cx="25" cy="-9" rx="4" ry="5" fill="#fce7f3"/>
        <ellipse cx="55" cy="-9" rx="7" ry="8" fill="#fef3c7"/>
        <ellipse cx="55" cy="-9" rx="4" ry="5" fill="#fce7f3"/>
        {/* Baby eyes closed */}
        <path d="M29,3 Q36,-1 43,3" fill="none" stroke="#92400e" strokeWidth="2" strokeLinecap="round"/>
        <path d="M37,3 Q44,-1 51,3" fill="none" stroke="#92400e" strokeWidth="2" strokeLinecap="round"/>
        {/* Baby nose */}
        <ellipse cx="40" cy="10" rx="4.5" ry="3" fill="#f9a8d4"/>
        {/* Baby smile */}
        <path d="M33,15 Q40,20 47,15" fill="none" stroke="#92400e" strokeWidth="1.5" strokeLinecap="round"/>
        {/* Baby paws */}
        <ellipse cx="18" cy="38" rx="10" ry="7" fill="#fef3c7"/>
        <ellipse cx="62" cy="38" rx="10" ry="7" fill="#fef3c7"/>
        {/* Baby ZZZ */}
        <text x="68" y="-5" fontSize="13" fill="#a78bfa" fontWeight="bold" opacity="0.7">z</text>
        <text x="78" y="-16" fontSize="10" fill="#a78bfa" fontWeight="bold" opacity="0.5">z</text>
      </g>
    </svg>
  );
}
