import React from "react";
import {Ticket} from "./ticket/ticket";
import {connect} from "react-redux";
import {Col, Container, Card, Accordion, Button, Row, Alert} from "react-bootstrap";
import Contact from "./contactInformation/contactInformation";
import Passanger from "./passanger/passanger";
import {useHistory} from "react-router-dom";

import "./bookingPage.css";
import {BiRightArrow} from "react-icons/bi";

const Booking = ({countOfSeats, currentTicket, parametersOfSearching}) => {

    const arrPassanger = [];

    let history = useHistory();

    for (let i = 1; i < countOfSeats + 1; i++) {
        arrPassanger.push(<Passanger number={i} />)
    }

    const toPayment = () => {
        history.push("/payment");
    }

    const {startPoint,
        endPoint,
        departureDate,
        countOfSeats: countOfSeatsUpdate,
        classOfTicket} = parametersOfSearching;

    return <>
        <Container fluid className="bg-grey flex-column p-2 mt-5">
            <Container className="mt-3 p-3">
                <Alert variant="success" className="text-center"> Бронювання квитка </Alert>

                <Row>
                    <Col className="col-8">
                       <Ticket
                            company={currentTicket.company}
                            startPoint={currentTicket.startPoint}
                            endPoint={currentTicket.endPoint}
                            cost={currentTicket.cost}
                            departureDay={currentTicket.departureDate}
                            departureTime={currentTicket.departureTime}
                            arrivalTime={currentTicket.arrivalTime}
                            arrivalDay={currentTicket.arrivalDay}
                            classOfTicket={currentTicket.classOfTicket}
                       />
                       <Contact />
                        {arrPassanger.map(item => item)}
                       <Button className="mt-2 w-100" onClick={toPayment}> Забронювати </Button>
                    </Col>
                    <Col>
                        <div className="bg-white br-info">
                            <Accordion defaultActiveKey="0">
                                <Card className="cursor-pointer">
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                        Перевезення
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body> {startPoint} <BiRightArrow /> {endPoint} </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card className="cursor-pointer">
                                    <Accordion.Toggle as={Card.Header} eventKey="1">
                                        Квитки
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body>{countOfSeatsUpdate}x {currentTicket.cost} UAN</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card className="cursor-pointer">
                                    <Accordion.Toggle as={Card.Header} eventKey="2">
                                        Пасажири
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="2">
                                        <Card.Body>К-сть пасажирів: {countOfSeatsUpdate}</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <div style={{padding:"10px 30px", fontSize: "20px", textAlign:"right"}}>
                                    Разом: {countOfSeatsUpdate * currentTicket.cost} UAN
                                </div>
                            </Accordion>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    </>
}

const mapStateToProps = state => {
    return {
        countOfSeats: state.tickets.countOfSeats,
        currentTicket: state.tickets.currentTicket,
        parametersOfSearching: state.tickets.parametersOfSearching
    }
}

export default connect(mapStateToProps)(Booking)