import React from "react";
import "./Cart.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CartRemoveItem from "./CartRemoveItem";

const Cart = ()=> {
    const [state, dispatch] = useStateValue()
    return (
        <div className="cart">

        <div className="cart_left">
       <img className="cart_add" src="https://res.cloudinary.com/anurag-cloud/image/upload/v1624467636/amzn_clone_imgs/Untitled_kd1ibv.png" />
       <div className="cart_heading">

        {
        state.cart.length <= 0 
        ? 
        <h1>Your Shopping Cart is empty</h1> 
        :
        <h1>Shopping Cart</h1>
        } 

       {
           state.cart.map(item => (
           <CartRemoveItem
           id={item.id}
           title={item.title}
           image={item.image}
           price={item.price}
           rating={item.rating}
        />

           ))}


       </div>
       </div>

       {
    state.cart.length > 0 && 
       <div className="cart_right">
       <img src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png" />
       <Subtotal />
       </div>
       }


        </div>

       

    );
}

export default Cart