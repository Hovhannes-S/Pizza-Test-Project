import './Cart-Menu-Item.css';
import { Link } from 'react-router-dom';


function CartItemPizza(props) {
    const {data} = props;
    return (
        <div className='cart-item-pizza-parent'>
            <img src={data.image_url}/>
            <h5>{data.name}</h5>
            {/* <p className="description">{data.description}</p> */}
            <p className="price"><span>---</span> {data.price} $ <span>---</span></p>
            <Link className="to-order-btn" to="/order-online">Order Online</Link>
        </div>
    )
}

export default CartItemPizza