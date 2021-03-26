import './SelectPizza.css';
import pizzasData from '../../data/pizza-templates-data';

function SelectPizza(props) {
    const pizzas = pizzasData;
    const { pizzeriasIndex, data, change } = props 
    return (
        <div className='select-pizzas-parent-block'>
            <label className='label-select-pizzas' htmlFor='select-pizzas' >
                Choose Pizzas
            </label>
            <select id='select-pizzas' className='form-control' defaultValue={'DEFAULT'}
                onChange={(e) => {
                    change({...data, pizzaIndex: e.target.value});
                }}
            >
                <option value="DEFAULT" disabled>Choose Pizzas</option>
                {pizzas.filter((it)=> it.available_in_pizzerias.includes(Number(pizzeriasIndex) + 1) && it).map((it) => {
                    return(
                        <option key={it.id} value={it.id}>{it.name}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default SelectPizza