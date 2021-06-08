import { PageWrap } from '@/components/UI'
import Header from '@/components/Header'
import Summary from '@/components/Summary'
import Goals from '@/components/Goals'
import GridMenu from '@/components/GridMenu'

export default function Home() {
  return (
    <PageWrap title="Dashboard">
      <Header />
      <Summary />
      <Goals />
      <GridMenu />
      <div className="mx-6 flex space-x-3 mb-5">
        <button className="flex-1 font-bold text-gold p-2 border border-gold rounded-l-full">
          Remit
        </button>
        <button className="flex items-center justify-center flex-1 font-bold text-white bg-gold p-2 border border-gold  rounded-r-full">
          <img src="/assets/coin.svg" alt="coin" className="h-5 mr-2" />
          New Sale
        </button>
      </div>
    </PageWrap>
  )
}
