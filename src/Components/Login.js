import React from 'react'
import {useState} from 'react';
import { useNavigate ,Link} from 'react-router-dom';
import '../componentcss/login.css'
const Login = () => {
    const navigate = useNavigate()
    const [input,setInput] = useState({
        
        email:"",
        password:"",

    });
    const handleLogin =(e) =>{
        e.preventDefault();
       const loggeduser = JSON.parse(localStorage.getItem("user"));

       if(input.email === loggeduser.email &&
         input.password === loggeduser.password){
            localStorage.setItem('loggedin',true);
         navigate("/")
       }else{
        alert("Invalid Credentials")
       }

    }
  return (
     <div className="login-werapper">
        <div className="login-wrap">
            


            <form onSubmit={handleLogin} id="form-head">
            <h2>Login</h2>
            <label className="form-label" htmlFor="form3Examplecg">
                Your Email:
               </label>
            <input
               name="email"
               value={input.email}
               onChange={(e) => setInput({...input,[e.target.name]:e.target.value})}
               type="email"
               id="form3Examplecg"
               className="form-control form-control-lg" />
               
               <label className="form-label" htmlFor="form3Examplecg">
                Your password:
               </label>
               <input
               name="password"
               value={input.password}
               onChange={(e) => setInput({...input,[e.target.name]:e.target.value})}
               type="password"
               id="form3Examplecg"
               className="form-control form-control-lg" />
               
              
               <button 
            
               type="submit"
               className="btn btn-success mt-3"> 
                Log in
               </button>
               <p>Have Already Account </p>
               <Link to="/register" >
                <u>Login here</u>
               </Link>
            </form>
        </div>
     </div>
  )
}

export default Login
