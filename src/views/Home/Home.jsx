import React from 'react'
import Header from '../../components/Header/Header'
import './styles.css'

const Home = () => {
    return (
        <div className="home">
            <Header />
            <section className="section-1">
                <div className="container">
                    <div className="title">
                        Are you tired of going to office?
                    </div>
                </div>
            </section>

            <section className="section-2">
                <div className="container">
                    <div className="title">
                       We Introduce,
                    </div>
                    <div className="desc">
                        <p>Asynchronous working station!</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home