import React, {useState} from "react"
import { Link, useHistory } from "react-router-dom";
import "./SignUp.css"






function SignUp(){
const history = useHistory();

const [user, setUser] = useState({
       name:"",
       email:"",
       password:""
   })

   const handleChange = (e) => {
       const {name, value} = e.target
       setUser({
           ...user,
           [name]:value
       })
   }




const handleSubmit = async (e) => {
       e.preventDefault();

       const { name, email, password } = user;

       const res = await fetch("/signup", {
           method:"POST",
           headers:{
               "Content-Type": "application/json"
           },
           body:JSON.stringify({
              name, 
              email, 
              password
           })
       });

       const data = await res.json();
       console.log(data);
       if(res.status === 422 || !data){
           window.alert("invalid")
       }else{
          window.alert("successfull")
          history.push("/signin")
       }

     

}





    return (
        <div className="signup">
        <Link to="/">
        <img className="auth_logo" alt="amzn_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG6.png" />
        </Link>

       <div className="signup_form">
  

<div className="signup_info">
<h1>Create Account</h1>
</div>


<div className="signup_info">
<h5>Your Name</h5>
       <input
       name="name" 
       type="text" 
       required
       value={user.name}
       onChange={handleChange}
       />

</div>


<div className="signup_info">
     
<h5>Email</h5>
       <input
       name="email" 
       type="email"
               value={user.email}
       onChange={handleChange}
       />
</div>

<div className="signup_info">
<h5>Password</h5>
       <input
       name="password" 
       type="Password" 
       placeholder="At least 6 characters"
       value={user.password}
       onChange={handleChange}
       />
       <p>ℹ Passwords must be at least 6 characters.</p> 

</div>
 

<button type="submit" onClick={handleSubmit} className="signup_info signup_btn">Sign Up</button>




<hr/>
<div className="signin_dir">
<h5>Already Have an account? <Link to="/signin">Sign in▸</Link></h5>
</div>

        </div>
        </div>
    );
}

export default SignUp