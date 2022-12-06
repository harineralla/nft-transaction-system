import React, { useEffect } from "react";
import { Table, Button, Card, Typography} from 'antd';

import { getTransactionHistory } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

function TransactionHistory() {
    const dispatch = useDispatch();

    const data = useSelector(({ nftAppReducer }) => nftAppReducer.userReducer.history);
    // data["nft_id"]= data["nft"]["nft_id"];
    var userData = JSON.parse(window.localStorage.getItem('USER_DETAILS'));

    useEffect(()=>{
        dispatch(getTransactionHistory(userData["user_id"]));
    })

    // console.log(data)
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