import React from "react";
import { Table, Button, Card } from 'antd';

function TransactionHistory() {

    const data = [
        {
            key: 1,
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
        },
        {
            key: 2,
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
        },
        {
            key: 3,
            name: 'Not Expandable',
            age: 29,
            address: 'Jiangsu No. 1 Lake Park',
            description: 'This not expandable',
        },
        {
            key: 4,
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
        },
    ];

    const columns = [
        {
            title: 'Transaction Id',
            dataIndex: 'transaction_id',
            key: 'transaction_id',
        },
        {
            title: 'NFT Id',
            dataIndex: 'nft_id',
            key: 'nft_id',
        },
        {
            title: 'Buyer Ethereum Address',
            dataIndex: 'buyer_eth_address',
            key: 'buyer_eth_address',
        },
        {
            title: 'Seller Ethereum Address',
            dataIndex: 'seller_eth_address',
            key: 'seller_eth_address',
        },
        {
            title: 'Value in Ethereum',
            dataIndex: 'value_in_ethereum',
            key: 'value_in_ethereum',
        },
        {
            title: 'Commission Paid',
            dataIndex: 'commission_paid',
            key: 'commission_paid',
        },
        {
            title: 'Commission Type',
            dataIndex: 'commission_type',
            key: 'commission_type',
        },
        {
            title: 'Current Ethereum Price',
            dataIndex: 'current_eth_price',
            key: 'current_eth_price',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Cancel Transaction',
            dataIndex: 'cancel_transaction',
            key: 'cancel_transaction',
            render: () => {
                return {
                    children: <Button>Cancel</Button>,
                };
            }
        },
    ];
    return (
        <Card>
            <Table
                columns={columns}
                dataSource={data}
                scroll={{ y: 775 }}
            />
        </Card>
    )
}

export default TransactionHistory;