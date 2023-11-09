import './style.scss'
import logo from '../../assets/img/ikons/logo.svg'
import searchIkon from '../../assets/img/ikons/search.svg'
import wishlist from '../../assets/img/ikons/Wishlist.svg'
import mycard from '../../assets/img/ikons/Mycard.svg'
import down from '../../assets/img/ikons/down.svg'
import profpic from '../../assets/img/picture/profpic.png'


const Header = () => {
  return (
     <header>
      <div className="main-header">
        <div className="header-logo">
          <img src={logo} alt="" />
          <div className="logo-txt">
            <h2>Groceyish</h2>
            <h3>GROCERY</h3>
          </div>
        </div>

        <div className="search-wrapper">
          <div className="search-container">    
            <select name="" id="">
              <option value="">All Categories</option>
              <option value="">Vegetables</option>
              <option value="">Fruits</option>
            </select>

            <div className="line">

            </div>
         
            <input type="text" placeholder="Search for items..." />
          </div>

          <button>
            <img src={searchIkon} alt="" />
          </button>
        </div>

        <div className="my-counter">
          <div className="counter-box">
            <img src={wishlist} alt="" />
            <div className="txt-wrapper">
              <h3>Wishlist</h3>
            </div>
          </div>

          <div className="counter-box">
            <img src={mycard} alt="" />
            <div className="txt-wrapper">
              <h3>My card</h3>
              <p>21$</p>
            </div>
          </div>
        </div>

          
        

        <div className="toggle-menu">
          <img id='profPicture' src={profpic} alt="" />
          <h3>Ramzi Cherif</h3>
          <img id='toggleArrow' src={down} alt="" />
        </div>
        
      </div>
      <div className="links-header">

      </div>
    </header>
  );

}

export default Header