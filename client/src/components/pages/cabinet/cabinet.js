// core
import React, {useEffect} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {useTranslation} from "react-i18next";

// styles
import {Alert, Col, Container, Jumbotron, ListGroup, Row} from "react-bootstrap";
import {Ticket} from "../bookingPage/ticket/ticket";
import {BiRightArrow} from "react-icons/bi";

const Cabinet = ({user, tickets}) => {

    const { t } = useTranslation();

    const allTickets = user.boughtTickets.length > 0
        ? user.boughtTickets.map(item => <div>
        <Ticket/>
        <div>
            Кількість квитків: {item.count}
        </div>
    </div>)
        : <Col className="text-center">
            <h3 className="text-center"> Квитки не куплено! </h3>
        </Col>

    return <div>
        <Container>
            <img alt="panorama" src="https://cs8.pikabu.ru/post_img/big/2018/06/03/6/15280166451542718.jpg" className="w-100 mt-5"/>
            <Row className="pb-4 pt-5">
                <Col>
                    <Alert variant="success"> Квитки </Alert>
                    <Row>
                        <Alert variant="info" className="w-100 mr-3 ml-3">
                            Львів - Київ <BiRightArrow /> Дата: 26.05.2021, 16:00 <BiRightArrow /> 2 пасажири, Бізнес-клас
                        </Alert>
                    </Row>
                </Col>
                <Col className="col-lg-4 col-12 mb-lg-0 mb-3">
                    <Alert variant="success"> Персональні дані </Alert>
                    <ListGroup>
                        <ListGroup.Item disabled> {t("email-single")}: {user.email} </ListGroup.Item>
                        <ListGroup.Item disabled> Номер телефону: {user.middleName} </ListGroup.Item>
                        <ListGroup.Item> {t("name")}: {user.name} </ListGroup.Item>
                        <ListGroup.Item> {t("surname")}: {user.surname} </ListGroup.Item>
                        <ListGroup.Item> По батькові: {user.phone} </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    </div>
}

const mapStateToProps = state => {

    return {
        user: state.user.user,
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    // updateUser: data => updateUser(data)
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Cabinet)