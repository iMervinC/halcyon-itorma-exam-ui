import { PageWrap } from '@/components/UI'
import CourseContent from '@/components/CourseContent'
import CourseDetail from '@/components/CourseDetail'
import BreadCrumb from '@/components/BreadCrumb'
import Courses from '@/components/Courses'

export default function Home() {
  return (
    <PageWrap title="The Mandalorian">
      <BreadCrumb title="VIEW COURSE" btnLabel="Back to Courses" />
      <div className="my-grid">
        <CourseDetail />
        <CourseContent />
      </div>
      <BreadCrumb title="AVAILABLE COURSE" btnLabel="View all courses" />
      <Courses />
    </PageWrap>
  )
}
