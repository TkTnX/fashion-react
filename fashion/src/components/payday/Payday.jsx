import girlImg from './../../img/images/promo-img-girl.jpg'
import './payday.css'

const Payday = () => {
    return (<section className="payday">
            <div className="payday__inner">
                <div className="payday-img">
                    <img src={girlImg} alt="girl" className="p-img" />
                </div>
                <div className="payday-text">
                    <h1><span className='highlight'><span>PAYDAY</span></span> <br /> SALE NOW</h1>
                    <p className="sale">Spend minimal $100 get 30% off voucher code for your next purchase</p>
                    <p className="date">1 June - 10 June 2021</p>
                    <p className="terms">*Terms & Conditions apply</p>
                    <div className="payday__btn-wrapper">
                        <a href="#" className="payday__btn">Shop Now</a>
                    </div>
                </div>
            </div>
    </section>);
}
 
export default Payday;