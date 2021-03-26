import './ToCartBTN.css';
import pizzasData from '../../data/pizza-templates-data';

function ToCartBTN(props) {
    const { click, carts, data, changeData } = props;
    const pizza = pizzasData.find((elem) => elem.id == data.pizzaIndex);
    return (
        <div className='to-Cart--button-block'>
            <label className='label-to-cart-BTN' htmlFor='toCart' >
                To Cart
            </label>
            <button id="toCart" type='button' className="btn btn-success"
                onClick={() => {
                    const tax = pizza.is_taxed ? pizza.price * data.quantity * 8.25 / 100 : 0;
                    const subtotal = data.quantity * pizza.price;
                    carts.push({...data, subtotal: subtotal, tax: tax, total: tax + subtotal});
                    click(carts)
                    changeData({
                        pizzeriasIndex:-1,
                        pizzaIndex:-1,
                        quantity: '',
                        subtotal: 0,
                    })
                }}
            >
                To Cart
            </button>
        </div>
    )
}
export default ToCartBTN