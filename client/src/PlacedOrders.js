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
        //  console.log(data);
        setOrders(data);
      })
  }, [orders])

    return (
         <div className="placedorders">
            <h1>Your Recent Orders</h1>

            <div className="orderList">




            
                {orders.map(item => (
                    // console.log(orders)

                    item.map(i => (
                        <CartRemoveItem
                        id={i.id}
                        title={i.title}
                        image={i.image}
                        price={i.price}
                        hideButton
                    />
                    ))
                ))}
  
                
            </div>
        </div>
    )
}

export default PlacedOrders
