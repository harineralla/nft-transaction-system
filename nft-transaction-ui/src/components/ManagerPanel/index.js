import React from "react";
import { Card, DatePicker, Typography } from "antd";
import DashboardIcon from '@mui/icons-material/Dashboard';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Navigate, useNavigate } from 'react-router-dom';
import { getManagerRequests } from "../../redux/actions";
import TransactionHistory from "../TransactionHistory";
import dayjs from 'dayjs';
import { useDispatch } from "react-redux";
import { Box } from "@mui/system";
import { blueGrey, pink } from "@mui/material/colors";


const { RangePicker } = DatePicker;

function ManagerPanel() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const navdashboard = () => {
        navigate("/dashboard")
    }

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
        <Card sx={{backgroundColor: 'blue'}}>
            <Box sx={{float: "left"}}>
            <Tooltip title="Dashboard">
                                <IconButton onClick={navdashboard} sx={{ color:"blue", float:"right", p: 2, pr: 2 }}>
                                    <DashboardIcon sx={{fontSize: "30px"}}/>
                                    <Typography>Dashboard</Typography>
                                </IconButton> 
                            </Tooltip>
                            <Box sx={{pt:6}}>
                                <Typography>Select Date:</Typography>
            <RangePicker presets={rangePresets} onChange={onRangeChange} />
            </Box>
            <TransactionHistory />
             </Box>
        </Card>
    )
}

export default ManagerPanel;