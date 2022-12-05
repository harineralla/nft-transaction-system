import { POST_USER_DETAILS, GET_USER_NFT_DETAILS, POST_DEPOSIT_DETAILS, GET_USER_DETAILS } from "../actions/types";

const initialState = {
    usernfts: [
        {
            "nft_id": "121324",
            "eth_address": "432747236",
            "name": "Tom And Jerry",
            "price": 2353,
            "wants_to_sell": 0,
            "user_id": 132132
        },
        {
            "nft_id": "121324",
            "eth_address": "432747236",
            "name": "Tom And Jerry",
            "price": 2353,
            "wants_to_sell": 0,
            "user_id": 132132
        },
        {
            "nft_id": "121324",
            "eth_address": "432747236",
            "name": "Tom And Jerry",
            "price": 2353,
            "wants_to_sell": 0,
            "user_id": 132132
        },
        {
            "nft_id": "121324",
            "eth_address": "432747236",
            "name": "Tom And Jerry",
            "price": 2353,
            "wants_to_sell": 0,
            "user_id": 132132
        }
    ],
    user: {},
    depositDetails: {}
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_DETAILS: {
            return {
                ...state,
                user: action.payload
            }
        }
        case GET_USER_NFT_DETAILS: {
            return {
                ...state,
                usernfts: action.payload
            }
        }
        case POST_USER_DETAILS: {
            return {
                ...state,
                user: action.payload.user
            }
        }
        case POST_DEPOSIT_DETAILS: {
            return {
                ...state,
                depositDetails: action.payload
            }
        }
        default: return state;
    }
}

export default userReducer;
