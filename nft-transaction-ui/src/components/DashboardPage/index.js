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
    const [isModalOpen, setIsModalOpen] = useState(false);

    const userDetails = useSelector(({ nftAppReducer }) => nftAppReducer.userReducer.userInfo);
    const userNFTs = useSelector(({ nftAppReducer }) => nftAppReducer.userReducer.usernfts);

    useEffect(() => {
        console.log("user id ", userDetails["user_id"])
        
    }, [userNFTs]);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <Link to="/manager">
                <Button type="primary">Manager</Button>
            </Link>
            <Link to="/history">
                <Button type="primary">History</Button>
            </Link>
            <Button onClick={showModal}>
                Deposit eth
            </Button>
            <Link to="/">
                <Button type="primary">Log out</Button>
            </Link>
            <ResponsiveAppBar />
            <SellPanel userNfts={userNFTs} />
            <Modal
                title="Basic Modal"
                open={isModalOpen}
                // onOk={handleOk} 
                onCancel={handleCancel}
                footer={null}
            >
                <DepositForm userdetails={userDetails} />
            </Modal>
        </div>
    )
}
