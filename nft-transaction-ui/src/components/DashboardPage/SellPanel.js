import { React, useEffect, useState } from 'react';
import { Card, Col, Row, Button, Modal, Form, Input, List } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSellNFTValue } from '../../redux/actions';
import nft from "../DashboardPage/nft_1.jpg";
import "../DashboardPage/index.css"
const { Meta } = Card;

export default function SellPanel({ userNfts }) {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [userData, getUserData] = useState([]);
    const [usernfts, getUserNfts] = useState([]);
    const [sellNFT_id, setSellID] = useState(0);
    const [boolValue, setButtonValue] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        var data = JSON.parse(window.localStorage.getItem('USER_DETAILS'));
        var userNFTs = JSON.parse(window.localStorage.getItem('USER_NFTS'));
        getUserData([data]);
        getUserNfts(userNFTs);
    }, []);

    const handleSellNFT = (nft_item) => {
        dispatch(setSellNFTValue(sellNFT_id));
        setButtonValue(true)
        window.location.reload(true);
    }

    return (

        <div className='right-div align' style={{
            height: 500,
        }}>

            <List className='c1'
                grid={{
                    gutter: 16,
                    column: 4,
                }}
                dataSource={usernfts}
                renderItem={(item) => (
                    <List.Item>
                        {/* <Card title={item.title}>Card content</Card> */}
                        <Card
                            title={item.name}
                            hoverable
                            style={{
                                width: 200,
                            }}
                            cover={<img alt="example" src={nft} />}
                        >
                            <p>${item.price}.00 Eth</p>
                            <>
                                
                                <Button type="primary" htmlType="submit" onClick={() => handleSellNFT(item.nft_id)}>
                                    Sell NFT
                                </Button> 
                                    
                            </>
                        </Card>
                    </List.Item>
                )}
            />
        </div >
    )
}
