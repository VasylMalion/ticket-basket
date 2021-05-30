// core
import {combineReducers} from "redux";

// reducers
import {ticketReducer} from "./ticketReducer";
import {userReducer} from "./userReducer";

export const rootReducer = combineReducers({tickets: ticketReducer, user: userReducer})