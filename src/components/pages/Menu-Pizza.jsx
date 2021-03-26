import './Menu-Pizza.css'
import dataPizza from '../../data/pizza-templates-data';
import Navbar from '../navbar/Navbar';
import CartItemPizza from '../menu-elements/Cart-Menu-Item';
import {Link} from 'react-router-dom';

function MenuPizza() {
    const pizzas = dataPizza;
    return(
        <Navbar>
            <div className='page-pizza'>
                <div className='parent-pizza-image'>
                    <div className='pizza-description-image-block'>
                        <h1>Perfect Pizza</h1>
                        <p>Experience the taste of a perfect pizza at pizza house, one of the best restaurants</p>
                        <Link className='btn btn-warning view-menu-btn' to='/order-online'>Order With Online</Link>
                    </div>
                </div>
                <div className='pizzas-all-carts-block'>
                    {pizzas.map((el, indx) => {
                        return (
                            <CartItemPizza data={el} key={indx}/>
                        )
                    })}
                </div>
            </div>
        </Navbar>
    )
}

export default MenuPizza