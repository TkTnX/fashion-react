import './downald.css'
import googlePlay from './../../img/icons/google-play.png'
import appStore from './../../img/icons/app-store.png'
import phoneImg from './../../img/images/phone.png'

const Downald = () => {
    return (<section className="downald">
        <div className="container">
            <div className="downald__inner">
                <div className="downald__text">
                    <div className="downald__title">
                        DOWNLOAD APP & GET THE VOUCHER!
                    </div>
                    <div className="downald__subtitle">
                        Get 30% off for first transaction using Rondovision mobile app for now.
                    </div>
                    <div className="downald__icons">
                        <div className="appStore">
                            <a href="https://www.apple.com/app-store/" className="appStore-link">
                                <img src={appStore} alt="appStore" className="appStore-img" />
                            </a>
                        </div>
                        <div className="googlePlay">
                            <a href="https://play.google.com/store/games?hl=ru&gl=US&pli=1" className="googlePlay-link">
                                <img src={googlePlay} alt="GooglePlay" className="googlePlay-img" />
                            </a>    
                        </div>
                    </div>
                </div>
                <div className="downald__img">
                    <img src={phoneImg} alt="Phone" className="phone-img" />
                </div>
            </div>
        </div>
    </section> );
}
 
export default Downald;