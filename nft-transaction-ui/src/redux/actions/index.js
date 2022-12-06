import { Password } from "@mui/icons-material";
import axios from "axios";
import { GET_USER_DETAILS, GET_USER_NFT_DETAILS, GET_USER_TRANSACTION, MANAGER_DATE_RANGES, POST_DEPOSIT_DETAILS, POST_USER_DETAILS, USER_LOGIN_ERROR } from "./types";


const BASE_URL = "http://localhost:8080/v1";

export const getUserDetails = (data) => {
    return dispatch => {
        return axios
            .get(`${BASE_URL}/user/signIn/${data["email"]}/${data["password"]}`)
            .then(response => {
                dispatch({
                    type: GET_USER_DETAILS,
                    payload: response.data
                })
            })
            .catch(e=>{
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

export const getTransactionHistory = () => {
    return dispatch => {
        return axios
            .get(`${BASE_URL}/transaction`)
            .then(response => {
                dispatch({
                    type: GET_USER_TRANSACTION,
                    payload: response.data
                })
            })
    }
}

export const getManagerRequests=(dates)=>{
    return dispatch=>{
        return axios 
        .get(`${BASE_URL}/manager/${dates["from"]}/${dates["to"]}`)
        .then(response=>{
            dispatch({
                type: MANAGER_DATE_RANGES,
                payload: response.data
            })
        })
    }
}