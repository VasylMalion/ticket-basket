// core
import React, {useState} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { useHistory } from "react-router-dom";
import {useTranslation} from "react-i18next";

// actions
import {fetchedUser, signIn} from "../../../redux/actions/actions";

// styles
import {Alert, Button, Col, Container, Form, Row} from "react-bootstrap";
import "./auth.css";

import {login} from "../../http/userApi";

const Auth = ({signInData, fetchedUser}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hasError, setHasError] = useState(false);


    let history = useHistory();
    const { t } = useTranslation();

    const signIn = async () => {
        try {
            if (!email || !password) {
                setHasError(true);
            }
            const responce = await login(email, password)
            setHasError(false);
            fetchedUser(responce.userId);
            signInData(responce);
            if (responce) {
                history.push("/")
            }
        } catch (err) {
            setHasError(true);
        }
    }

    return <>
        <Container className="margin-for-header">
            <Row>
                <Col className="col-12 mt-5">
                    <h1 className="text-center pb-2"> {t("log-in-account")} </h1>
                </Col>
            </Row>
            {hasError && <Alert variant="danger" className="offset-3 col-6 text-center"> Пароль або email не валідні! </Alert>}
            <Form className="offset-lg-4 col-lg-4 pb-4 col-8 offset-md-3 col-md-6 offset-sm-2 col-sm-8 col-12">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label> {t("email")}</Form.Label>
                    <Form.Control
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label> {t("password")} </Form.Label>
                    <Form.Control
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Запам'ятати мене" />
                </Form.Group>
                <Button onClick={signIn}  variant="primary" className="w-100">
                    {t("sign-in")}
                </Button>
            </Form>
        </Container>
    </>
}

const mapStateToProps = state => {
    return {
        user: state.user.user
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    signInData: data => signIn(data),
    fetchedUser: data => fetchedUser(data)
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Auth)