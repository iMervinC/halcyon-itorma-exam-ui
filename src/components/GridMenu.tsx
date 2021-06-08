import React from 'react'
import { CardContainer } from './UI'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMap,
  faCloud,
  faUser,
  faCar,
} from '@fortawesome/free-solid-svg-icons'

const GridMenu = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 mt-10 mb-5  mx-6 gap-2">
      <CardContainer gold>
        <div className="flex flex-col items-center">
          <FontAwesomeIcon
            icon={faMap}
            size="lg"
            className="cursor-pointer w-7"
          />
          <span>Map</span>
        </div>
      </CardContainer>
      <CardContainer gold>
        <div className="flex flex-col items-center">
          <FontAwesomeIcon
            icon={faCloud}
            size="lg"
            className="cursor-pointer w-7"
          />
          <span>Sync Data</span>
        </div>
      </CardContainer>
      <CardContainer gold>
        <div className="flex flex-col items-center">
          <FontAwesomeIcon
            icon={faUser}
            size="lg"
            className="cursor-pointer w-7"
          />
          <span>Members</span>
        </div>
      </CardContainer>
      <CardContainer gold>
        <div className="flex flex-col items-center">
          <FontAwesomeIcon
            icon={faCar}
            size="lg"
            className="cursor-pointer w-7"
          />
          <span>Delivery</span>
        </div>
      </CardContainer>
    </div>
  )
}

export default GridMenu
