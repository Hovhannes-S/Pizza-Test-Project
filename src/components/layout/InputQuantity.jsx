import './InputQuantity.css';

function InputQuantity(props) {
    const { data, change} = props;
    return (
        <div className='quantity-pizza-parent-block'>
            <label className='label-quantity-pizzas' htmlFor='quantity' >
                Quantity
            </label>
            <input id='quantity' className='form-control' type='number'
                value={data.quantity}
                onChange={(e) => {
                    if (e.target.value[0] != 0 ){
                        change({...data, quantity: e.target.value})
                    }
                }}
            />
        </div>
    )
}
export default InputQuantity;