import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

const lessons = [
  { title: 'Introduction', completion: '91%', date: '12/22/2020' },
  { title: 'Teams', completion: '91%', date: '12/22/2020' },
  { title: 'Beskar Management', completion: '92%', date: '12/22/2020' },
  { title: '"This is the Way"', completion: '94%', date: '12/22/2020' },
  {
    title: 'Mandalorians and the community',
    completion: '91%',
    date: '12/22/2020',
  },
]

const CourseContent = () => {
  return (
    <div className="px-5 sm:px-0">
      <Rating />
      <Lessons />
    </div>
  )
}

const Rating = () => (
  <div className="flex flex-col items-center justify-center border border-mando p-7 space-y-4 mb-6">
    <p className="text-center w-[60%]">
      You have completed{' '}
      <span className="font-bold">Mandalorian Basics: Lesson 3</span> with an
      overall rating of:
    </p>
    <span className="text-5xl font-bold">91.8 %</span>
  </div>
)

const Lessons = () => (
  <>
    <h3 className="font-bold">Lessons</h3>
    <ul className="space-y-3">
      {lessons.map((lesson, index) => (
        <li className="lesson-card">
          <div className="space-y-3">
            <h4 className="font-bold text-[#000000bd] text-center md:text-left">
              Lesson {index + 1}: {lesson.title}{' '}
              <FontAwesomeIcon
                icon={faCircle}
                className="w-4 mr-2 text-green-400 inline"
              />
            </h4>
            <div className="flex space-x-6 text-[#000000bd]">
              <span>Completion:</span>
              <span>{lesson.completion} passed</span>
              <span> {lesson.date}</span>
            </div>
          </div>
          <button className="lesson-btn">View Lesson</button>
        </li>
      ))}
    </ul>
  </>
)
export default CourseContent
