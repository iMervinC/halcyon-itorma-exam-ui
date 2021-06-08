import React from 'react'
import { CardContainer } from './UI'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartPie } from '@fortawesome/free-solid-svg-icons'

const Summary = () => {
  return (
    <div className="mt-12">
      <h2 className="text-center text-gold uppercase font-bold text-sm">
        Summary - All Products
      </h2>
      <div className="grid grid-cols-2 grid-rows-2 gap-2 mx-6 mb-5">
        <CardContainer gold title="Today's sales" className="col-span-2">
          ₱ 5,700.00
        </CardContainer>
        <CardContainer gold title="Member Sales">
          ₱ 2,100.00
        </CardContainer>
        <CardContainer gold title="Walk-in sales">
          ₱ 3,6000
        </CardContainer>
      </div>
      <div className="flex space-x-4 justify-center">
        <span className="h-4 w-4 rounded-full  bg-nav transform scale-150" />
        <span className="h-4 w-4 rounded-full  bg-gold transform hover:scale-150" />
        <span className="h-4 w-4 rounded-full  bg-gold transform hover:scale-150" />
        <span className="h-4 w-4 rounded-full  bg-gold transform hover:scale-150" />
      </div>

      <CardContainer gold className="mx-16 group mt-6 transform translate-y-4">
        <FontAwesomeIcon
          icon={faChartPie}
          size="lg"
          className="cursor-pointer w-7 group-hover:text-gold"
        />
        <span className="text-sm font-normal">View detailed analytics</span>
      </CardContainer>
    </div>
  )
}

export default Summary
