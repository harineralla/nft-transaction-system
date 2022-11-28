import { POST_USER_DETAILS, GET_USER_DETAILS, POST_DEPOSIT_DETAILS } from "../actions/types";

const initialState = {
    user: {},
    requestedUser: {},
    depositDetails: {}
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_USER_DETAILS: {
            return {
                ...state,
                user: action.payload.user
            }
        }
        case GET_USER_DETAILS:{
            return {
                ...state,
                requestedUser: action.payload
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
