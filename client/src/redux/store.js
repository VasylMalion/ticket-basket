// core
import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from 'redux-devtools-extension';

// rootReducer
import {rootReducer} from "./reducers/rootReducer";

// sagas
import {watchFetchTicket} from "./sagas/ticketSagas";
import {watchFetchUser} from "./sagas/userSagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(watchFetchTicket);
sagaMiddleware.run(watchFetchUser);

export {store}