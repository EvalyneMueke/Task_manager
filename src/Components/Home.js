import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import App from "../App"
import LogIn from "./LogIn"

function Home() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<LogIn />} />
            <Route path="/dashboard" element={<App/>}/>

        </Routes>
        <navlink><Link to="/home">Dashboard</Link></navlink>
   </BrowserRouter> 
   </div>
  )
}

export default Home