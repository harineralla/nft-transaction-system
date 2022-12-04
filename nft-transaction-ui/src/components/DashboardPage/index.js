import { React, useState } from 'react'
import { Link } from 'react-router-dom';
import { Modal, Button } from 'antd';
import DepositForm from '../DepositForm';
import SellPanel from './SellPanel';
import ResponsiveAppBar from '../navBar';
import "./index.css";
import { useSelect } from '@mui/base';
import { useSelector } from 'react-redux';

export default function DashboardPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // const userNFTData = useSelector(({rootReducer}))
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div>
            <ResponsiveAppBar />
            <SellPanel />
            <Modal
                title="Basic Modal"
                open={isModalOpen}
                // onOk={handleOk} 
                onCancel={handleCancel}
                footer={null}
            >
                <DepositForm />
            </Modal>
            <Button type="primary" onClick={showModal}>
                Deposit eth
            </Button>
            <Link to="/">
                <button className="primary-button">Log out</button>
            </Link>
        </div>
    )
}
