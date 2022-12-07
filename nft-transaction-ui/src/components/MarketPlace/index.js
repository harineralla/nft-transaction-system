import React, { useEffect, useState } from "react";

import { Card, Col, Row, Button, Modal, Form, Input, List, Select } from 'antd';
import { getMarketNFTs } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { saveTransactionDetails } from "../../redux/actions";


function MarketPlace() {

    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [buyNFT_id, setBuyID] = useState(0);
    const [userDetails, getUserData] = useState({});
    const [marketnfts, setNfts] = useState([]);
    const [marketPrice, setPrice] = useState({})

    const marketNFTS = useSelector(({ nftAppReducer }) => nftAppReducer.userReducer.marketNFTS);

    // const savedTransactionDetails = useSelector(({ nftAppReducer }) => nftAppReducer.userReducer.saveTransactionDetails);
    const savedEthPrice = useSelector(({ nftAppReducer }) => nftAppReducer.userReducer.eth_price.data);

    useEffect(() => {
        var data = JSON.parse(window.localStorage.getItem('USER_DETAILS'));
        var marketNFTS = JSON.parse(window.localStorage.getItem('MARKET_NFTS'));
        var marketprice = JSON.parse(window.localStorage.getItem('MARKET_ETH_PRICE'));
        getUserData(data);
        setNfts(marketNFTS);
        setPrice(marketprice);
    })

    const handleClose = () => {
        setIsModalOpen(false);
    }

    const showModal = (nft_id) => {
        setIsModalOpen(true);
        setBuyID(nft_id)
    };

    const handleBuyNFT = (details) => {
        // dispatch(postBuyTransaction(buyNFT_id));
        var depositdetails = {
            "nft": {
                "nft_id": buyNFT_id
            },
            "buyer_eth_address": userDetails["eth_address"],
            "commission_type": details["type"]
        };
        if (details["type"] === "fiat") {
            depositdetails["commission_type"] = false;
        } else if (details["type"] === "ethereum") {
            depositdetails["commission_type"] = true;
        }
        dispatch(saveTransactionDetails(buyNFT_id, marketPrice["amount"]));
    }

    return (
        <div>
            <List className='c1'
                grid={{
                    gutter: 16,
                    column: 4,
                }}
                dataSource={marketnfts}
                renderItem={(item) => (
                    <List.Item>
                        <Card
                            title={item.name}
                            hoverable
                            style={{
                                width: 200,
                            }}
                            cover={<img alt="example" src={item.nft_id} />}
                        >
                            <p>${item.price}.00 Eth</p>
                            <Button type="primary" htmlType="submit" onClick={() => showModal(item.nft_id)}>
                                Buy NFT
                            </Button>
                        </Card>
                    </List.Item>
                )}
            />
            <>
                <Modal title="Buy NFT"
                    open={isModalOpen}
                    footer={null}
                    onCancel={handleClose}
                >
                    <Form
                        name="basic"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={handleBuyNFT}
                        // onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >


                        <Form.Item
                            label="Commission Type"
                            name="type"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your commission type!',
                                },
                            ]}
                        >
                            <Select>
                                <Select.Option value="fiat">Fiat Currency</Select.Option>
                                <Select.Option value="ethereum">Ethereum</Select.Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            label="Smart Contract Address"
                            name="smart-contract-address"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Contract Address!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        {/* <Form.Item
                            label="Token"
                            name="token"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Token!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item> */}
                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit" onClick={handleBuyNFT}>
                                Buy NFT
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </>
        </div>
    )
}

export default MarketPlace;