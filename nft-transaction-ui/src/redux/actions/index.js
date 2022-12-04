import axios from "axios";
import { GET_USER_DETAILS, POST_DEPOSIT_DETAILS, POST_USER_DETAILS } from "./types";


const BASE_URL = "http://localhost:8080/v1";

export const saveUserDetails = (data) => {
    return dispatch => {
        return axios
            .post(`${BASE_URL}/user/register`, data)
            .then(response => {
                dispatch({
                    type: POST_USER_DETAILS,
                    payload: {
                        user: response.data
                    }
                });
            })
    }
}

export const getUserNFTs = () => {
    return dispatch => {
        return axios
            .get(`${BASE_URL}/nfts`)
            .then(response => {
                dispatch({
                    type: GET_USER_DETAILS,
                    payload: response.data
                })
            })
            .catch(e => {
                console.log(e)
            })
    }
}

export const saveDepositDetails = (data) => {
    return dispatch => {
        return axios
            .post(`${BASE_URL}/user/deposit`, data)
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