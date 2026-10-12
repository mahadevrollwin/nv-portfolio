type OrnamentProps = {
  label?: string;
  className?: string;
};

export default function Ornament({ label, className = "" }: OrnamentProps) {
  return (
    <div className={`ornament text-[11px] font-semibold uppercase tracking-[0.28em] ${className}`}>
      <span className="inline-flex items-center gap-2 whitespace-nowrap text-accent">
        <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden className="opacity-80">
          <path
            d="M7 0 L8.2 5.2 L13.5 5.2 L9.2 8.3 L10.5 13.5 L7 10.2 L3.5 13.5 L4.8 8.3 L0.5 5.2 L5.8 5.2 Z"
            fill="currentColor"
          />
        </svg>
        {label}
        <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden className="opacity-80">
          <path
            d="M7 0 L8.2 5.2 L13.5 5.2 L9.2 8.3 L10.5 13.5 L7 10.2 L3.5 13.5 L4.8 8.3 L0.5 5.2 L5.8 5.2 Z"
            fill="currentColor"
          />
        </svg>
      </span>
    </div>
  );
}
