import React from 'react'
import { Link } from "react-router-dom";

function LogIn() {
  return (
    <div>
        <form>
            <label>
                username
            </label>
            <input>
            </input>
            <label>Password</label>
            <input></input>
           <Link to="dashboard"><button>Login</button></Link> 
        </form>

    </div>
  )
}

export default LogIn