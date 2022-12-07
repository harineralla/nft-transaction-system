import React from 'react';
import { Button, Checkbox, Form, Input, InputNumber } from 'antd';

import { saveUserDetails, closeRegisterModal } from '../../redux/actions';

import "../../styles/landingPage.css";
import { useDispatch } from 'react-redux';


export default function RegisterForm() {
    const dispatch = useDispatch();

    const onFinish = (details) => {
        var userdetails = {
            "user": {
                "name": details["first-name"].concat(" ", details["last-name"]),
                "cell-no": details["cell-number"],
                "ph-no": details["phone-number"],
                "email": details["email"],
                "password": details["password"],
                "eth_address": details["ethereum-address"],
                "level": 0,
                "eth_balance": 0.0,
                "fiat_balance": 0.0,
            },
            "address": {
                "street_address": details["street-address"],
                "city": details["city"],
                "state": details["state"],
                "zip_code": details["zipcode"]
            }
        }
        dispatch(saveUserDetails(userdetails));
        dispatch(closeRegisterModal(true));
    }
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
                        max: 10
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="cell-number"
                label="Cell Phone"
                rules={[
                    {
                        max: 10
                    },
                ]}
            >
                <Input />
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
                label="Street Address"
                name="street-address"
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
                label="City"
                name="city"
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
                label="State"
                name="state"
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
                name="Zip Code"
                label="zip-code"
                rules={[
                    {
                        type: 'number',
                        required: true,
                        message: 'Please input your last name!',
                    },
                ]}
            >
                <InputNumber />
            </Form.Item>
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
