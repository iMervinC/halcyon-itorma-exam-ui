import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faRedoAlt } from '@fortawesome/free-solid-svg-icons'
import { format } from 'date-fns'

const Nav = () => {
  const [nav, setNav] = useState<'Dashboard' | 'Sales'>('Dashboard')
  const date = new Date().toDateString()

  return (
    <nav className="bg-nav w-full h-20">
      <div className={`nav ${nav === 'Dashboard' && 'text-white'}`}>
        <FontAwesomeIcon
          icon={faBars}
          size="lg"
          className="cursor-pointer w-7"
        />
        <span className="text-sm">{`${nav} | ${date}`}</span>
        <FontAwesomeIcon
          icon={faRedoAlt}
          size="lg"
          className="cursor-pointer w-7"
        />
      </div>
    </nav>
  )
}

export { Nav }
