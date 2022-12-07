import React, { useEffect, useState } from "react";
import { Table, Button, Card, Typography } from 'antd';


import { useDispatch, useSelector } from "react-redux";
import { cancelTrasaction } from "../../redux/actions";

function TransactionHistory() {
    const dispatch = useDispatch();

    const [userHistory, setUserHistory] = useState([]);
    const [userDetails, getUserData] = useState({});
    const data = useSelector(({ nftAppReducer }) => nftAppReducer.userReducer.history);

    useEffect(() => {
        var data = JSON.parse(window.localStorage.getItem('USER_DETAILS'));
        var userHistory = JSON.parse(window.localStorage.getItem('USER_HISTORY'));
        getUserData(data);
        setUserHistory(userHistory);
    }, []);

    const handleCancel = (record) => {
        // console.log("history of ", record);
        dispatch(cancelTrasaction(record["transaction_id"]))
    }
    console.log("history ", userHistory)
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
            render: (text, record) => {
                // console.log(record.nft.nft_id)
                return {
                    children: <p>{record.nft.nft_id}</p>,
                };
            }
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
            dataIndex: 'value_in_eth',
            key: 'value_in_eth',
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
            render: (text, record) => {
                var type = "";
                if (!record.commision_type === true) {
                    type = "Ethereum"
                } else {
                    type = "Fiat/USD"
                }
                return {
                    children: <p>{type}</p>,
                };
            }
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
            render: (text, record) => {
                return {
                    children: <Button onClick={() => handleCancel(record)}>Cancel</Button>,
                };
            }
        },
    ];
    return (
        <Card>
            <Table
                columns={columns}
                dataSource={userHistory}
                scroll={{ y: 775 }}

            />
        </Card>
    )
}

export default TransactionHistory;