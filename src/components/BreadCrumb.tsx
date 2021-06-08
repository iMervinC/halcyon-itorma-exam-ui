import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

interface BreadcrumType {
  title: string
  btnLabel: string
}

const BreadCrumb = ({ title, btnLabel }: BreadcrumType) => {
  return (
    <div className="w-full px-5 md:p-0 flex align justify-between items-center my-8">
      <h2 className="text-mando font-bold text-2xl sm:mr-16 w-[11.5rem] sm:w-[fit-content]">
        {title}
      </h2>
      <span className="flex-1 h-[3px] bg-[#6b6b6b] hidden md:block" />
      <div className="flex items-center font-medium text-[#6b6b6b] sm:ml-6 cursor-pointer hover:text-black hover:font-medium">
        <p>{btnLabel}</p>
        <FontAwesomeIcon icon={faCaretRight} className="w-3 text-black ml-2" />
      </div>
    </div>
  )
}

export default BreadCrumb
