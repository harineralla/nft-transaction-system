import axios from "axios";
import { SAMPLE_ACTION_TYPE } from "./types";


const BASE_URL = "http://localhost:8080/v1";

export const saveUserDetails = (data) => {
    console.log("inside try", data)
    return dispatch => {
        return axios
            .post(`${BASE_URL}/user/register`, data)
            .then(response => {
                dispatch({
                    type: SAMPLE_ACTION_TYPE,
                    payload: {
                        user: data
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
                console.log("user nfts ", response.data)
            })
            .catch(e => {
                console.log("inside the function")
                console.log(e)
            })
    }
}