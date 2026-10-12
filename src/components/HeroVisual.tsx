export default function HeroVisual() {
  return (
    <div className="hero-float relative mx-auto h-[52vh] w-full max-w-xl md:h-[62vh]">
      <div className="hero-glow absolute left-1/2 top-[28%] h-40 w-40 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,77,13,0.55)_0%,rgba(255,140,40,0.18)_45%,transparent_70%)] blur-2xl" />
      <svg
        viewBox="0 0 420 560"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
        role="img"
      >
        <defs>
          <linearGradient id="visor" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffb347" />
            <stop offset="45%" stopColor="#ff4d0d" />
            <stop offset="100%" stopColor="#ffd166" />
          </linearGradient>
          <radialGradient id="lens" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#ffe0a3" stopOpacity="0.95" />
            <stop offset="55%" stopColor="#ff6a1a" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#7a1a00" stopOpacity="0.95" />
          </radialGradient>
        </defs>

        {/* neck / collar */}
        <path
          d="M158 350 C150 420 145 470 140 520 L280 520 C275 470 270 420 262 350 Z"
          fill="#0d0c0a"
        />
        <path
          d="M120 360 C150 330 270 330 300 360 L285 430 C250 405 170 405 135 430 Z"
          fill="#161411"
        />

        {/* head silhouette */}
        <path
          d="M150 210 C145 140 175 95 210 90 C255 84 290 120 285 195 C282 235 270 265 255 290 C240 315 185 320 165 295 C152 275 152 245 150 210 Z"
          fill="#0d0c0a"
        />

        {/* visor frame */}
        <path
          d="M132 195 C145 170 275 165 300 192 C308 205 305 230 290 240 C250 255 165 255 138 238 C125 228 123 210 132 195 Z"
          fill="#0d0c0a"
        />
        <ellipse cx="175" cy="210" rx="38" ry="28" fill="url(#lens)" />
        <ellipse cx="250" cy="210" rx="40" ry="29" fill="url(#lens)" />
        <path
          d="M210 205 H220"
          stroke="url(#visor)"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M140 205 C160 185 265 182 292 205"
          fill="none"
          stroke="url(#visor)"
          strokeWidth="3"
          opacity="0.55"
        />
      </svg>
    </div>
  );
}
