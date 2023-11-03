import React from 'react'
import Header from '../../components/Header/Header'
import './style.css'

const Login = () => {
    return (
        <div className="App">
            <Header />
            <section className="section-1">
                <div className="login-form">
                    <form action="/dashboard">
                        <h1>Login</h1>
                        <input type="text" placeholder='Username' required />
                        <input type="password" placeholder='Password' required />
                        <button type="submit">
                            Login
                        </button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Login