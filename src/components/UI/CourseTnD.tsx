import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faCircle } from '@fortawesome/free-solid-svg-icons'

const CourseTnD = ({ type }: { type: 'time' | 'date' }) => (
  <div className="flex text-sm">
    <FontAwesomeIcon
      icon={type === 'time' ? faClock : faCircle}
      className={`w-4 mr-2 ${type === 'date' && 'text-green-400'}`}
    />
    {type === 'time' ? 'Duration' : 'Completed'}
    <span className="font-bold ml-auto">
      {type === 'time' ? '2h 00m' : '12/01/2021'}
    </span>
  </div>
)

export { CourseTnD }
