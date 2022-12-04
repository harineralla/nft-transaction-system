import { React, useState } from "react";
import { Form, Input, Checkbox, Button, Modal } from "antd";
import { useDispatch } from "react-redux";
import { Redirect, useNavigate } from 'react-router-dom';

import RegisterForm from "../RegisterForm";
import { getUserNFTs } from "../../redux/actions";
import { validateUserLogin } from "../../redux/actions";
import "./index.css";


export default function LandingPage({ history }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isUser, checkUserCreds] = useState(false);

    const onFinish = (e) => {
        console.log("on finish", e);
        navigate("/dashboard")
        {/* if (dispatch(validateUserLogin({ "username": e.username, "password": e.password }))) {
            checkUserCreds(true)
        } else {
            return (
                <>{
                    !isUser?
                        <>
                            <Alert
                                message="Error"
                                description="Login Credentials are wrong"
                                type="error"
                                showIcon
                            />
                        </> :
                        <></>
                }</>
            )
        } */}
    }

    const onFinishFailed = () => {
        console.log("on finish failed")
    }
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div style={BodyStyle}>
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
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
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
            <div>
                <p className="mb-0 mr-1 pb-2">Don't have an account?</p>
                <Button type="primary" onClick={showModal}>
                    Register
                </Button>
            </div>
            <>
                <Modal title="Basic Modal"
                    open={isModalOpen}
                    // onOk={handleOk} 
                    onCancel={handleCancel}
                    footer={null}
                >
                    <RegisterForm />
                </Modal>
            </>
        </div >

    )
}

const BodyStyle = {
    width: "100%",
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    background: "linear-gradient(225deg, rgba(0,1,36,1) 10%, rgba(89,9,121,1) 85%, rgba(139,0,255,1) 100%)"
}