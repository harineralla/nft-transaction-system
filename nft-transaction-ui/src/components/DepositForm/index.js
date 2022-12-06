import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Checkbox, Form, Input, InputNumber, Select } from 'antd';
import { saveDepositDetails } from '../../redux/actions';
import moment from 'moment-timezone';

import "./index.css";

export default function DepositForm({ userdetails }) {

    const dispatch = useDispatch();

    const onFinish = (details) => {
        var deposit_amt = 0;
        var depositdetails = {
            "user": {
                "user_id": userdetails["user_id"]
            },
            "date_of_payment": moment().format('YYYY-MM-DD'),
            "payment_address": details["payment-address"],
            "type": details["type"]
        };
        if (details["type"] === "fiat") {
            depositdetails["fiat_amt"] = details["deposit-amount"]
            depositdetails["eth_amt"] = 0;
        } else if (details["type"] === "ethereum") {
            depositdetails["fiat_amt"] = 0;
            depositdetails["eth_amt"] = details["deposit-amount"];
        }
        dispatch(saveDepositDetails(depositdetails));
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
                label="Deposit Amount"
                name="deposit-amount"
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
                name="name"
                label="Name"
                rules={[
                    {
                        required: true,
                        message: 'Please input your name!',
                    },
                ]}
                initialValue={userdetails["name"]}
            >
                <Input />
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
                initialValue={userdetails["eth_address"]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Currency Type"
                name="type"
                rules={[
                    {
                        required: true,
                        message: 'Please input your currency type!',
                    },
                ]}
            >
                <Select>
                    <Select.Option value="fiat">Fiat Currency</Select.Option>
                    <Select.Option value="ethereum">Ethereum</Select.Option>
                </Select>
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