// core
import React, {useState} from "react";

// icons
import {FaArrowRight} from "react-icons/fa";
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import {IoAirplane} from "react-icons/io5";

// styles
import "./double-tickets.css";
import TicketModal from "../modal/modal";

export const DoubleTickets = ({there, back}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return <>
        <Row>
            <Col className="col-12 p-0">
                <div>
                    <div className="ticket p-0 m-0">
                        <div>
                            <div className="ticket-header border-radius-top">
                                <IoAirplane className="ticket-plane" />
                                {there.company}
                            </div>
                            <hr  />
                        </div>
                        <div className="ticket-direction">
                            <div>
                                <div className="ticket-det">
                                    <span className="ticket-date">{there.departureDay} {there.departureTime}</span>
                                    {there.startPoint}
                                </div>
                                <div className="arrow">
                                    <FaArrowRight/>
                                </div>
                                <div className="ticket-det">
                                    <span className="ticket-date">{there.arrivalDay} {there.arrivalTime}</span>
                                    {there.endPoint}
                                </div>
                            </div>
                            <div className="ticket-price">
                                {there.cost} UAN
                            </div>
                        </div>
                        <div className ="separator">
                            Деталі перевезення
                        </div>
                        <div className="ticket-details">
                            <div>
                                <span className="sss"> К-сть пасажирів </span>
                                <br/>
                                <span className="ticket-details-det"> 1 пасажир </span>
                            </div>
                            <div>
                                <span> Наявність багажу </span>
                                <br/>
                                <span className="ticket-details-det"> Ручна кладка </span>
                            </div>
                            <div>
                                <span> К-сь пересадок </span>
                                <br/>
                                <span className="ticket-details-det"> 1 пересадка </span>
                            </div>
                            <div>
                                <span> Клас </span>
                                <br/>
                                <span className="ticket-details-det"> {there.classOfTicket} </span>
                            </div>
                            <Button> Детальніше </Button>
                        </div>
                    </div>
                    <div className="ticket m-0 justify-content-center p-0">
                        <div>
                            <div className="ticket-header border-up">
                                <IoAirplane className="ticket-plane trans" />
                                {back.company}
                            </div>
                            <hr  />
                        </div>
                        <div className="ticket-direction">
                            <div>
                                <div className="ticket-det">
                                    <span className="ticket-date">{back.departureDay} {back.departureTime}</span>
                                    {back.startPoint}
                                </div>
                                <div className="arrow">
                                    <FaArrowRight/>
                                </div>
                                <div className="ticket-det">
                                    <span className="ticket-date">{back.arrivalDay} {back.arrivalTime}</span>
                                    {back.endPoint}
                                </div>
                            </div>
                            <div className="ticket-price">
                                {back.cost} UAN
                            </div>
                        </div>
                        <div className ="separator">
                            Деталі перевезення
                        </div>
                        <div className="ticket-details">
                            <div>
                                <span className="sss"> К-сть пасажирів </span>
                                <br/>
                                <span className="ticket-details-det"> 1 пасажир </span>
                            </div>
                            <div>
                                <span> Наявність багажу </span>
                                <br/>
                                <span className="ticket-details-det"> Ручна кладка </span>
                            </div>
                            <div>
                                <span> К-сь пересадок </span>
                                <br/>
                                <span className="ticket-details-det"> 1 пересадка </span>
                            </div>
                            <div>
                                <span> Клас </span>
                                <br/>
                                <span className="ticket-details-det"> {back.classOfTicket} </span>
                            </div>
                            <Button onClick={handleShow}> Детальніше </Button>
                        </div>
                        <div className="">
                            <hr  />
                            <div className="ticket-header ticket-price">
                                {there.cost + back.cost} UAN
                                <Button> Забронювати </Button>
                            </div>
                        </div>
                    </div>
                    <TicketModal
                        show={show}
                        setShow={setShow}
                        handleClose = {handleClose}
                        className = "justify-content-center"
                    />
                </div>
            </Col>
        </Row>
    </>
}