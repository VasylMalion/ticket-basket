// core
import React, {useState} from "react";
import { useTranslation } from "react-i18next";
import {Route, Switch} from "react-router-dom";

// components
import Header from "../header/header";
import {Footer} from "../footer/footer";

// styles
import "react-datepicker/dist/react-datepicker.css";
import "./app.css";

// routes
import {adminRoutes, authRoutes, publicRoutes} from "../routes";
import {connect} from "react-redux";

const App = ({isAuth, user}) => {

    const { t } = useTranslation();

    return (
        <div className="bg-app">
            <div className="content-app">
                <Header />
                <div className="switch-wrapper">
                    <Switch>
                        {
                            isAuth && authRoutes.map(({path, Component}) => <Route
                                key={path}
                                path = {path}
                                component={Component}
                                exact
                            />)
                        }
                        {
                            publicRoutes.map(({path, Component}) => <Route
                                key={path}
                                path = {path}
                                component={Component}
                                exact
                            />)
                        }
                        {
                            user.role === 'admin' && adminRoutes.map(({path, Component}) => <Route
                                key={path}
                                path = {path}
                                component={Component}
                                exact
                            />)
                        }
                    </Switch>
                </div>
                <Footer />
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        isAuth: state.user.isAuth,
        user: state.user.user
    }
}

// const mapDispatchToProps = dispatch => {}

export default connect(mapStateToProps)(App);