import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header"
import Home  from "./Home"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import Cart from "./Cart"
import PlacedOrders from "./PlacedOrders"
import Checkout from "./Checkout"
import Logout from "./Logout";


function App() {


  return ( 

    <BrowserRouter>
    {/* <h1 className="mobile_view">Desktop</h1> */}

    <Switch>

<Route exact path="/">
    <Header />
    <Home />
    </Route>

    <Route path="/signin">
    <SignIn />
    </Route>

 <Route path="/signup">
    <SignUp />
    </Route>

    <Route path="/logout">
    <Logout />
    </Route>

    <Route path="/cart">
    <Header />
    <Cart />
    </Route>

    <Route path="/checkout">
    <Checkout />
    </Route>

    <Route path="/placedorders">
    <Header />
    <PlacedOrders />
    </Route>

</Switch>
    
    </BrowserRouter>


   
  );
}

export default App;
