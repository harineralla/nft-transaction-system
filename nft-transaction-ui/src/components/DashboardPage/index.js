import { React, useState } from 'react'
import { Link } from 'react-router-dom';
import { Modal, Button } from 'antd';
import DepositForm from '../DepositForm';
import SellPanel from './SellPanel';
import ResponsiveAppBar from '../navBar';
import { useSelector } from 'react-redux';
import "./index.css";

export default function DashboardPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const userDetails = useSelector(({ nftAppReducer }) => nftAppReducer.userReducer.user);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <Button  onClick={showModal}>
                Deposit eth
            </Button>
            <Link to="/">
                <Button type="primary">Log out</Button>
            </Link>
            <ResponsiveAppBar />
            <SellPanel />
            <Modal
                title="Basic Modal"
                open={isModalOpen}
                // onOk={handleOk} 
                onCancel={handleCancel}
                footer={null}
            >
                <DepositForm userdetails={userDetails}/>
            </Modal>
        </div>
    )
}
