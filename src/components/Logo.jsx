import { useId } from 'react'

/**
 * Логотип «Natela Permanent Makeup».
 * tone: 'light' — для светлых фонов, 'dark' — для тёмных (например, футера).
 */
export default function Logo({ tone = 'light', className = '' }) {
  const gradientId = useId()
  const isDark = tone === 'dark'

  return (
    <div className={`flex items-center gap-2 sm:gap-3 ${className}`}>
      {/* Монограмма в двойной тонкой рамке */}
      <span className="relative flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center">
        <svg viewBox="0 0 48 48" className="absolute inset-0 h-full w-full" aria-hidden="true">
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#f43f5e" />
              <stop offset="100%" stopColor="#be123c" />
            </linearGradient>
          </defs>
          <circle cx="24" cy="24" r="23" fill="none" stroke={`url(#${gradientId})`} strokeWidth="1" />
          <circle
            cx="24"
            cy="24"
            r="19.5"
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth="0.75"
            opacity="0.45"
          />
        </svg>
        <span
          className={`font-serif text-lg sm:text-xl leading-none ${
            isDark ? 'text-stone-100' : 'text-stone-900'
          }`}
        >
          N
        </span>
      </span>

      {/* Текстовая часть */}
      <span className="flex flex-col leading-none">
        <span
          className={`whitespace-nowrap font-serif text-base sm:text-xl font-semibold uppercase tracking-[0.1em] sm:tracking-[0.22em] ${
            isDark ? 'text-stone-100' : 'text-stone-900'
          }`}
        >
          Natela 
        </span>
        <span className="mt-1 sm:mt-1.5 flex items-center gap-1.5 sm:gap-2">
          <span aria-hidden="true" className="h-px w-2.5 sm:w-4 bg-rose-400/70" />
          <span className="text-[8px] sm:text-[9px] font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-rose-500">
            Permanent Makeup
          </span>
          <span aria-hidden="true" className="h-px w-2.5 sm:w-4 bg-rose-400/70" />
        </span>
      </span>
    </div>
  )
}