import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Checkbox, Form, Input, InputNumber } from 'antd';
import { saveDepositDetails } from '../../redux/actions';
import moment from 'moment-timezone';


export default function DepositForm({ userdetails }) {

    const dispatch = useDispatch();

    const onFinish = (details) => {
        var depositdetails = {
            "user_id": userdetails["user_id"],
            "date_of_payment": moment().format('MMMM Do YYYY, h:mm:ss a'),
            "eth_amt": details["eth_amt"],
            "fiat_amt": details["fiat_amt"],
            "payment_address": details["payment_address"],
            // "type": details["type"]
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
                initialValue={userdetails["fiat_balance"]}
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
                initialValue={userdetails["user_id"]}
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
                initialValue={userdetails["name"]}
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
                initialValue={userdetails["ph_no"]}
            >
                <InputNumber />
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
                    Deposit
                </Button>
            </Form.Item>
        </Form>
    )
}