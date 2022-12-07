import { Password, RepeatOneSharp } from "@mui/icons-material";
import { message } from "antd";
import Base from "antd/es/typography/Base";
import { responsiveMap } from "antd/es/_util/responsiveObserve";
import axios from "axios";
import {
    GET_USER_DETAILS, GET_USER_NFT_DETAILS, GET_USER_TRANSACTION, MANAGER_DATE_RANGES, POST_DEPOSIT_DETAILS,
    POST_USER_DETAILS, USER_LOGIN_ERROR, CLOSE_REGISTER_MODAL, GET_MARKET_NFTS, POST_TRANSACTION_DETAILS, GET_CURRENT_ETH_PRICE
} from "./types";


const BASE_URL = "http://localhost:8080/v1";


export const closeRegisterModal = (boolValue) => {
    return dispatch => {
        dispatch({
            type: CLOSE_REGISTER_MODAL,
            payload: boolValue
        })
    }
}

export const getUserDetails = (data) => {
    return dispatch => {
        return axios
            .get(`${BASE_URL}/user/signIn/${data["email"]}/${data["password"]}`)
            .then(response => {
                window.localStorage.setItem('USER_DETAILS', JSON.stringify(response.data));
                dispatch({
                    type: GET_USER_DETAILS,
                    payload: response.data
                })
            })
            .catch(e => {
                dispatch({
                    type: USER_LOGIN_ERROR,
                    payload: e.response.data
                })
            })
    }
}

export const getUserNFTs = (user_id) => {
    return dispatch => {
        return axios
            .get(`${BASE_URL}/list/user/nfts/${user_id}`)
            .then(response => {
                window.localStorage.setItem('USER_NFTS', JSON.stringify(response.data));
                dispatch({
                    type: GET_USER_NFT_DETAILS,
                    payload: response.data
                })
            })
            .catch(e => {
                console.log(e)
            })
    }
}

export const saveUserDetails = (data) => {
    return dispatch => {
        return axios
            .post(`${BASE_URL}/user/register`, data)
            .then(response => {
                dispatch({
                    type: POST_USER_DETAILS,
                    payload: {
                        user: response.data,
                        address: response.data
                    }
                });
            })
    }
}


export const saveDepositDetails = (data) => {
    return dispatch => {
        return axios
            .post(`${BASE_URL}/deposit`, data)
            .then(response => {
                dispatch({
                    type: POST_DEPOSIT_DETAILS,
                    payload: response.data
                })
            })
            .catch(e => {
                console.log(e)
            })
    }
}

export const getTransactionHistory = (user_id) => {
    return dispatch => {
        return axios
            .get(`${BASE_URL}/get/transaction/of/user/${user_id}`)
            .then(response => {
                window.localStorage.setItem('USER_HISTORY', JSON.stringify(response.data));
                dispatch({
                    type: GET_USER_TRANSACTION,
                    payload: response.data
                })
            })
    }
}

export const getManagerRequests = (dates) => {
    return dispatch => {
        return axios
            .get(`${BASE_URL}/manager/${dates["from"]}/${dates["to"]}`)
            .then(response => {
                dispatch({
                    type: MANAGER_DATE_RANGES,
                    payload: response.data
                })
            })
    }
}

export const getMarketNFTs = () => {
    return dispatch => {
        return axios
            .get(`${BASE_URL}/nfts/market`)
            .then(response => {
                window.localStorage.setItem('MARKET_NFTS', JSON.stringify(response.data));
                dispatch({
                    type: GET_MARKET_NFTS,
                    payload: response.data
                })
            })
    }
}

export const setSellNFTValue = (nft_id) => {
    return dispatch => {
        return axios
            .get(`${BASE_URL}/nft/sell/${nft_id}`)
            .then(response => {
                console.log("sell nft response ", response.data);
            })
    }
}

export const getCurrentEthPrice = () => {
    return dispatch => {
        return axios
            .get(`https://api.coinbase.com/v2/prices/ETH-USD/spot`)
            .then(response => {
                window.localStorage.setItem('MARKET_ETH_PRICE', JSON.stringify(response.data));
                dispatch({
                    type: GET_CURRENT_ETH_PRICE,
                    payload: response.data
                })
            })
    }
}

export const cancelTrasaction = (transaction_id) => {
    return dispatch => {
        return axios
            .get(`${BASE_URL}/cancel/transaction/${transaction_id}`)
            .then(response => {
                console.log(response.data)
            })
            .catch(e => {
                message.error("Can't Cancel this Transaction Now")
            })
    }
}

export const saveTransactionDetails=(data, eth_price)=>{
    return dispatch=>{
        return axios
        .post(`${BASE_URL}/transaction/${eth_price}`, data)
        .then(response=>{
            console.log("saved transaction details", response.data);
        })
    }
}