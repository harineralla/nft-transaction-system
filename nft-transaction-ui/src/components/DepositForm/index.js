import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Checkbox, Form, Input, InputNumber } from 'antd';
import { saveDepositDetails } from '../../redux/actions';


export default function DepositForm() {

    const dispatch = useDispatch();

    const onFinish = (details) => {
        var userdetails = {
            "fiat_amt": details["fiat-amount"],
            "user": {
                "user_id": details["user-id"],
                "name": details["name"],
                "ph_no": details["phone-number"],
                "cell_no": details["cell-number"],
                "email": details["email"],
                "password": details["password"],
                "eth_address": details["ethereum-address"],
                "level": details["level"],
                "eth_balance": details["ethereum-balance"],
                "fiat_balance": details["fiat-balance"]
            },
            "type": details["type"],
            "payment_address": details["payment-address"]
        };
        dispatch(saveDepositDetails(userdetails));
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
                label="Fiat Amount"
                name="fiat-amount"
                rules={[
                    {
                        required: true,
                        message: 'Please input your fiat amount!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="User ID"
                name="user-id"
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
                name="name"
                label="Name"
                rules={[
                    {
                        type: 'number',
                    },
                ]}
            >
                <InputNumber />
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
                label="Level"
                name="level"
                rules={[
                    {
                        required: true,
                        message: 'Please input your level!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Ethereum Balance"
                name="ethereum-balance"
                rules={[
                    {
                        required: true,
                        message: 'Please input your ethereum balance!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Fiat Balance"
                name="fiat-balance"
                rules={[
                    {
                        required: true,
                        message: 'Please input your fiat balance!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Type"
                name="type"
                rules={[
                    {
                        required: true,
                        message: 'Please input your type!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Payment Address"
                name="payment-address"
                rules={[
                    {
                        required: true,
                        message: 'Please input your payment address!',
                    },
                ]}
            >
                <Input />
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