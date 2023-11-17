import './style.scss'
import logo from '../../assets/img/ikons/logo.svg'
import location from '../../assets/img/ikons/location.svg'
import phone from '../../assets/img/ikons/phone.svg'
import email from '../../assets/img/ikons/email.svg'
import clock from '../../assets/img/ikons/clock.svg'


const FooterCard = () => {
  return (
    <div className='footer-card'>
        <div className="container">
            <div className="footer-info">
                <div className="contact-info">
                    <div className="footer-logo">
                        <img src={logo} alt="" />
                        <div className="footer-logo-txt">
                            <h2>Groceyish</h2>
                            <h3>GROCERY</h3>
                        </div>
                    </div>
                    <div className="info">
                        <ul>
                            <li className='address'>
                                <img src={location} alt="" />
                                Address: 1762 School House Road
                            </li>
                            <li className='call'>
                                <img src={phone} alt="" />
                                Call Us: 1233-777
                            </li>
                            <li className='email'>
                                <img src={email} alt="" />
                                Email: groceyish@contact.com
                            </li>
                            <li className='clock'>
                                <img src={clock} alt="" />
                                Work hours: 8:00 - 20:00, Sunday -  Thursday
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="acount">
                    <ul>
                        <h1>Account</h1>
                        <li>Wishlist</li>
                        <li>Cart</li>
                        <li>Track Order</li>
                        <li>Shipping Details</li>
                    </ul>
                </div>
                <div className="footer-links">
                    <ul>
                        <h1>Useful links</h1>
                        <li>About Us</li>
                        <li>Conact </li>
                        <li>Hot deals</li>
                        <li>Promotions</li>
                        <li>New products</li>
                    </ul>
                </div>
                <div className="help-sec">
                    <ul>
                        <h1>Help Center</h1>
                        <li>Payments</li>
                        <li>Refund</li>
                        <li>Checkout</li>
                        <li>Shipping</li>
                        <li>Q&A</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

            </div>


        
        </div>
    </div>
  )
}

export default FooterCard