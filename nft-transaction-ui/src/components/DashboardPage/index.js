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

    /*const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };*/

    return (
        <div className='bg-img'>
            {/*<Link to="/manager">
                <Button type="primary">Manager</Button>
            </Link>
            <Link to="/history">
                <Button type="primary">History</Button>
            </Link>
            <Button  onClick={showModal}>
                Deposit eth
            </Button>
            <Link to="/">
                <Button type="primary">Log out</Button>
    </Link>*/}
            <ResponsiveAppBar />
            <SellPanel userNfts={userNFTs} />
            {/*<Modal
                title="Basic Modal"
                open={isModalOpen}
                // onOk={handleOk} 
                onCancel={handleCancel}
                footer={null}
            >
                <DepositForm userdetails={userDetails} />
</Modal>*/}
        </div>
    )
}
