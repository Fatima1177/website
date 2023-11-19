import React from 'react'
import './style.scss'
import googleplay from '../../assets/img/pictures/appCard/googleplay.svg'
import appstore from '../../assets/img/pictures/appCard/appstore.svg'
import iphone1 from '../../assets/img/pictures/appCard/iphone1.png'
import iphone2 from '../../assets/img/pictures/appCard/iphone2.png'

const AppCard = () => {
  return (
    <div className='app-sec'>
        <div className="container">
            <div className="app-left">
                <div className="app-txt">
                    <h1>Shop Faster With Groceyish App</h1>
                    <p>Available on both IOS & Android</p>
                </div>

                <div className="img-btn">
                    <img src={googleplay} alt="" />
                    <img src={appstore} alt="" />
                </div>
            </div>
            <div className="app-right">
                <div className="phone1">
                    <img src={iphone1} alt="" />
                </div>
                <div className="phone2">
                <img src={iphone2} alt="" />
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default AppCard