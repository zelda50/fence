import React from 'react'
import CardItem from './CardItem'
import './Cards.css';
import cedarImg from '../assets/cedar.jpg';
import chainImg from '../assets/chain-link.jpeg'
import plasticImg from '../assets/plastic-panel.jpeg'

const Cards = () => {
  return (
    <div className='cards'>
      <h1>What we do!</h1>
      <div className="cards__container">
        <div className="cards__wraper">
          <ul className="cards__items">
            <CardItem
            src={cedarImg}
            text="Let Us Install Beautiful Wooden Fencing on Your Property"
            label="Cedar Fencing"
            path="/cedar"
            />
            <CardItem
            src={chainImg}
            text="Let Us Install Beautiful Chain Link Fencing on Your Property"
            label="Cedar Fencing"
            path="/chain"
            />
            <CardItem
            src={plasticImg}
            text="Let Us Install Beautiful Metal Fencing on Your Property"
            label="Cedar Fencing"
            path="/plastic"
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards;
