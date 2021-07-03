import React from "react"
import "./CartRemoveItem.css"
import { useStateValue } from "./StateProvider"


const CartRemoveItem = ({id, title, image, price, rating, hideButton}) => {
const [state, dispatch] = useStateValue()

    const handleRemoveItem = () => {
        // remove item 
        dispatch({
            type: "REMOVE FROM CART",
            id
        })    
    }
   
   
   
    return (
        <div className="remove_item">
        <img className="product_image" src={image} />

<div className="product_info">
<p className="product_title">{title}</p>
<p className="product_price">
    <small>₹</small>
    <strong>{price}</strong>
</p>
<div className="product_rating">
{Array(rating)
.fill()
.map((_, i) => {
    <p>⭐</p>
})}
</div>
{!hideButton && <button onClick={handleRemoveItem} >Remove Item</button>}
</div>

        </div>
    );
}


export default CartRemoveItem