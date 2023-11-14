import React from 'react'
import yellowStar from '../../assets/img/ikons/star.svg'
import grayStar from '../../assets/img/ikons/star_gray.svg'
import shoppingCard from '../../assets/img/ikons/shopping_cart.svg'
import './style.scss'

const RaitingCard = ({item}) => {
  return (
    <div className='raitingCard'>
        <div className="img-wrapper">
            <img src={item.img} alt="" />
        </div>

        <span className='category'>{item.category}</span>

        <h1>{item.title}</h1>

        <div className="raiting-stars">
        {[...Array(item.raitingBy5)].map((x, index) => (
          <img key={index} src={yellowStar} alt="" />
        ))}

        {[...Array(5 - item.raitingBy5)].map((x, index) => (
          <img key={index + item.raitingBy5} src={grayStar} alt="" />
        ))}
        </div>

        <div className="soldBy">
            <p>
                By
                <span>{item.seller}</span></p>
        </div>

        <div className="purchase-wrapper">
            <p>

                <span id='currentPrice'>${item.currentPrice}</span>
                {
                    item.hasDiscount && (
                        <span id="discountline">
                        ${item.beforePrice}
                </span>
                    )
                }
                
            </p>

            <button>
                <img src={shoppingCard} alt="" />

                Add
            </button>

        </div>
    </div>
  )
}

export default RaitingCard