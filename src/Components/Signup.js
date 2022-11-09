import React from 'react'
import "./login.css"
import { Link } from 'react-router-dom'


export default function Signup() {
    return (
        <>

            <div className='loginMain'>
                <div >
                    <form className='loginSub'>

                    <h1 className='loginh1'>Registration</h1>
                    <input className='logininput' type= "text" placeholder = "Enter Your First Name" required/>
                    <input className='logininput' type= "text" placeholder = "Enter Your Last Name" required/>
                    <input className='logininput' type= "text" placeholder = "Enter Your Email" required/>
                    <input className='logininput' type= "password" placeholder = "Enter Your Password" required/>
                  
                    <button className='loginbutton' type='submit' >Submit</button>
                    <span className="first">
                                Already a member? <Link to="/" className="sign_up_link">Login</Link>
                            </span>
                    </form>

                </div>

            </div>






        </>
    )
}
