import Image from 'next/image'

const courses = [
  { title: 'Force Training Essentials' },
  { title: 'Bounty Hunter Planning' },
  { title: 'Effective Management' },
  { title: 'Mandalore goals' },
]

const Courses = () => {
  return (
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-6 mx-6 sm:mx-0">
      {courses.map((course) => (
        <CourseCard title={course.title} />
      ))}
    </div>
  )
}

const CourseCard = ({ title }: { title: string }) => {
  return (
    <div className="bg-primary rounded-md w-[fit-content] mx-auto shadow-2xl cursor-pointer transform hover:scale-105 transition-transform active:scale-100 group">
      <Image
        src={`/img/${title}.jpg`}
        width={500}
        height={282}
        priority
        alt={title}
        className="w-full h-auto md:w-[100px] rounded-t-md"
      />
      <div className="py-2 px-3 space-y-9">
        <h3 className="font-bold text-white text-2xl lg:text-2xl group-hover:text-mando">
          {title}
        </h3>
        <span className="text-mando text-right block">View Course</span>
      </div>
    </div>
  )
}

export default Courses
