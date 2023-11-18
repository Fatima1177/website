import React from 'react'
import './style.scss'
import sale from '../../assets/img/pictures/specialCard/sale.svg'
import circle from '../../assets/img/pictures/specialCard/circle.svg'
import truck from '../../assets/img/pictures/specialCard/truck.svg'

const SpecialCard = () => {
  return (
    <div className='special-offers'>
      
      <div className="container">
        
          <div className='offers'>
              <img src={sale} alt="" />
              <div  className='offers-txt'>
                <h2>Best Prices & Deals</h2>
                <p>Don’t miss our daily amazing deals and prices</p>
              </div>
          </div>

          <div className='offers'>
              <img src={circle} alt="" />
              <div className='offers-txt' >
                <h2>Refundable </h2>
                <p>If your items have damage we agree to refund it</p>
              </div>
          </div>

          <div className='offers'>
              <img src={truck} alt="" />
              <div className='offers-txt' >
                <h2>Free delivery</h2>
                <p>Do purchase over $50 and get free delivery anywhere</p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default SpecialCard