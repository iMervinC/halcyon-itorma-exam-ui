import React from 'react'
import { GoalBtn } from './UI'

interface GoalT {
  product: string
  percent: string
  set: string
  goal: string
  unitToGo: number
  endsIn?: number
}
const goals: GoalT[] = [
  {
    product: 'Plot of land - Moon',
    percent: '83.8%',
    set: '83,900',
    goal: '100,000',
    unitToGo: 1800,
    endsIn: 11,
  },
  {
    product: 'Ping Pong Table',
    percent: '28.2%',
    set: '9,880',
    goal: '35,000',
    unitToGo: 629,
    endsIn: 47,
  },
  {
    product: 'Mug',
    percent: '11%',
    set: '165',
    goal: '1,500',
    unitToGo: 89,
  },
]

const Goals = () => {
  return (
    <div className="bg-white  pt-10">
      <h2 className="text-gold uppercase font-bold mx-6 text-xl">Goals</h2>
      <ul className="flex space-x-2 overflow-y-auto my-3">
        {goals.map((goal, index) => (
          <GoalCard key={goal.product} goal={goal} index={index} />
        ))}
      </ul>
      <span className="flex space-x-2 mx-6">
        <GoalBtn label="View all your Goals" />
        <GoalBtn label=" + New Goal" type="new" />
      </span>
    </div>
  )
}

const GoalCard = ({ goal, index }: { goal: GoalT; index: number }) => {
  return (
    <div className="rounded-lg flex justify-center items-center w-[300px] bg-gray-800 relative">
      <div className="bg-white p-2 rounded-lg w-[90%] h-[90%] text-xs flex flex-col justify-center items-center z-10">
        <span className="text-[9px]">{goal.product}</span>
        <span className="text-xl font-bold">{goal.percent}</span>
        <span className="text-blue-500">
          ₱{goal.set}/{goal.goal}
        </span>
        <span className="text-blue-500">Product {index + 1}</span>
        <span className="text-blue-500 text-[9px]">
          {goal.unitToGo} Units to Go!
        </span>
        {goal.endsIn && <span>Ends in {goal.endsIn}</span>}
      </div>
      <div
        className={`absolute w-full bottom-0 rounded-lg ${
          index === 0
            ? 'h-[83%] bg-green-400'
            : index === 1
            ? 'h-[20%] bg-[#ff9900]'
            : 'h-[10%] bg-[#ff0000]'
        }`}
      />
    </div>
  )
}

export default Goals
