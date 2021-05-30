// core
import React from "react";
import {connect} from "react-redux";
import {useTranslation} from "react-i18next";
import {NavLink, useHistory} from "react-router-dom";

// styles
import {
    Col,
    Container,
    Form,
    Nav,
    Navbar,
    Row
} from "react-bootstrap";
import "./header.css";

import {bindActionCreators} from "redux";
import {logOut} from "../../redux/actions/actions";

const Header = ({isAuth, logOut, user}) => {

    const { t, i18n } = useTranslation();
    let history = useHistory();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    const logOutFunc = () => {
        logOut();
        history.push('/login');
    }

    const rightHeader = !isAuth
        ? <>
            <Nav.Link className="pl-lg-3 pr-3">
                <NavLink className="menu-item" to="/registration"> {t('registration')} </NavLink>
            </Nav.Link>
            <Nav.Link className="pr-3">
                <NavLink className="menu-item" to="/login"> {t('log-in')} </NavLink>
            </Nav.Link>
        </>
        : (user && user.role === 'user'
                ? <>
                    <Nav.Link className="pl-lg-3 pr-3">
                        <NavLink className="menu-item" to="/cabinet"> {t('cabinet')} </NavLink>
                    </Nav.Link>
                    <Nav.Link className="pr-3" onClick = {logOutFunc} >
                        <NavLink className="menu-item" to="/" > {t('log-out')} </NavLink>
                    </Nav.Link>
                </>
                : <>
                    <Nav.Link className="pl-lg-3 pr-3">
                        <NavLink className="menu-item" to="/admin-panel"> Адмін панель </NavLink>
                    </Nav.Link>
                    <Nav.Link className="pr-3" onClick = {logOutFunc} >
                        <NavLink className="menu-item" to="/" > Вихід </NavLink>
                    </Nav.Link>
                </>
        )

    return <Container fluid className="p-0 m-0">
        <Row className="m-0">
            <Col className="header">
                <Navbar bg="light" expand="lg" fixed="top">
                    <NavLink to="/">
                        <Navbar.Brand> TicketsBasket </Navbar.Brand>
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            {/*<Nav.Link href="#home">Home</Nav.Link>*/}
                            {/*<Nav.Link href="#link">Link</Nav.Link>*/}
                        </Nav>
                        <Nav>
                            <div className="lang">
                                <Form.Control
                                    className="d-inline"
                                    as="select"
                                    onChange={e => changeLanguage(e.target.value.toLowerCase())}
                                >
                                    <option> UA </option>
                                    <option> EN </option>
                                    <option> RU </option>
                                </Form.Control>
                            </div>
                            { rightHeader }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Col>
        </Row>
    </Container>
}

const mapStateToProps = state => {
    return {
        isAuth: state.user.isAuth,
        user: state.user.user
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    logOut
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Header)