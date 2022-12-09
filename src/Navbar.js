import React from "react"
import LoginModal from "./LoginModal"
import SignUpModal from "./SignupModal"
import { Link } from 'react-router-dom'


export default function Navbar() {
    return (
        <header className="header">
            <h1>SaveMyFavs</h1>
            <nav className="nav">
                <ul className="nav-links">
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/app'>My Favs</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact Us</Link>
                    </li>
                </ul>
            </nav>
            <div>
                <SignUpModal />
                <LoginModal />
            </div>
        </header>
    )
}