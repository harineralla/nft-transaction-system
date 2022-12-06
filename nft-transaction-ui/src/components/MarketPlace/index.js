import { React, useEffect, useState } from 'react';
import { Card, Col, Row, Button, Modal, Form, Input, List } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "./index.css";

const { Meta } = Card;

export default function MarketPlace() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const nftData = useSelector(({ nftAppReducer }) => nftAppReducer.userReducer.usernfts);

    useEffect(() => {
        console.log(nftData)
    }, [nftData]);

    const onFinish = () => {
        console.log("on finish successfull")

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
        console.log(nft_item)
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
                dataSource={nftData}
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
                           <p class="price"> Balance: {item.price}</p>
                            <Button type="primary" htmlType="submit" onClick={showModal}>
                                Buy NFT
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


