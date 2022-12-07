import { React, useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import profile_pic from '../navBar/profile photo.jpg'
import ResponsiveAppBar from '.';

export default function WalletCard() {
  const [userData, getUserData] = useState([]);
  useEffect(() => {
    var data = JSON.parse(window.localStorage.getItem('USER_DETAILS'));
  }, []);
  return (
    <div>
    <ResponsiveAppBar/>
    <Card sx={{ maxWidth: 345, ml: 55, mt:10, mb:0, height:400, borderRadius:10 }}>
      <CardMedia
        component="img"
        height="300"
        image={profile_pic}
        alt="Profile pic"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Name : {userData("name")}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          ETH Balance :{userData("eth_balance")}
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
}