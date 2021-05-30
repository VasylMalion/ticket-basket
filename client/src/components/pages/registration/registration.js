// core
import React, {useState} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { useHistory } from "react-router-dom";
import {useTranslation} from "react-i18next";

// styles
import {Button, Col, Container, Form, Row} from "react-bootstrap";

// actions
import {signIn, fetchedUser} from "../../../redux/actions/actions";

import {registration} from "../../http/userApi";

const Registration = ({signInData, fetchedUser}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [middleName, setMiddleName] = useState('');

    const { t } = useTranslation();
    let history = useHistory();

    const signIn = async () => {
        try {
            if (!email || !password) {
                return alert("Одне з полів порожнє!")
            }
                const responce = await registration(email, password, name, surname, phone, middleName)
                fetchedUser(responce.userId);
                signInData(responce);
                if (responce) {
                    history.push("/")
                }
        } catch (err) {

            if (err.response.status === 500) {
               return  alert("Такий email вже зареєстрований!")
            }
            alert("Щось пішло не так")
        }
    }

    return <Container className="mt-5">
        <Row>
            <Col className="col-12 mt-5">
                <h1 className="text-center pb-2"> {t("create-account")} </h1>
            </Col>
        </Row>
        <Form className="offset-lg-4 col-lg-4 pb-4 col-8 offset-md-3 col-md-6 offset-sm-2 col-sm-8 col-12">
            <Form.Group controlId="formBasicEmail">
                <Form.Label> {t("email")} </Form.Label>
                <Form.Control
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="formBasicPhone">
                <Form.Label> Номер телефону </Form.Label>
                <Form.Control
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    type="text"
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
            <Form.Group controlId="formBasicPassword">
                <Form.Label> {t("name")} </Form.Label>
                <Form.Control
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label> {t("surname")} </Form.Label>
                <Form.Control
                    value={surname}
                    onChange={e => setSurname(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label> По батькові </Form.Label>
                <Form.Control
                    value={middleName}
                    onChange={e => setMiddleName(e.target.value)}
                />
            </Form.Group>
            <Button onClick={signIn} variant="primary" className="w-100">
                {t("sign-up")}
            </Button>
        </Form>
    </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(Registration)