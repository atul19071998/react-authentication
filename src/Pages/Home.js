import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../componentcss/home.css'
const Home = () => {
    const navigate = useNavigate()
    const userName = JSON.parse(localStorage.getItem("user"));
   
    const handleLogout =()=>{
        localStorage.removeItem("loggedin");
        navigate('/login')
    }
  return (
   <div className="home-wrapper">
    <div className="home-wrap">
    <button
        onClick={handleLogout} type='submit'
        class="btn btn-success mx-3 ">Logout</button>
        <h1 className="head">welcome  {userName.name} to the Home page</h1>




      
    </div>
   </div>
  )
}

export default Home
