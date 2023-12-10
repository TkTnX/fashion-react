import './young.css'
import girlImg1 from './../../img/images/01.jpg'
import girlImg2 from './../../img/images/02.jpg'
import Cyoing from './../../components/card-young/Cyoung'

const Young = () => {
    return (<section className="young">
        <div className="container">
            <div className="young__inner">
                <h2 className="title-2">Young’s Favourite</h2>
            </div>
            <div className="young__cards">
                <div className="young-card"><Cyoing title='Trending on instagram' img={girlImg1} /></div>
                <div className="young-card"><Cyoing title='All Under $40' img={girlImg2} /></div>
            </div>
        </div>
    </section> );
}
 
export default Young;