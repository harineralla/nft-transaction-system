import React, { useEffect, useState } from "react";
import { Form, Input, Checkbox, Button, Layout } from "antd";
import Link from "antd/es/typography/Link";
import { useDispatch, useSelector } from "react-redux";

import { getUserDetails } from "../redux/actions";

import "../styles/landingPage.css";
import { useNavigate } from "react-router-dom";

const { Footer } = Layout;

export default function LoginPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userDetails = useSelector(({ nftAppReducer }) => nftAppReducer.userReducer.user);

    useEffect(()=>{
        if (!userDetails) {
            alert("Login credentials are wrong. Please check!");
        } else {
            navigate("/dashboard");
        }
    }, [userDetails]);

    const onFinish = (e) => {
        dispatch(getUserDetails({ "email": e.email, "password": e.password }));
    }
    const onFinishFailed = () => {
        alert("Login Failed!!");
    }

    return (
        <div>
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
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email address!',
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
            <Footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </Footer>
        </div>


    )
}