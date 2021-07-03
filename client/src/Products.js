import React, { useState } from "react"
import "./Products.css"
import { useStateValue } from "./StateProvider";
import { useHistory } from "react-router-dom"

const Products = ({id, title, seller, price, image, rating}) => {

    const history = useHistory();
 const [state, dispatch] = useStateValue();
const [user, setUser] = useState({
    name:"",
    email:""
});


const addItem = async () => {
    if(user){
        try{
            const res = await fetch("/getdata", {
                method: "GET",
                headers:{
                    Accept: "application/json",
                    "Content_Type": "application/json"
                },
                credentials:"include"
            });
            const data = await res.json();
            setUser(data);
               //dispatch item into data layer
               dispatch({
                type: "ADD_CART",
                item: {
                    id,
                    title,
                    seller,
                    image,
                    price,
                    rating
                },
            })
            if(!res.status === 200){
                const err = new Error(res.error);
                throw err;
            }
            
        }catch(error){
            console.log(error)
            alert("SignIn in order to add items to your cart")
            history.push("/signin");
        }
        
    }

   
};




    return (
        <div className="product">

        <img className="prod_img" alt="prod_img" src={image} />

        <div className="prod_info">
        <p>{title}</p>
        <p>{seller}</p>
        <p>
        <small>₹</small>
        <strong>{price}</strong>
        </p>

        <div className="prod_rating">
        {Array(rating).fill().map((_, i) => (
            <p>⭐</p>
        ))}
           
        </div>

        </div>
    
            <div className="prod_btn">
        <button onClick={addItem} className="add_btn">Add to Cart</button>

        </div>
   
        
        </div>

    );
}

export default Products