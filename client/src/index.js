// core
import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// components
import App from "./components/app/app";

import {store} from "./redux/store";

import "./localization/i18n"

ReactDOM.render(
    <Suspense fallback={<div>Loading... </div>}>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </Suspense>,
    document.getElementById('root')
);

