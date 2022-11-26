import React from 'react'
import { Link } from 'react-router-dom'
import ResponsiveAppBar from '../navBar';
import BuyPanel from './buyPanel.js';
import "./index.css";

export default function DashboardPage() {
    return (
        <div className="text-center">
            <ResponsiveAppBar/>
            <h1 className="main-title home-page-title">welcome to Trader Dashboard</h1>

            {/* <BuyPanel/> */}
            <Link to="/">
                <button className="primary-button">Log out</button>
            </Link>
        </div>
    
    )
}
