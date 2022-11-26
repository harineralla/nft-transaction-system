import { SAMPLE_ACTION_TYPE } from "../actions/types";

const initialState = {
    // user: {
    //     "name": "",
    //     "cell-number": 0,
    //     "email": "",
    //     "password": "",
    //     "phone-number": 0,
    //     "eth-balance": 0,
    //     "ethereum-address": 0,
    //     "fiat-balance": 0
    // }
    user: {}
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAMPLE_ACTION_TYPE: {
            return {
                ...state,
                user: action.payload.user
            }
        }
        default: return state;
    }
}

export default userReducer;
