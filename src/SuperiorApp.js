import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import App from "./App"
import Homepage from "./HomePage"
import Contact from "./Contact"
import {  Routes, Route } from 'react-router-dom'

export default function SuperiorApp() {
    return (
        <>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/app' element={<App/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>  
        <Footer />
        </>

    )
}