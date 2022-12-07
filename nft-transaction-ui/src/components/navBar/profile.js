import "../navBar/profile.css"
import prof from "../navBar/profile.jpg"
import ResponsiveAppBar from '../navBar';
import { React, useEffect,useState } from 'react';
import { useSelector } from 'react-redux';
import { getUserDetails } from "../../redux/actions"; 

export default function Profile(){
    const [userData, getUserData] = useState([]);
    useEffect(() => {
        var data = JSON.parse(window.localStorage.getItem('USER_DETAILS'));
        getUserData([data][0]);
    }, []);

    return(
        <div>
        <ResponsiveAppBar />
        <div className="box">
            <div className="c1">
                <img className="img" src={prof} alt="profile"/>
            </div>
            <div className="c2">
                <div className="c1">
                    <h4>Name        : {userData["name"]}    </h4>
                    <h4>User ID     : {userData["user_id"]}    </h4>
                    <h4>Phone no    :  {userData["ph_no"]}   </h4>
                    <h4>Address     :{userData["address_id"]}</h4>
                    <h4>Email       :{userData["email"]}</h4>
                </div>
        </div>
        </div>
        </div>
    )

}