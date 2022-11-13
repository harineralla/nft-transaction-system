import React from "react";
import { Link } from "react-router-dom";

import "../styles/landingPage.css";

export default function LandingPage() {
    return(
        <header className="header bg-color">
            <div className="buttons text-center">
                <Link to="/login">
                    <button className="primary-button">log in</button>
                </Link>
                <Link to="/register">
                    <button className="primary-button" id="reg_btn"><span>register </span></button>
                </Link>
            </div>
        </header>
    )
}