// core
import React from "react";

// components
import {UnderHeaderInfo} from "./underHeaderInfo/underHeaderInfo";
import {TypeOfTicket} from "./typeOfTicket/typeOfTicket";
import {Cards} from "./cards/cards";
import {Slider} from "./slider/slider";
import {ListGroupCustom} from "./listGroup/listGroup";
import {Jumbotr} from "./jumbotron/jumbotron";

// styles
import {Col, Container, Row} from "react-bootstrap";
import "./home.css";

const Home = () => {
    return <>
        <div className="bg-main m-0 p-0">
            <Container fluid="sm">
                <UnderHeaderInfo />
                <TypeOfTicket />
            </Container>
        </div>
        <Container className="pt-4">
            <Cards />
        </Container>
        <Container className="slider-padding-top">
            <Row className="m-0 p-0">
                <Col className="col-12 col-lg-7 pb-lg-0 pb-4 slider-padding p-0">
                    <Slider />
                </Col>
                <Col className="col p-4 bg-white">
                    <ListGroupCustom />
                </Col>
            </Row>
        </Container>
        <Container className="jumbotron-padding">
            <Jumbotr />
        </Container>
    </>
}

export default Home