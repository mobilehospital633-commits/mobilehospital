import React from 'react';

interface LogoProps {
  className?: string;
  size?: number | string;
  variant?: 'emblem' | 'horizontal' | 'stacked';
  showSubtitle?: boolean;
  lang?: 'bn' | 'en';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 48,
  variant = 'emblem',
  showSubtitle = true,
  lang = 'bn',
}) => {
  // Unique gradient and filter IDs to prevent collisions
  const filterId = 'mh-metallic-bevel';
  const glowId = 'mh-cyan-glow';
  const cyanGradId = 'mh-gear-grad';
  const copperGradId = 'mh-copper-grad';
  const copperDarkGradId = 'mh-copper-dark-grad';
  const shadowId = 'mh-depth-shadow';

  // 12-tooth precision mechanical gear path centered at (100, 100) with outer radius ~86, inner cog base ~68
  const gearPath = `
    M 92 14 L 108 14 L 111 31 C 117 33 123 36 128 39 L 143 28 L 155 39 L 145 54 C 149 60 152 66 154 72 L 171 75 L 171 91 L 154 94 C 152 100 149 106 145 112 L 155 127 L 143 138 L 128 127 C 123 130 117 133 111 135 L 108 152 L 92 152 L 89 135 C 83 133 77 130 72 127 L 57 138 L 45 127 L 55 112 C 51 106 48 100 46 94 L 29 91 L 29 75 L 46 72 C 48 66 51 60 55 54 L 45 39 L 57 28 L 72 39 C 77 36 83 33 89 31 Z
  `;

  // Render the pure emblem (Gear + MH Monogram) with transparent background
  const renderEmblem = (emblemSize: number | string = size) => (
    <svg
      viewBox="0 0 200 200"
      width={emblemSize}
      height={emblemSize}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-300"
      style={{ filter: 'drop-shadow(0 4px 12px rgba(14, 165, 233, 0.25))' }}
      aria-label="Mobile Hospital Logo Emblem"
    >
      <defs>
        {/* Gear Cyan / Teal Metallic Linear Gradient */}
        <linearGradient id={cyanGradId} x1="30" y1="20" x2="170" y2="180" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7dd3fc" />
          <stop offset="20%" stopColor="#38bdf8" />
          <stop offset="50%" stopColor="#0284c7" />
          <stop offset="78%" stopColor="#0369a1" />
          <stop offset="100%" stopColor="#0c4a6e" />
        </linearGradient>

        {/* Gear Rim Highlight */}
        <linearGradient id={`${cyanGradId}-rim`} x1="100" y1="20" x2="100" y2="150" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#e0f2fe" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#075985" stopOpacity="0.9" />
        </linearGradient>

        {/* Inner Tech Chamber Gradient */}
        <radialGradient id={`${cyanGradId}-inner`} cx="100" cy="83" r="56" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.45" />
          <stop offset="55%" stopColor="#0369a1" stopOpacity="0.65" />
          <stop offset="90%" stopColor="#082f49" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#0284c7" stopOpacity="1" />
        </radialGradient>

        {/* Copper / Bronze 3D Monogram Gradient */}
        <linearGradient id={copperGradId} x1="60" y1="45" x2="140" y2="120" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffedd5" />
          <stop offset="18%" stopColor="#fdba74" />
          <stop offset="45%" stopColor="#fb923c" />
          <stop offset="70%" stopColor="#c2410c" />
          <stop offset="90%" stopColor="#9a3412" />
          <stop offset="100%" stopColor="#431407" />
        </linearGradient>

        {/* Copper Bevel Outline */}
        <linearGradient id={copperDarkGradId} x1="70" y1="45" x2="130" y2="125" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffedd5" />
          <stop offset="50%" stopColor="#ea580c" />
          <stop offset="100%" stopColor="#270902" />
        </linearGradient>

        {/* Soft Drop Shadow for MH Monogram */}
        <filter id={shadowId} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2.5" stdDeviation="2.8" floodColor="#000000" floodOpacity="0.8" />
        </filter>

        {/* Cyan Ambient Glow */}
        <filter id={glowId} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* --- GEAR STRUCTURE --- */}
      {/* Outer Gear Body with metallic gradient */}
      <path
        d={gearPath}
        fill={`url(#${cyanGradId})`}
        stroke={`url(#${cyanGradId}-rim)`}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      {/* Outer Gear Bevel Inner Edge */}
      <circle
        cx="100"
        cy="83"
        r="54"
        fill={`url(#${cyanGradId}-inner)`}
        stroke="#7dd3fc"
        strokeWidth="2"
      />

      {/* High-tech Concentric Circuit Tracks inside Gear */}
      <circle
        cx="100"
        cy="83"
        r="49"
        fill="none"
        stroke="#38bdf8"
        strokeWidth="1.2"
        strokeDasharray="4 3"
        opacity="0.8"
      />
      <circle
        cx="100"
        cy="83"
        r="44"
        fill="none"
        stroke="#67e8f9"
        strokeWidth="0.8"
        strokeDasharray="14 4 3 4"
        opacity="0.6"
      />
      <circle
        cx="100"
        cy="83"
        r="40"
        fill="none"
        stroke="#bae6fd"
        strokeWidth="1.5"
        opacity="0.45"
      />

      {/* Circuit Nodes / Accents around the ring */}
      <circle cx="100" cy="34" r="2" fill="#e0f2fe" />
      <circle cx="100" cy="132" r="2" fill="#e0f2fe" />
      <circle cx="51" cy="83" r="2" fill="#e0f2fe" />
      <circle cx="149" cy="83" r="2" fill="#e0f2fe" />

      {/* --- MONOGRAM "MH" --- */}
      {/* Group with 3D drop shadow */}
      <g filter={`url(#${shadowId})`}>
        
        {/* Letter 'M' (Left side) */}
        {/* Stylized geometric metallic M */}
        <path
          d="M 64 116 L 64 54 L 79 54 L 92 84 L 105 54 L 118 54 L 118 73 L 108 73 L 108 67 L 97 91 L 87 91 L 76 67 L 76 116 Z"
          fill={`url(#${copperGradId})`}
          stroke={`url(#${copperDarkGradId})`}
          strokeWidth="1.2"
          strokeLinejoin="round"
        />

        {/* Letter 'H' (Intertwined / Overlapping on right side) */}
        {/* Stylized geometric metallic H */}
        <path
          d="M 98 116 L 98 94 L 122 94 L 122 116 L 134 116 L 134 54 L 122 54 L 122 83 L 98 83 L 98 73 L 107 73 L 107 63 L 96 63 L 94 63 L 86 63 L 86 116 Z"
          fill={`url(#${copperGradId})`}
          stroke={`url(#${copperDarkGradId})`}
          strokeWidth="1.2"
          strokeLinejoin="round"
          opacity="0.97"
        />

        {/* Monogram High-Contrast Bevel Lines (Specular highlights) */}
        {/* M left ridge */}
        <path d="M 66 56 L 66 114" stroke="#ffedd5" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
        <path d="M 66 56 L 77 56 L 91 85" stroke="#ffedd5" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
        
        {/* H right ridge */}
        <path d="M 124 56 L 132 56" stroke="#ffedd5" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
        <path d="M 132 56 L 132 114" stroke="#ffedd5" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
        <path d="M 99 85 L 121 85" stroke="#ffedd5" strokeWidth="1" opacity="0.6" />
      </g>

      {/* Micro-sparkle accent on top-left of gear */}
      <circle cx="72" cy="40" r="1.5" fill="#ffffff" opacity="0.9" />
      <circle cx="128" cy="125" r="1.2" fill="#ffffff" opacity="0.8" />
    </svg>
  );

  // If variant is emblem only
  if (variant === 'emblem') {
    return (
      <div className={`inline-flex items-center justify-center select-none ${className}`}>
        {renderEmblem()}
      </div>
    );
  }

  // Horizontal variant (Emblem on left + Text on right)
  if (variant === 'horizontal') {
    return (
      <div className={`inline-flex items-center gap-3 select-none ${className}`}>
        {renderEmblem(size)}
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5">
            <span className="text-xl sm:text-2xl font-black tracking-tight text-white drop-shadow-xs font-sans">
              {lang === 'bn' ? 'মোবাইল হসপিটাল' : 'Mobile Hospital'}
            </span>
          </div>
          {showSubtitle && (
            <span className="text-[11px] sm:text-xs font-semibold text-emerald-400 tracking-wide font-sans">
              {lang === 'bn' ? 'মোবাইল রিপেয়ারিং সেন্টার' : 'Mobile Repairing Center'}
            </span>
          )}
        </div>
      </div>
    );
  }

  // Stacked variant (Emblem centered on top + 3D Text underneath, matching user's exact uploaded image)
  return (
    <div className={`flex flex-col items-center justify-center text-center select-none ${className}`}>
      {renderEmblem(size)}
      
      {/* Brand Title: Mobile Hospital in 3D Bronze/Copper Styling */}
      <div className="mt-2 text-center">
        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-orange-400 to-amber-600 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-sans">
          {lang === 'bn' ? 'মোবাইল হসপিটাল' : 'Mobile Hospital'}
        </h3>
        
        {showSubtitle && (
          <p className="text-sm sm:text-base font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-orange-300 to-amber-500 drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)] mt-0.5 tracking-wider font-sans">
            {lang === 'bn' ? 'মোবাইল রিপেয়ারিং সেন্টার' : 'Mobile Repairing Center'}
          </p>
        )}
      </div>
    </div>
  );
};
