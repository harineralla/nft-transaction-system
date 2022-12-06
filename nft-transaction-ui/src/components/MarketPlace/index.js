import React, { useEffect, useState } from "react";

import { Card, Col, Row, Button, Modal, Form, Input, List } from 'antd';
import { getMarketNFTs } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

function MarketPlace() {

    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [buyNFT_id, setBuyID] = useState(0);

    const marketNFTS = useSelector(({ nftAppReducer }) => nftAppReducer.userReducer.marketNFTS);

    useEffect(() => {
        dispatch(getMarketNFTs());
    })

    const showModal = (nft_id) => {
        setIsModalOpen(true);
        setBuyID(nft_id)
    };

    const handleBuyNFT = () => {
        dispatch(postBuyTransaction(buyNFT_id));
    }

    return (
        <div>
            <List className='c1'
                grid={{
                    gutter: 16,
                    column: 4,
                }}
                dataSource={marketNFTS}
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
                            <Button type="primary" htmlType="submit" onClick={showModal(item.nft_id)}>
                                Buy NFT
                            </Button>
                        </Card>
                    </List.Item>
                )}
            />
            <>
                <Modal title="Sell NFT"
                    open={isModalOpen}
                    footer={null}
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

                        <Form.Item
                            label="Token"
                            name="token"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Token!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit" onClick={handleSellNFT}>
                                Sell
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </>
        </div>
    )
}

export default MarketPlace;