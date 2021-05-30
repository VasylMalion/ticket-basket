// constants
import {
    REQUESTED_TICKETS,
    REQUESTED_TICKETS_SUCCEEDED,
    REQUESTED_TICKETS_FAILED, ADD_CURRENT_TICKET, ADD_PARAMETERS_OF_SEARCHING, PAY_TICKETS
} from "../constants";

const initialState = {
    ticketType: null,
    tickets: [],
    countOfSeats: 1,
    loading: false,
    error: false,
    currentTicket: {},
    parametersOfSearching: {}
}

export const ticketReducer = (state = initialState, action) => {

    switch (action.type){

        case REQUESTED_TICKETS:
            return {
                ...state,
                loading: true,
                error: false,
            };

        case REQUESTED_TICKETS_SUCCEEDED:
            return {
                ...state,
                ticketType: action.payload.ticketType,
                tickets: action.payload.tickets,
                countOfSeats: action.payload.countOfSeats,
                loading: false,
                error: false,
            }

        case REQUESTED_TICKETS_FAILED:
            return {
                ...state,
                loading: false,
                error: true,
            };

        case ADD_CURRENT_TICKET:
            return {
                ...state,
                currentTicket: action.payload
            }

        case ADD_PARAMETERS_OF_SEARCHING:
            return {
                ...state,
                parametersOfSearching: action.payload
            }

        case PAY_TICKETS:
            return {
                ...state,
                tickets: action.payload
            }
        default:
            return state
    }
}