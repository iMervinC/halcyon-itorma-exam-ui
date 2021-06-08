import { PageWrap } from '@/components/UI'
import Header from '@/components/Header'
import Summary from '@/components/Summary'
import Goals from '@/components/Goals'

export default function Home() {
  return (
    <PageWrap title="Dashboard">
      <Header />
      <Summary />
      <Goals />
    </PageWrap>
  )
}
