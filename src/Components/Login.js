import React from 'react'
import { Link } from 'react-router-dom'
// import { Link, Navigate } from "react-router-dom";
import "./login.css"

export default function Login() {
    return (
        <>

            <div className='loginMain'>
                <div >
                    <form className='loginSub'>

                    <h1 className='loginh1'>Login Here !</h1>
                    <input className='logininput' type= "text" placeholder = "Enter Your Email" required/>
                    <input className='logininput' type= "password" placeholder = "Enter Your Password" required/>
                    <button className='loginbutton' type='submit' >Login</button>
                    <span className="first">
                                Not a member? <Link to="/signup" className="sign_up_link">Sign up</Link>
                            </span>
                    </form>


                </div>

            </div>






        </>
    )
}
