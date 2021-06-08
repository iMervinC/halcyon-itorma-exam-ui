import Image from 'next/image'
import { CourseTnD } from '@/components/UI'

const CourseDetail = () => {
  return (
    <div className="flex flex-col space-x-4 xl:flex-row px-5 md:px-0">
      <div className="md:w-[40%] md:max-w-[267px] mx-auto mb-5">
        <Image
          src="/img/Economics of Leadership.jpg"
          width={500}
          height={282}
          priority
          alt="Economics of Leadership"
          className="w-full h-auto md:w-[267px] md:h-[151px]"
        />
        <h1 className="text-mando text-title font-bold uppercase my-3">
          Economics of Leadership
        </h1>
        <div className="space-y-2">
          <CourseTnD type="time" />
          <CourseTnD type="date" />
        </div>
      </div>
      <div className="space-y-5 flex-1">
        <span className="block">
          <h3 className="font-bold">Course Descroption</h3>
          <p className="font-light ml-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sit
            provident velit quasi, voluptatibus labore architecto ipsam error
            laudantium beatae magnam sequi consectetur perspiciatis quod
            aspernatur vero illum voluptatum, quam reprehenderit aut corporis
            veniam impedit expedita! Nisi nulla distinctio labore!
          </p>
        </span>
        <span className="block">
          <h3 className="font-bold">Course Descroption</h3>
          <p className="font-light ml-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sit
            provident velit quasi, voluptatibus labore architecto ipsam error
            laudantium beatae magnam sequi consectetur perspiciatis quod
            aspernatur vero illum voluptatum, quam reprehenderit aut corporis
            veniam impedit expedita! Nisi nulla distinctio labore!
          </p>
        </span>
      </div>
    </div>
  )
}

export default CourseDetail
