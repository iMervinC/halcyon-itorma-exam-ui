import { CardContainer } from '@/components/UI'

const Header = () => {
  return (
    <div className="relative">
      <h1 className="text-white text-center mb-2  z-2">
        Welcome back, Dwight!
      </h1>
      <div className="flex space-x-2 mx-3 z-10">
        <CardContainer title="Commission this Week">
          <img src="/assets/coin.svg" alt="coin" className="h-5" />
          <p>800.00</p>
        </CardContainer>
        <CardContainer title="Active Members">
          23<span className="text-gold">/24</span>
        </CardContainer>
      </div>
    </div>
  )
}

export default Header
