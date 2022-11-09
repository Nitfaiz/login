import React from 'react'
import "./demo.css"
import { Link } from 'react-router-dom'
export default function Register() {
  return (
    <>

<div id="content2">
        <h1>Register</h1>
        <form action="" method="get">
            <div class="input-bar">
                <label for="name">First Name</label>
                <input type="text" id="name" class="input"/>
                <box-icon name='user'></box-icon>
            </div>

            <div class="input-bar">
                <label for="name">Last Name</label>
                <input type="text" id="name" class="input"/>
                <box-icon name='user'></box-icon>
            </div>

            <div class="input-bar">
                <label for="password">Email</label>
                <input type="email" id="password" class="input"/>
                <box-icon name='lock-alt' ></box-icon>
            </div>

            <div class="input-bar">
                <label for="password">password</label>
                <input type="password" id="password" class="input"/>
                <box-icon name='lock-alt' ></box-icon>
            </div>
            <button type="submit" id="btn">Submit</button>


            <p className="first" style={{marginTop :"5px",marginLeft:"8px"}} >
                               Already a member? <Link to="/demo"  className="sign_up_link">Sign in</Link>
                            </p>
        </form>
           
    </div>
    </>
  )
}

