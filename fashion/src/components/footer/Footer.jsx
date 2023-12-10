import './footer.css'
import twIcon from './../../img/socials/tw.svg'
import instIcon from './../../img/socials/inst.svg'
import fbIcon from './../../img/socials/fb.svg'
import inIcon from './../../img/socials/in.svg'

const Footer = () => {
    return (<footer className="footer">
        <div className="footer__inner">
            <div className="footer__top">
                <div className="footer__title">
                    JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
                </div>
                <div className="footer__subtitle">
                    Type your email down below and be young wild generation
                </div>
                <form action="" className="form">
                    <input type="email" className="footer__input" placeholder='Add your email here' />
                    <button className="footer__btn" type='submit'>SEND</button>
                </form>
            </div>
            <div className="footer__bottom">
                <div className="container">
                    <div className="footer__bottom-inner">
                        <div className="footer__contacts">
                            <div className="footer__c-title">
                                FASHION
                            </div>
                            <div className="footer__c-subtitle">
                                Complete your style with awesome clothes from us.
                            </div>
                            <div className="footer__c-icons">
                                <ul className="footer__icons-list">
                                    <li className="footer__icons-item">
                                        <a href="#" className="footer__icons-link">
                                            <img src={fbIcon} alt="FaceBook" className="footer__icons-img" href="#" />
                                        </a>
                                    </li>
                                    <li className="footer__icons-item">
                                        <a href="#" className="footer__icons-link">
                                            <img src={instIcon} alt="Instagram" className="footer__icons-img" href="#" />
                                        </a>
                                    </li>
                                    <li className="footer__icons-item">
                                        <a href="#" className="footer__icons-link">
                                            <img src={twIcon} alt="Twitter" className="footer__icons-img" href="#" />
                                        </a>
                                    </li>
                                    <li className="footer__icons-item">
                                        <a href="#" className="footer__icons-link">
                                            <img src={inIcon} alt="in" className="footer__icons-img" href="#" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer__categories">
                            <ul className="footer__company-list">
                                <li className="footer__list-title">
                                    Company
                                </li>
                                <li className="footer__company-item"><a href="#" className="footer__company-link">About</a></li>
                                <li className="footer__company-item"><a href="#" className="footer__company-link">Contact us</a></li>
                                <li className="footer__company-item"><a href="#" className="footer__company-link">Support</a></li>
                                <li className="footer__company-item"><a href="#" className="footer__company-link">Careers</a></li>
                            </ul>
                            <ul className="footer__quickLink-list">
                                <li className="footer__list-title">
                                    Quick Link
                                </li>
                                <li className="footer__quickLink-item"><a href="#" className="footer__quickLink-link">Share Location</a></li>
                                <li className="footer__quickLink-item"><a href="#" className="footer__quickLink-link">Orders Tracking</a></li>
                                <li className="footer__quickLink-item"><a href="#" className="footer__quickLink-link">Size Guide</a></li>
                                <li className="footer__quickLink-item"><a href="#" className="footer__quickLink-link">FAQs</a></li>
                            </ul>
                            <ul className="footer__legal-list">
                                <li className="footer__list-title">
                                    Legal
                                </li>
                                <li className="footer__legal-item"><a href="#" className="footer__legal-link">Terms & conditions</a></li>
                                <li className="footer__legal-item"><a href="#" className="footer__legal-link">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer> );
}
 
export default Footer;