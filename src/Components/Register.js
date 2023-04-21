import React from 'react'
import {useState} from 'react';
import {useNavigate,Link} from 'react-router-dom';
import'../componentcss/register.css';
const Register = () => {
    const navigate = useNavigate();
    const [input,setInput] = useState({
        name:"",
        email:"",
        password:"",

    });

//to store value in local storage;
const handleSubmit =(e) =>{
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    navigate("/login")
}



  return (
     
     <div className="register-wrapper">
        <div className="register-wrap">
        

            <form onSubmit={handleSubmit} id="form-head">
            <h2>Create an Account</h2>
               <div className="form-outline mb-2">
               <label className="form-label" htmlFor="form3Examplecg">
                Your Name:
               </label>
               <input
                 name="name"
                 value={input.name}
                 onChange={(e) => setInput({...input,[e.target.name]:e.target.value})} type="text"
               id="form3Examplecg"
               className="form-control form-control-lg" />
             
               </div>
               <div className="form-outline mb-2">
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
              
               </div>
               <div className="form-outline mb-2">
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
              
               </div>

               <button 
            
               type="submit"
               className="btn btn-success"> 
                Register
               </button>
               <p>Have Already Account </p>
               <Link to="/login" >
                <u>Login here</u>
               </Link>

            </form>
        </div>
     </div>
     
  )
}

export default Register
