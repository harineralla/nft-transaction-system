import React, { useEffect, useState } from "react";

import { Card, Col, Row, Button, Modal, Form, Input, List } from 'antd';
import { getMarketNFTs } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

function MarketPlace() {

    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const marketNFTS = useSelector(({ nftAppReducer }) => nftAppReducer.userReducer.marketNFTS);

    useEffect(() => {
        dispatch(getMarketNFTs());
    })

    const showModal = () => {
        setIsModalOpen(true);
    };

    return (
        <List className='c1'
            grid={{
                gutter: 16,
                column: 4,
            }}
            dataSource={marketNFTS}
            renderItem={(item) => (
                <List.Item>
                    <Card
                        title={item.name}
                        hoverable
                        style={{
                            width: 200,
                        }}
                        cover={<img alt="example" src={item.nft_id} />}
                    >
                        <p>${item.price}.00 Eth</p>
                        <Button type="primary" htmlType="submit" onClick={showModal}>
                            Buy NFT
                        </Button>
                    </Card>
                </List.Item>
            )}
        />
    )
}

export default MarketPlace;