import Card from '../card/Card';
import './arrivals.css'
import cat01img from './../../img/categories/01.jpg'
import cat02img from './../../img/categories/02.jpg'
import cat03img from './../../img/categories/03.jpg'


const Arrivals = () => {
    return (<section className="arrivals">
        <div className="container">
            <div className="arrivals__header">
                <h2 className="title-2">
                    NEW ARRIVALS
                </h2>
                <div className="arrivals__cards">
                    <div><Card title='Hoodies & Sweetshirt' img={cat01img} /></div>
                    <div><Card title='Coats & Parkas' img={cat02img} /></div>
                    <div><Card title='Tees & T-Shirt' img={cat03img} /></div>
                </div>
            </div>
        </div>
    </section>);
}
 
export default Arrivals;