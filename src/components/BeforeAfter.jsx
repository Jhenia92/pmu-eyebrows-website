import { useState } from 'react'

import browsBefore from '../assets/brows-before.jpg'
import browsAfter from '../assets/brows-after.jpg'
import lipsBefore from '../assets/lips-before.jpg'
import lipsAfter from '../assets/lips-after.jpg'

const ZONES = [
  {
    id: 'brows',
    label: 'Брови',
    before: browsBefore,
    after: browsAfter,
  },
  {
    id: 'lips',
    label: 'Губы',
    before: lipsBefore,
    after: lipsAfter,
  },
]

export default function BeforeAfter() {
  const [position, setPosition] = useState(50)
  const [activeTab, setActiveTab] = useState('brows')

  const zone = ZONES.find((z) => z.id === activeTab) ?? ZONES[0]

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Вкладки зон */}
      <div className="mb-4 flex flex-wrap gap-2">
        {ZONES.map((z) => (
          <button
            key={z.id}
            type="button"
            onClick={() => setActiveTab(z.id)}
            aria-pressed={activeTab === z.id}
            className={
              activeTab === z.id
                ? 'rounded-full bg-stone-900 px-5 min-h-11 py-2.5 text-sm font-medium text-white transition-colors'
                : 'rounded-full bg-stone-100 px-5 min-h-11 py-2.5 text-sm font-medium text-stone-600 transition-colors hover:bg-stone-200'
            }
          >
            {z.label}
          </button>
        ))}
      </div>

      <div className="@container relative aspect-[4/3] rounded-xl overflow-hidden select-none">
        {/* Базовое изображение ("После") */}
        <img
          key={`after-${zone.id}`}
          src={zone.after}
          alt={`${zone.label}: после`}
          className="absolute inset-0 h-full w-full object-cover "
          draggable={false}
        />

        {/* Верхнее изображение ("До"), обрезается по position */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <img
            key={`before-${zone.id}`}
            src={zone.before}
            alt={`${zone.label}: до`}
            className="absolute inset-y-0 left-0 h-full object-cover object-[center_35%]"
            style={{ width: '100cqw', maxWidth: 'none' }}
            draggable={false}
          />
        </div>

        {/* Разделительная линия */}
        <div
          className="absolute inset-y-0 w-0.5 bg-white shadow-[0_0_8px_rgba(0,0,0,0.5)]"
          style={{ left: `calc(${position}% - 1px)` }}
        />

        {/* Ползунок управления */}
        <input
          type="range"
          min={0}
          max={100}
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          aria-label={`Сравнение до и после: ${zone.label}`}
          className="absolute bottom-4 left-4 right-4 w-[calc(100%-2rem)] cursor-ew-resize accent-white"
        />
      </div>
    </div>
  )
}