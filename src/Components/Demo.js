import React from 'react'
import "./demo.css"
import { Link } from 'react-router-dom'
export default function Demo() {
  return (
    <>

<div id="content" >
        <h1>Login</h1>
        <form action="" method="get">
            <div class="input-bar">
                <label for="name">username</label>
                <input type="text" id="name" class="input"/>
                <box-icon name='user'></box-icon>
            </div>
            <div class="input-bar">
                <label for="password">password</label>
                <input type="password" id="password" class="input"/>
                <box-icon name='lock-alt' ></box-icon>
            </div>
            <button type="submit" id="btn">Login</button>


            <p className="first" style={{marginTop :"5px",marginLeft:"8px"}} >
                               Not a member? <Link to="/seconddemo"  className="sign_up_link">Sign up</Link>
                            </p>
        </form>
           
    </div>
    </>
  )
}
