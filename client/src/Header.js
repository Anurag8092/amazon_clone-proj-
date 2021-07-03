import  React, { useState, useEffect } from "react"
import "./Header.css"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";



const Header = () => {
    const [state, dispatch] = useStateValue();
    const [user, setUser] = useState("");

       const renderHome = async () => {
       try{
           const res = await fetch("/getdata", {
               method: "GET",
               headers:{
                   "Content_Type": "application/json"
               }
           });
           const data = await res.json();
           
           setUser(data.name);
           if(!res.status === 200){
               const err = new Error(res.error);
               throw err;
           }
           
       }catch(error){
           console.log(error);
       }
   }

   useEffect(() => {
       renderHome();
   },[])



    
    return  (
    <div className="header">

   <Link to="./">
   <img 
    className="header_logo"
    alt="amzn_logo"
    src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
    />
   </Link>
   


    <div className="header_search">
        <input
        className="header_searchInput"
        type="text"
        />
        <span className="search_icon"><SearchIcon /> </span>
          
    </div>
   
    <div className="header_nav">

    <Link to={!user?"/signin":"/logout"}>
    <div  className="nav_item">
        <span className="nav_itemlineone">
            Hello {user ? user : "Guest"}
        </span>
        <span className="nav_itemlinetwo">
        {user ? "Sign Out" : "Sign In"}
        </span>
            </div>

    </Link>

           <Link to="/placedorders">
           <div className="nav_item">
            <span className="nav_itemlineone">
        Returns
        </span>
        <span className="nav_itemlinetwo">
        & Orders
        </span>
        </div>

           </Link>


        <Link to="./cart">
        <div className="nav_cart">
        <ShoppingCartIcon />
        <span className="nav_itemlinetwo cart_itemCount">{state.cart.length>99?"99+":state.cart.length}</span>
        <span className="nav_itemlinetwo cart_title">Cart</span>
        </div>
     </Link>
     




    </div>


    </div>

    );
} 


export default Header































