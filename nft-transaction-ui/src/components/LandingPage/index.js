import { React, useState, useEffect } from "react";
import { Form, Input, Checkbox, Button, Modal } from "antd";
import { useDispatch } from "react-redux";
import { Redirect, useNavigate } from 'react-router-dom';

import RegisterForm from "../RegisterForm";
import { useSelector } from "react-redux";
import { getUserDetails } from "../../redux/actions";
import { getUserNFTs } from '../../redux/actions';

import "./index.css";


export default function LandingPage({ history }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isUser, checkUserCreds] = useState(false);

    const userDetails = useSelector(({ nftAppReducer }) => nftAppReducer.userReducer.userInfo);
    const userLoginError = useSelector(({ nftAppReducer }) => nftAppReducer.userReducer.userLoginError);
    const closeModal = useSelector(({ nftAppReducer }) => nftAppReducer.userReducer.closeRegisterModal);

    useEffect(() => {
        checkLoginDetails();
        if (closeModal) {
            setIsModalOpen(false);
        }
    }, [userDetails, userLoginError]);

    const checkLoginDetails = () => {
        if (Object.keys(userDetails).length !== 0) {
            dispatch(getUserNFTs(userDetails["user_id"]));
            navigate("/dashboard");
        } else if (userLoginError) {
            alert("Login credentials are wrong. Please check!", userLoginError);
        }
    }
    const onFinish = (e) => {
        dispatch(getUserDetails({ "email": e.email, "password": e.password }));
    }
    const onFinishFailed = () => {
        alert("Login Failed!!");
    }
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div className="la-bg-img padding pt-40">
            <Form className="cont-img pt-5"
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
                <h2 className="fw-bold mb-2 login text-uppercase">Login</h2>
                <Form.Item
                    label="Email"
                    name="email"
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
                    <Button type="primary" htmlType="submit" className="ms-sm-5">
                        Submit
                    </Button>
                </Form.Item>
                <a href="/forgot-password" className="padding">Forget Password?</a>
            </Form>
            <div className="ms-sm-6">
                <p className="mb-0 mr-1 pb-2 color">Don't have an account?</p>
                <div className="ms-sm-5">
                    <Button type="primary" onClick={showModal}>
                        Register
                    </Button>
                </div>

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