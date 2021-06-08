import type { FC } from 'react'

export const CardContainer: FC<{
  title?: string
  className?: string
  gold?: boolean
}> = ({ children, title, className, gold }) => {
  return (
    <div
      className={`group card flex-1 cursor-pointer ${className} ${
        gold && 'border border-gold solid'
      }`}
    >
      <span className="flex items-center justify-center font-bold space-x-2 group-hover:text-gold transition-colors ease-out">
        {children}
      </span>

      <span className="text-gold block text-center text-xs">{title}</span>
    </div>
  )
}
