import React, {createRef, useState} from "react";
import {Button, Col, Container, DropdownButton, FormControl, InputGroup, Modal, Row, Form} from "react-bootstrap";
import DatePicker from "react-datepicker";

import "./busTickets.css";

const BusTickets = () => {

    const [startDate, setStartDate] = useState("");

    return (
        <Container className="p-0 m-0">
            <Row className="p-1 m-1 align-items-center br-b">
                <Col className="p-0 col">
                    <fieldset className="inputGroup">
                        <span> З </span>
                        <input className="inputGroup_input_first"/>
                    </fieldset>
                </Col>
                <Col className="p-0 col" >
                    <fieldset className="inputGroup">
                        <span> До </span>
                        <input className="inputGroup_input"/>
                    </fieldset>
                </Col>
                <Col className="p-0 col">
                    <fieldset className="inputGroup">
                        <DatePicker
                            selected={startDate}
                            onChange={date => setStartDate(date)}
                            className="p-2 inputGroup_input inp_span"
                            placeholderText="Дата виїзду"
                            aria-label="Default"
                        />
                    </fieldset>
                </Col>
                <Col className="p-0 col">
                    <fieldset className="inputGroup">
                        <DatePicker
                            selected={startDate}
                            onChange={date => setStartDate(date)}
                            className="p-2 inputGroup_input inp_span"
                            placeholderText="Дата повернення"
                        />
                    </fieldset>
                </Col>
                <Col className="p-0 col">
                    <fieldset className="inputGroup">
                        <input className="inputGroup_input_last inp_span" placeholder="К-сть пасажирів"/>
                    </fieldset>
                </Col>
                <Col className="p-0 col ml-2">
                    <Button variant="success"> Пошук </Button>
                </Col>
            </Row>
        </Container>
    )
}

export default BusTickets