import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Checkbox, Form, Input, InputNumber } from 'antd';

import { saveUserDetails } from '../redux/actions';

import "../styles/landingPage.css";

export default function RegisterForm() {
    const onFinish = (details) => {
        var userdetails = {
            "name": details["first-name"].concat(" ", details["last-name"]),
            "cell-number": details["cell-number"],
            "email": details["email"],
            "password": details["password"],
            "phone-number": details["phone-number"],
            "eth-balance": details["eth-balance"],
            "ethereum-address": details["ethereum-address"],
            "fiat-balance": details["fiat-balance"]
        };
        saveUserDetails(userdetails)
        console.log('Success:', userdetails);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
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
                label="First Name"
                name="first-name"
                rules={[
                    {
                        required: true,
                        message: 'Please input your first name!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Last Name"
                name="last-name"
                rules={[
                    {
                        required: true,
                        message: 'Please input your last name!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="phone-number"
                label="Phone Number"
                rules={[
                    {
                        type: 'number',
                    },
                ]}
            >
                <InputNumber />
            </Form.Item>
            <Form.Item
                name="cell-number"
                label="Cell Phone"
                rules={[
                    {
                        type: 'number',
                    },
                ]}
            >
                <InputNumber />
            </Form.Item>
            <Form.Item
                name="email"
                label="E-mail"
                rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
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
                name="confirm-password"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                        },
                    }),
                ]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item
                label="Ethereum Address"
                name="ethereum-address"
                rules={[
                    {
                        required: true,
                        message: 'Please input your ethereum address!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="level"
                label="Level"
                rules={[
                    {
                        type: 'number',
                    },
                ]}
            >
                <InputNumber />
            </Form.Item>
            <Form.Item
                name="eth-balance"
                label="Ethereum Balance"
                rules={[
                    {
                        type: 'number',
                    },
                ]}
            >
                <InputNumber />
            </Form.Item>
            <Form.Item
                name="fiat-balance"
                label="Fiat Balance"
                rules={[
                    {
                        type: 'number',
                    },
                ]}
            >
                <InputNumber />
            </Form.Item>
            {/* <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Checkbox>Remember me</Checkbox>
            </Form.Item> */}

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Register
                </Button>
            </Form.Item>
        </Form>
    )

}
