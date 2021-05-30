// constants
import {
    ADD_CURRENT_TICKET,
    FETCHED_TICKET,
    REQUESTED_TICKETS,
    REQUESTED_TICKETS_FAILED,
    REQUESTED_TICKETS_SUCCEEDED,
    SIGN_IN,
    FETCHED_USER,
    REQUESTED_USER,
    REQUESTED_USER_FAILED,
    REQUESTED_USER_SUCCEEDED,
    LOG_OUT, ADD_PARAMETERS_OF_SEARCHING, PAY_TICKETS
} from "../constants";

export const fetchedTickets = payload => {
    return {
        type: FETCHED_TICKET,
        payload
    }
}

export const requestTickets = () => {
    return {
        type: REQUESTED_TICKETS,
    }
}

export const requestTicketsSucceeded = payload => {
    return {
        type: REQUESTED_TICKETS_SUCCEEDED,
        payload
    }
}

export const requestTicketsFailed = () => {
    return {
        type: REQUESTED_TICKETS_FAILED,
    }
}

export const addCurrentTicket = payload => {
    return {
        type: ADD_CURRENT_TICKET,
        payload
    }
}

export const signIn = payload => {
    return {
        type: SIGN_IN,
        payload
    }
}

export const logOut = () => {
    return {
        type: LOG_OUT
    }
}

export const fetchedUser = payload => {
    console.log(1);
    return {
        type: FETCHED_USER,
        payload
    }
}

export const requestUser = () => {
    return {
        type: REQUESTED_USER,
    }
}

export const requestUserSucceeded = payload => {
    return {
        type: REQUESTED_USER_SUCCEEDED,
        payload
    }
}

export const requestUserFailed = () => {
    return {
        type: REQUESTED_USER_FAILED,
    }
}

export const addParametersOfSearching = payload => {
    return {
        type: ADD_PARAMETERS_OF_SEARCHING,
        payload
    }
}

export const payTickets = payload => {
    return {
        type: PAY_TICKETS,
        payload
    }
}

export const addMyTicket = payload => {
    return {
        type: "ADD_MY_TICKET",
        payload
    }
}