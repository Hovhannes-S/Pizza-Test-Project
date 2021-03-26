import './Order-Pizza.css'
import Navbar from '../navbar/Navbar' 
import SelectPizzerias from '../layout/SelectPizzerias';
import SelectPizza from '../layout/SelectPizza';
import InputQuantity from '../layout/InputQuantity';
import ToCartBTN from '../layout/ToCartBTN';
import TableCart from '../Table/TableCart';
import {useState} from 'react'

function OrderPizza() {
    const [data, setData] = useState({
        pizzeriasIndex:-1,
        pizzaIndex:-1,
        quantity: '',
        subtotal: 0,
    });
    const [carts, setCarts] = useState([]);
    return (
        <Navbar>
            <div className='order-online-parent'>
                <div className='selects-order'>
                    <SelectPizzerias changeState={setData} data={data} />
                    {data.pizzeriasIndex !== -1 && <SelectPizza pizzeriasIndex={data.pizzeriasIndex} change={setData} data={data} />}
                    {data.pizzaIndex !== -1 && <InputQuantity data={data} change={setData} />}
                    {data.quantity !== 0 && data.quantity !== '' && 
                    <ToCartBTN click={setCarts} carts={carts} data={data} changeData={setData} />}
                </div>
                <div className='invoce-order'>
                    <TableCart cart={carts} deleteItem={setCarts} />
                </div>
            </div>
        </Navbar>
    )
}

export default OrderPizza