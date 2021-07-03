import React, { useState, useEffect } from 'react';
import './PlacedOrders.css'
import  CartRemoveItem  from "./CartRemoveItem"



const  PlacedOrders = () => {
  const [orders, setOrders] = useState([]);
  
  useEffect(() => {
      fetch("/orderhistory", {
          method:"GET",
          "Accept": "application/json",
          headers: {
              "Content-Type": "application/json"
          },
          credentials: "include"
      }).then(res=>res.json())
      .then(data=>{
        //   console.log(data);
        setOrders(data);
      })
  }, [orders])

    return (
         <div className="placedorders">
            <h1>Your Recent Orders</h1>

            <div className="orderList">




            
                {orders.map(item => (
                    <CartRemoveItem
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    hideButton
                />
                ))}
  
                
            </div>
        </div>
    )
}

export default PlacedOrders
