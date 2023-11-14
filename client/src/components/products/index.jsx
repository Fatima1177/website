import React from 'react'
import './index.scss'

const ProductHeading = ({title}) => {
  return (
    <div className='products-heading'>
        <div className='container'>
        <h1>{title}</h1>
      <nav>
        <span>All</span>
        <span>Vegetables</span>
        <span>Fruits</span>
        <span>Coffe & teas</span>
        <span>Meat</span>
      </nav>
    </div>
    </div>
  )
}

export default ProductHeading