import React from 'react'

const GoalBtn = ({ label, type }: { label: string; type?: 'new' }) => {
  return (
    <button
      className={`flex-1 text-sm py-4 rounded-lg border border-gold solid ${
        type === 'new' && 'border-blu bg-blu text-white font-bold shadow-blue'
      }`}
    >
      {label}
    </button>
  )
}

export { GoalBtn }
