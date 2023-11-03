import React from 'react'
import './styles.css'

const Header = () => {
    return (
        <div className="header">
            <header>
                <div className="logo">
                   <a href="/">SIS.</a>
                </div>
                <div className="navs">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/login">Login</a>
                </div>
            </header>
        </div>
    )
}

export default Header