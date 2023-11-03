import React from 'react'
import './styles.css'
import DHeader from '../../components/Dashboard_Header/DHeader'

const Dashboard = () => {
    return (
        <div className="dashboard">
            <DHeader />
           <section className="section-1">
            This the Dashboard
           </section>
        </div>
    )
}

export default Dashboard