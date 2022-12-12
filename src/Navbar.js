import React from "react"
// import LoginModal from "./LoginModal"
// import SignUpModal from "./SignupModal"
import { Link } from 'react-router-dom'


export default function Navbar() {
    return (
        <header className="header">
            <h1>SaveMyFavs</h1>
            <nav className="nav">
                <ul className="nav-links">
                    <li>
                        <Link className="links" to='/'>Home</Link>
                    </li>
                    <li>
                        <Link className="links" to='/app'>My Favorites</Link>
                    </li>
                    <li>
                        <Link className="links" to='/contact'>Contact Us</Link>
                    </li>
                </ul>
            </nav>
            
        </header>
    )
}