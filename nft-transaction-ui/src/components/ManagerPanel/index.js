import React from "react";
import { Card, DatePicker } from "antd";

import { getManagerRequests } from "../../redux/actions";
import TransactionHistory from "../TransactionHistory";
import dayjs from 'dayjs';
import { useDispatch } from "react-redux";


const { RangePicker } = DatePicker;

function ManagerPanel() {
    const dispatch = useDispatch();

    const rangePresets = [
        {
            label: 'Last 7 Days',
            value: [dayjs().add(-7, 'd'), dayjs()],
        },
        {
            label: 'Last 30 Days',
            value: [dayjs().add(-30, 'd'), dayjs()],
        },
        {
            label: 'Last 90 Days',
            value: [dayjs().add(-90, 'd'), dayjs()],
        },
    ];

    const onRangeChange = (dates, dateStrings) => {
        if (dates) {
            // console.log('From: ', dates[0], ', to: ', dates[1]);
            // console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
            dispatch(getManagerRequests({
                "from": dateStrings[0],
                "to": dateStrings[1]
            }))
        } else {
            console.log('Clear');
        }
    };
    return (
        <Card>
            <RangePicker presets={rangePresets} onChange={onRangeChange} />
            <TransactionHistory />
        </Card>
    )
}

export default ManagerPanel;