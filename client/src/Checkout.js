import React, { useEffect, useState } from "react"
import "./Checkout.css"
import { StateProvider, useStateValue } from "./StateProvider"
import { getSubtotal } from "./reducer"
import { Link, useHistory } from "react-router-dom"
import CartRemoveItem from "./CartRemoveItem"



const Checkout = () => {
    const history = useHistory()
    const [state, dispatch] = useStateValue()
    const itemPriceTotal = getSubtotal(state.cart)
    const [user, setUser] = useState();


    const getData = async () => {
        try{
            const res = await fetch("/getData", {
                method: "GET",
                headers:{
                    Accept: "application/json",
                    "Content_Type": "application/json"
                },
                credentials:"include"
            });
            const data = await res.json();
            setUser(data);
            if(!res.status === 200){
                const err = new Error(res.error);
                throw err;
            }
            
        }catch(error){
            console.log(error)
            history.push("/signin");
        }
    }

    useEffect(() => {
        getData();
    }, [])






    const handlePaymentSubmit = async (e) => {
        e.preventDefault();
        const items  = state.cart
        const {name, email} = user
        const date = new Date();
        
        await fetch("/postorders", {
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                name,
                email,
                items,
             })
        })
        dispatch({
            type: "CLEAR CART"
        })
        alert("Your order is placed...Thank You for shopping with us")
        history.replace("/placedorders")
    }



    return (
        <div className="payment">
        <Link to="/">
        <img className="imgstate" src="https://images-eu.ssl-images-amazon.com/images/G/31/x-locale/checkout/confirm-banner._CB485949149_.gif" />
        </Link>

        <div className="payment_container">
        
{
    state.cart.length <=0 ? 
    <h2>There are no items to review</h2>
    :
    <h2>Review your order</h2>
}

        

        
       

        
<div className="delivery_info">


<h5>Shipping Address</h5>
        <p>Mukesh</p>
        <p>Morning Avenue, House no- 13, Road 5B
         CRP Path, Hirandani, Mumbai, Maharastra
         India
         Phone: 7645983432</p>



        <div className="cart_item">


        {state.cart.map(item => (
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

    <div className="payment_method">

<form onSubmit={handlePaymentSubmit} >

   
    <div className="payment_details">


<button type="submit" >
<span>
   Place Your Order and Buy
    </span>
    </button>

<p>You'll be securely redirected to Visa to enter your password and complete your purchase.</p>
<h5>Order Summary</h5>
<p>Items: ₹{itemPriceTotal}</p>
<p>Delivery: {itemPriceTotal>=599 ? "Free" : "₹40" } </p>
<hr/>
<h3>Order Total: ₹{itemPriceTotal>=599 ? itemPriceTotal : itemPriceTotal+40}</h3>
<hr/>

</div>

</form>

</div>
}



        </div>
        </div>
    )
}

export default Checkout