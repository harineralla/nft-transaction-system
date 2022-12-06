import { POST_USER_DETAILS, GET_USER_NFT_DETAILS, POST_DEPOSIT_DETAILS, GET_USER_DETAILS, GET_USER_TRANSACTION, USER_LOGIN_ERROR, MANAGER_DATE_RANGES } from "../actions/types";

const initialState = {
    usernfts: [],
    userInfo: {},
    userDetails: {
        user: {},
        address: {}
    },
    depositDetails: {},
    history: [],
    userLoginError: "",
    rangeHistory: []
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_DETAILS: {
            return {
                ...state,
                userInfo: action.payload
            }
        }
        case USER_LOGIN_ERROR: {
            return {
                ...state,
                userLoginError: action.payload
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
                userDetails: {
                    user: action.payload.user,
                    address: action.payload.address
                }
            }
        }
        case POST_DEPOSIT_DETAILS: {
            return {
                ...state,
                depositDetails: action.payload
            }
        }
        case GET_USER_TRANSACTION: {
            return {
                ...state,
                history: action.payload
            }
        }
        case MANAGER_DATE_RANGES: {
            return {
                ...state,
                rangeHistory: action.payload
            }
        }
        default: return state;
    }
}

export default userReducer;