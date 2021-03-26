import pizzasData from '../../data/pizza-templates-data';
import pizzeriasData from '../../data/pizzerias-data';
import { useEffect, useState } from 'react';


function TableCart(props) {
    const pizzas = pizzasData;
    const pizzerias = pizzeriasData;
    const { cart, deleteItem } = props;
    const [del, setDel] = useState(false);
    useEffect(() => {
        if (del === true){
            setDel(false);
        }
    }, [del])
    const subtotalOrder = () => {
        let sum = 0;
        for(let i = 0; i < cart.length; i++){
            sum += cart[i].total
        }
        return sum.toFixed(2);
    }
    const taxOrder = () => {
        let sum = 0;
        for(let i = 0; i < cart.length; i++){
            sum += cart[i].tax
        }
        return sum.toFixed(2);
    }
    const orderTotal = () => {
        const sub = subtotalOrder();
        const tax = taxOrder();
        const total = +sub + (+tax);
        return total.toFixed(2)
    }
    const orderConfirmation = () => {
        let order = {};
        let cartCopy = cart.slice(0,cart.length);
        for (let i = 0; i < cartCopy.length; i++){
            let key = 'pizzeria_id_' + cartCopy[i].pizzeriasIndex;
                let pizza_items = order[key] ? order[key].pizza_items : [];
                pizza_items.push({
                    pizza_id: cartCopy[i].pizzaIndex,
                    quantity: cartCopy[i].quantity,
                    subtotal: cartCopy[i].subtotal.toFixed(2),
                    tax: cartCopy[i].tax.toFixed(2),
                    total: cartCopy[i].total.toFixed(2)
                });
                let subtotal = 0;
                let tax = 0;
                let total = 0;
                for(let j = 0; j < pizza_items.length; j++) {
                    subtotal += +pizza_items[j].subtotal;
                    tax += +pizza_items[j].tax;
                    total += +pizza_items[j].total
                }
                order[key] = {
                    pizza_items,
                    subtotal: subtotal.toFixed(2),
                    tax: tax.toFixed(2),
                    total: total.toFixed(2),
                }            
        }
        return order
    }
    return(
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Pizzeria</th>
                    <th scope="col">Pizza</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Tax</th>
                    <th scope="col">Total</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {!del && cart.map((it,indx) => {
                    const pizzeria = pizzerias.find((el)=>el.id == it.pizzeriasIndex);
                    const pizza = pizzas.find((el) => el.id == it.pizzaIndex)
                    return(
                        <tr key={indx}>
                            <th scope="row">{indx+1}</th>
                            <td>{pizzeria.name}</td>
                            <td>{pizza.name}</td>
                            <td>{pizza.price}$</td>
                            <td>{it.quantity}pc</td>
                            <td>{it.tax.toFixed(2)}$</td>
                            <td>{it.total.toFixed(2)}$</td>
                            <td> 
                                <button className="btn btn-danger" type="button" 
                                    onClick={() => {
                                        cart.splice(indx,1);
                                        deleteItem(cart);
                                        setDel(true);
                                    }}
                                >Delete</button>
                            </td>
                        </tr>
                    )    
                })}
                {!!cart.length &&
                <> 
                    <tr>
                        <th>*</th>
                        <th colSpan={6}>Order Subtotal</th>
                        <th>{subtotalOrder()} $</th>
                    </tr>
                    <tr>
                        <th>*</th>
                        <th colSpan={6}>Order Tax</th>
                        <th>{taxOrder()} $</th>
                    </tr>
                    <tr>
                        <th>*</th>
                        <th colSpan={6}>Order Total</th>
                        <th>{orderTotal()} $</th>
                    </tr>
                    <tr>
                        <td colSpan={7}></td>
                        <td>
                            <button className="btn btn-primary" type="button"
                                onClick={() => {
                                    console.log(orderConfirmation())
                                }}
                            >
                                Order Confirmation
                            </button>
                        </td>
                    </tr>
                </>
                }
            </tbody>
        </table>
    )
}

export default TableCart