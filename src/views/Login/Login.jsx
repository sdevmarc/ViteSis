import { React, useState, useEffect } from 'react'
import Header from '../../components/Header/Header'
import './style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const Navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3004/login', { username, password })
            .then(result => {
                console.log(result)
                if(result.data === 'Success') {
                    Navigate('/dashboard')
                }
            })

            .catch(err => console.log(err))
    }
    return (
        <div className="App">
            <Header />
            <section className="section-1">
                <div className="login-form">
                    <form onSubmit={handleSubmit}>
                        <h1>Login</h1>
                        <input type="text" placeholder='Username' onChange={(e) => setUsername(e.target.value)} required />
                        <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} required />
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