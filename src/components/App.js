/*import '../App.css';*/
import OrderConfirmation from "./OrderConfirmation"
import Shop from "./Shop";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  

  return <fragment>
            
        {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/order-confirmation">
            <OrderConfirmation />
          </Route>
          <Route path="/">
            <Shop />
          </Route>
          
        </Switch>
            
        </fragment>

}

export default App
