import { React, useEffect, useState } from 'react';
import { Card, Col, Row, Button, Modal, Form, Input, List } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const { Meta } = Card;

export default function SellPanel({ userNfts }) {

    const [isModalOpen, setIsModalOpen] = useState(false);
    // const [userData, getUserData] = useState([]);
    // const [usernfts, getUserNfts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // var data = JSON.parse(window.localStorage.getItem('USER_DETAILS'));
        // var userNFTs = JSON.parse(window.localStorage.getItem('USER_NFTS'));
        // getUserData([data]);
        // getUserNfts(userNFTs);
    }, []);

    const onFinish = () => {
        console.log("on finish successfull")
        navigate("/market-place")
    }
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const handleBuyNFT = (nft_item) => {
        // console.log(nft_item)
    }

    return (
        <div style={{
            height: 500,
        }}>
            <List
                grid={{
                    gutter: 16,
                    column: 4,
                }}
                dataSource={userNfts}
                renderItem={(item) => (
                    <List.Item>
                        {/* <Card title={item.title}>Card content</Card> */}
                        <Card
                            title={item.name}
                            hoverable
                            style={{
                                width: 200,
                            }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <p>${item.price}.00 Eth</p>
                            <Button type="primary" htmlType="submit" onClick={showModal}>
                                Sell NFT
                            </Button>
                            <Button onClick={handleBuyNFT(item)}>
                                Add to Cart
                            </Button>
                        </Card>
                    </List.Item>
                )}
            />
            <>
                <Modal title="Basic Modal"
                    open={isModalOpen}
                    // onOk={handleOk} 
                    onCancel={handleCancel}
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
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
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
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </>
        </div >
    )
}
