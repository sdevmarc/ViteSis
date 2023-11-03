import React from 'react'
import './style.css'
import me from './assets/sample.jpg'

const DHeader = () => {
    return (
        <div className="dheader">
            <header>
                <div className="logo">
                    <a href="/dashboard">Dashboard</a>
                </div>
                <div className="navs">
                    <form action="/">
                        <div className="user">
                            <div className="profile profile-pic">
                                <img src={me} alt="" />
                            </div>
                            <div className="profile profile-name">
                                suanieeee
                            </div>
                            <button type="submit">
                                Logout
                            </button>
                        </div>
                    </form>
                </div>
            </header>
        </div>
    )
}

export default DHeader