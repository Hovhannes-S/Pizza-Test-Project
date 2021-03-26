import pizzeriasData from '../../data/pizzerias-data';
import './SelectPizzerias.css';

function SelectPizzerias(props) {
    const pizzerias = pizzeriasData;
    const { changeState, data } = props;
    return (
        <div className='select-pizzerias-parent-block'>
            <label className='label-select-pizzerias' htmlFor='select-pizzerias' >
                Choose Pizzerias
            </label>
            <select id='select-pizzerias' className='form-control' defaultValue={'DEFAULT'}
                onChange={(e) => {
                    changeState({...data, pizzeriasIndex:e.target.value})
                }}
            >
                <option value="DEFAULT" disabled>Choose Pizzerias</option>
                {pizzerias.map((it) => {
                    return(
                        <option key={it.id} value={it.id}>{it.name}</option>
                    )
                })}
            </select>
        </div>
    )
}
export default SelectPizzerias