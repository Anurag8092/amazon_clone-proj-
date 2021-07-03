import React, {useState} from "react"
import "./SignIn.css"
import { Link, useHistory } from "react-router-dom";


const SignIn = ()=> {
  const history = useHistory()     
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")


  const handleSignin = async (e) => {
       e.preventDefault();
       const res = await fetch("/signin", {
           method:"POST",
           headers:{
               "Content-Type":"application/json"
           },
           body:JSON.stringify({
               email, 
               password
           })
       });
       const data = await res.json();
       if(res.status === 400 || !data){
           window.alert("invalid cred");
       }else{
           window.alert("logged in");
           history.push("/");
       }
   }




    return (
        <div className="signin">
        <Link to="/">
        <img className="auth_logo" alt="amzn_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG6.png" />
        </Link>

       <div className="signin_form">
  

<div className="signin_info">
<h1>Sign In</h1>
</div>

<div className="signin_info">
     
<h5>Email</h5>
       <input type="email"
         value={email}
          onChange={(e)=> setEmail(e.target.value)}
    
       />
</div>

<div className="signin_info">
<h5>Password</h5>
       <input type="Password"
                        value={password}
          onChange={(e)=> setPassword(e.target.value)}

       />
</div>
 

<button type="submit" onClick={handleSignin}
 className="signin_info signin_btn">Sign Up</button>



</div>
       <div className="signup_dir">
       <p>New to Amazon?</p>
       <Link to="/signup">
              <button>Create your Amazon account</button>
       </Link>
       </div>

        </div>
    );
}

export default SignIn