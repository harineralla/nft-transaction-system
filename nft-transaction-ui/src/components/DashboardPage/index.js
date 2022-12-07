import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Modal, Button } from 'antd';
import DepositForm from '../DepositForm';
import SellPanel from './SellPanel';
import ResponsiveAppBar from '../navBar';
import { getUserNFTs } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import "./index.css";

export default function DashboardPage() {
    const dispatch = useDispatch();

    const [userDetails, getUserData] = useState({});
    const [userNFTs, getUserNfts] = useState([]);

    useEffect(() => {
        var data = JSON.parse(window.localStorage.getItem('USER_DETAILS'));
        var userNFTs = JSON.parse(window.localStorage.getItem('USER_NFTS'));
        getUserData(data);
        getUserNfts(userNFTs);
    }, []);

    return (
        <div className='bg-img'>
            <ResponsiveAppBar />
            <SellPanel userNfts={userNFTs} />
        </div>
    )
}
