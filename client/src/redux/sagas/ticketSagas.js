// core
import axios from "axios";
import { call, put, takeEvery } from 'redux-saga/effects'

// constants
import {FETCHED_TICKET} from "../constants";

// actions
import {requestTickets, requestTicketsFailed, requestTicketsSucceeded} from "../actions/actions";

// planes tickets saga
export function* watchFetchTicket() {
    yield takeEvery(FETCHED_TICKET, fetchTicketAsync);
}

function* fetchTicketAsync(data) {

    const {payload} = data

    try {
        yield put(requestTickets());
        const data = yield call(() => {
                return axios.post("http://localhost:3050/api/tickets/planes", {
                    startPoint: payload.startPoint,
                    endPoint: payload.endPoint,
                    departureDate: payload.departureDate,
                    arrivalDate: payload.arrivalDate,
                    countOfSeats: payload.countOfSeats,
                    classOfTicket: payload.classOfTicket
                }).then(data => {

                    return {
                        "ticketType": data.data.ticketType,
                        "tickets": data.data.tickets,
                        "countOfSeats": payload.countOfSeats
                    }
                })
            }
        );
        yield put(requestTicketsSucceeded(data));
    } catch (error) {
        yield put(requestTicketsFailed());
    }
}
