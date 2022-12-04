import { React, useState } from 'react';
import { Card, Col, Row, Button, Modal, Form, Input } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom';
const { Meta } = Card;

export default function SellPanel() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    const data = [
        {
            title: 'NFT 1',
        },
        {
            title: 'NFT 2',
        },
        {
            title: 'NFT 3',
        },
        {
            title: 'NFT 4',
        },
        {
            title: 'NFT 5',
        },
        {
            title: 'NFT 6',
        },
    ];
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
    return (

        <div style={{
            height: 500,
        }}>
            <InfiniteScroll
                dataLength={10}
                hasMore={10 < 50}>
                <Row gutter={8}>
                    <Col span={6}>
                        <Card
                            hoverable
                            style={{
                                width: 200,
                            }}
                            title={"NFT-1"}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Button type="primary" htmlType="submit" onClick={showModal}>
                                Sell NFT
                            </Button>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card
                            hoverable
                            style={{
                                width: 200,
                            }}
                            title={"NFT-1"}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Button type="primary" htmlType="submit" onClick={showModal}>
                                Sell NFT
                            </Button>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card
                            hoverable
                            style={{
                                width: 200,
                            }}
                            title={"NFT-1"}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Button type="primary" htmlType="submit" onClick={showModal}>
                                Sell NFT
                            </Button>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card
                            hoverable
                            style={{
                                width: 200,
                            }}
                            title={"NFT-1"}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Button type="primary" htmlType="submit" onClick={showModal}>
                                Sell NFT
                            </Button>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card
                            hoverable
                            style={{
                                width: 200,
                            }}
                            title={"NFT-1"}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Button type="primary" htmlType="submit" onClick={showModal}>
                                Sell NFT
                            </Button>
                        </Card>
                    </Col>
                </Row>
            </InfiniteScroll>
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
