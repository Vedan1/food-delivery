import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({SetShowLogin}) => {

    const[currState, setCurrState] = useState("Login")

  return (
    <div className="login-popup">
        <div className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>{SetShowLogin(false)}} src={assets.cross_icon} />
            </div>
            <div className="login-popup-inputs">
                {currState ==="Login"?<></>:<input type="text" placeholder='Enter Name' required />}
                <input type="email" placeholder='Enter Email' required />
                <input type="password" placeholder='Enter Password' required />
            </div>
            <button>{currState==="SignUp"?"Create Account":"Login"}</button>

            <div className="login-popup-conditions">
                <input type='checkbox' required />
                <p>By continuing! i agree to terms and conditions</p>
            </div>
            {currState==="SignUp"?<p >Already Have an Account?<span style={{cursor:"pointer"}} onClick={()=>{setCurrState("Login")}}> Click Here to Login</span></p>:<p>Create an Account?<span style={{cursor:"pointer"}} onClick={()=>{setCurrState("SignUp")}}> Click Here</span></p>}
            
            


        </div>
    </div>
  )
}

export default LoginPopup