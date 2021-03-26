import {BrowserRouter,Switch,Route} from "react-router-dom";
import MenuPizza from '../pages/Menu-Pizza'
import OrderPizza from '../pages/Order-Pizza';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/order-online'>
                    <OrderPizza/>
                </Route>
                <Route path='/'>
                    <MenuPizza/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes