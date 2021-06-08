import Link from 'next/link'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useWindowSize } from '@/Utils/hooks'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const size = useWindowSize()

  return (
    <nav className="bg-primary h-20">
      <div className="container h-full flex items-center px-5 md:p-0">
        <Link href="/">
          <a href="/" className="h-[60%]">
            <img src="/logo.svg" alt="logo" className="h-full" />
          </a>
        </Link>
        {size.width >= 768 && <NavList />}
        {size.width <= 768 && (
          <FontAwesomeIcon
            icon={isOpen ? faTimes : faBars}
            size="2x"
            className="text-mando ml-auto cursor-pointer w-7"
            onClick={() => setIsOpen((open) => !open)}
          />
        )}
      </div>
      {isOpen && size.width <= 768 && <NavMobile />}
    </nav>
  )
}

const NavList = () => (
  <ul className="text-[#eeeeee94] uppercase flex justify-between items-center space-x-8 ml-auto">
    <li className="nav-item">
      <span className="text-mando">Welcome back,</span> Din Djarin!
    </li>
    <li className="nav-item">Home</li>
    <li className="nav-item text-white font-medium ">My learnings</li>
    <li className="nav-item">Logout</li>
  </ul>
)

const NavMobile = () => (
  <div className="absolute bg-primary w-full py-10 z-10">
    <ul className=" flex flex-col justify-between items-center space-y-5 ml-auto text-[#eeeeee94] uppercase">
      <li className="nav-item">
        <span className="text-mando">Welcome back,</span> Din Djarin!
      </li>
      <li className="nav-item">Home</li>
      <li className="nav-item text-white font-medium ">My learnings</li>
      <li className="nav-item">Logout</li>
    </ul>
  </div>
)

export { Nav }
