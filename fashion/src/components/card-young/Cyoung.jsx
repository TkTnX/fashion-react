
import arrowImg from './../../img/icons/arrow.svg'
import './cYoung.css'

const Cyoung = (props) => {
    return (
        <div className="card">
            <img className='card__img' src={props.img} alt="category..." />
            <div className="card__inner">
                <div className='card__text'>
                    <div className='card__title'>{props.title}</div>
                    <div className='card__muted'>Explore Now!</div>    
                </div>
                    <div className='card__icon'>
                        <img src={arrowImg} alt="Open" />
                    </div>
                </div>
            </div>
        
    
    );
}
 
export default Cyoung;