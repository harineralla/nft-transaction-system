import { React, useState } from 'react'
import { Link } from 'react-router-dom';
import { Modal, Button } from 'antd';
import DepositForm from '../DepositForm';
import SellPanel from './SellPanel';
import ResponsiveAppBar from '../navBar';
import { getUserNFTs } from '../../redux/actions';
/*import { useDispatch, useSelector } from 'react-redux';*/
import "./index.css";

export default function DashboardPage() {
   // const dispatch = useDispatch();
    
    const [userDetails, getUserData] = useState({});
    const [userNFTs, getUserNfts] = useState([]);

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div className="text-center">
            <h1 className="main-title home-page-title">welcome to our app</h1>
            <nav className='menu-nav'>
                <div class="logo">
                    <a href="/#"><img src="assets/img/logo/naftmak.svg" alt="" /></a>
                </div>
                <div class="header-form">
                    <form action="#"><button><i class="flaticon-search"></i></button>
                        <input type="text" placeholder="Search Artwork" />
                    </form>
                </div>
                <div class="navbar-wrap push-menu main-menu d-lg-flex">
                    <ul class="navigation">
                        <li><a href="/">Home</a></li>
                        <li><a href="/nft-marketplace">Explore</a></li>
                        <li><a href="/collections">Collection</a></li>
                        <li class="menu-item-has-children">
                            <a href="/#">Pages</a>
                            <ul class="submenu">
                                <li><a href="/activity">Activity</a></li>
                                <li><a href="/category">Category</a></li>
                                <li><a href="/ranking">Ranking</a></li>
                                <li><a href="/creators">Creators</a></li>
                                <li><a href="/market-single">Market Single</a></li>
                                <li><a href="/nft-live-bidding">Live Bidding</a></li>
                                <li><a href="/create-item">Create Item</a></li>
                                <li><a href="/author-profile">Author Profile</a></li>
                                <li><a href="/login-register">Login &amp; Register</a></li>
                            </ul>
                            <div class="dropdown-btn">
                                <span class="fas fa-angle-down"></span>
                            </div>
                        </li>
                        <li class="menu-item-has-children">
                            <a href="/">Blog</a>
                            <ul class="submenu">
                                <li><a href="/blog">Our Blog</a></li>
                                <li><a href="/blog-details">Blog Details</a></li></ul>
                            <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div></li></ul></div>
                <div class="header-action d-none d-md-block">
                    <ul><li class="header-btn"><a href="/connect-wallets" class="btn">Wallet Connect</a></li></ul>
                </div>
            </nav>
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
