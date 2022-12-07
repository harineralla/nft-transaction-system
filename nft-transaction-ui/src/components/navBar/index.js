import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from '../navBar/logo_1.jpg';
import { GlobalStyles } from '@mui/styled-engine';
import { Navigate, useNavigate } from 'react-router-dom';
import { Add, Savings } from '@mui/icons-material';
import { Modal } from 'antd';
import DepositForm from '../DepositForm/index';
import { useSelector, useDispatch } from 'react-redux';
import { getTransactionHistory, getCurrentEthPrice } from "../../redux/actions";

const pages = [/*'Account'*/, 'Dashboard', 'Market', 'Owned Products', 'Wallet', 'Cart'];
const settings = ['Profile', 'Logout'];

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.50),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 9, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(20)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '20ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const btnSx = {
    my: 2,
    color: 'white',
    display: 'block',
    "&:hover": {
        borderColor: 'black',
        backgroundColor: '#C5A9DC',
        opacity: 0.5,
    },
};

const theme = {
    spacing: 8,
}

function ResponsiveAppBar({ trader_role }) {
    const dispatch = useDispatch();

    const [userDetails, getUserData] = React.useState({});
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const navigate = useNavigate();

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    React.useEffect(() => {
        var data = JSON.parse(window.localStorage.getItem('USER_DETAILS'));
        // var userNFTs = JSON.parse(window.localStorage.getItem('USER_NFTS'));
        getUserData(data);
        // getUserNfts(userNFTs);
    })

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const navlogin = () => {
        navigate("/")
    }

    const navdashboard = () => {
        navigate("/dashboard")
    }
    const navmarket = () => {
        navigate("/market-place")
        dispatch(getCurrentEthPrice());
    }
    const navmanager = () => {
        navigate("/manager")
    }
    const navhistory = () => {

        dispatch(getTransactionHistory(userDetails["user_id"]));

        navigate("/history")
    }
    const navprofile = () => {
        navigate("/profile")
    }
    const navwallet = () => {
        navigate("/wallet")
    }
    const appBarStyles = styled('div')(({ theme }) => ({
        backgroundColor: '#200636 !important',
    }));

    return (
        <appBarStyles>
            <AppBar position="static" className='header-bg'>
                <Container maxWidth="xl" sx={{ pb: 1, pt: 1 }}>
                    <Toolbar disableGutters >
                        <img width={90} height={90} src={logo} alt='LOGO' />

                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search NFT"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                <React.Fragment>
                                    <GlobalStyles styles={{ marginRight: '30px' }} />
                                    <MenuItem onClick={navdashboard}>Dashboard</MenuItem>
                                    <MenuItem onClick={navmarket}>Market</MenuItem>
                                    <MenuItem onClick={navwallet}>wallet</MenuItem>
                                    <MenuItem onClick={navmanager}>Manager</MenuItem>
                                    <>
                                        {
                                            trader_role ?
                                                <MenuItem onClick={navmanager}>Manager</MenuItem>
                                                :
                                                <></>
                                        }
                                    </>
                                    <MenuItem onClick={navhistory}>History</MenuItem>
                                </React.Fragment>
                            </Menu>
                        </Box>
                        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Button
                                onClick={navdashboard}
                                sx={btnSx}
                                variant="outlined"
                            >
                                Dashboard
                            </Button>
                            <Button
                                onClick={navmarket}
                                sx={btnSx}
                                variant="outlined"
                            >
                                Market
                            </Button>
                            <Button
                                onClick={navwallet}
                                sx={btnSx}
                                variant="outlined"
                            >
                                Wallet
                            </Button>
                            <Button
                                onClick={navmanager}
                                sx={btnSx}
                                variant="outlined"
                            >
                                Manager
                            </Button>
                            <Button
                                onClick={navhistory}
                                sx={btnSx}
                                variant="outlined"
                            >
                                History
                            </Button>
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Deposit">
                                <IconButton onClick={showModal} sx={{ p: 0, pr: 2 }}>
                                    <Savings sx={{ fontSize: "40px" }} />
                                </IconButton>

                            </Tooltip>
                            <Tooltip title="Open settings">
                                <IconButton size='large' onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <AccountCircle sx={{ fontSize: "80px" }} />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px', ml: '0' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                <MenuItem onClick={navprofile}>Profile</MenuItem>
                                <MenuItem onClick={navlogin}>Logout</MenuItem>
                            </Menu>
                        </Box>
                        <Modal
                            title="Enter below details"
                            open={isModalOpen}
                            // onOk={handleOk} 
                            onCancel={handleCancel}
                            footer={null}
                        >
                            <DepositForm userdetails={userDetails} />
                        </Modal>
                    </Toolbar>

                </Container>
            </ AppBar>
        </appBarStyles>
    );
}
export default ResponsiveAppBar;
