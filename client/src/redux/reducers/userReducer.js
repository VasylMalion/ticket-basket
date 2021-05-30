// constants
import {
    SIGN_IN,
    LOG_OUT,
    GET_USER, REQUESTED_USER_SUCCEEDED
} from "../constants";

const initialState = {
    isAuth: false,
    userId: null,
    tickets: [],
    user: {}
}

export const userReducer = (state = initialState, action) => {

    switch (action.type){
        case SIGN_IN:
            return {
                ...state,
                isAuth: true,
            }

        case REQUESTED_USER_SUCCEEDED:
            console.log(action)

            return {
                ...state,
                user: action.payload.user
            }

        case LOG_OUT:
            localStorage.removeItem('token')
            return {
                ...state,
                isAuth: false,
                user: {}
            }
        case "ADD_MY_TICKET":
            return {
                ...state,
                tickets: [
                    ...state.tickets,
                    action.payload
                ]
            }
        default:
            return state
    }
}