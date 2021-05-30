import React, {useState} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";

const AddPlaneTicket = () => {

    const [startPoint, setStartPoint] = useState('');
    const [endPoint, setEndPoint] = useState('');
    const [cost, setCost] = useState("");
    const [departureDay, setDepartureDay] = useState("");
    const [arrivalDay, setArrivalDay] = useState("");
    const [departureTime, setDepartureTime] = useState("");
    const [arrivalTime, setArrivalTime] = useState("");
    const [company, setCompany] = useState("");
    const [countOfSeats, setCountOfSeats] = useState(0);
    const [classOfTicket, setClassOfTicket] = useState("Будь-який");

    return <Container className="mt-5">
        <Row>
            <Col className="col-12 mt-5">
                <h1 className="text-center pb-2"> Додати квиток </h1>
            </Col>
        </Row>
        <Form className="offset-lg-2 col-lg-8 pb-4 col-8 offset-md-3 col-md-6 offset-sm-2 col-sm-8 col-12">
            <Row>
                <Col>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label> Місце вильоту: </Form.Label>
                        <Form.Control
                            value={startPoint}
                            onChange={e => setStartPoint(e.target.value)}
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label> Місце прильоту: </Form.Label>
                        <Form.Control
                            value={endPoint}
                            onChange={e => setEndPoint(e.target.value)}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label> Дата вильоту: </Form.Label>
                        <Form.Control
                            value={departureDay}
                            onChange={e => setDepartureDay(e.target.value)}
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label> Дата прильоту: </Form.Label>
                        <Form.Control
                            value={arrivalDay}
                            onChange={e => setArrivalDay(e.target.value)}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label> Час вильоту: </Form.Label>
                        <Form.Control
                            value={departureTime}
                            onChange={e => setDepartureTime(e.target.value)}
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label> Час прильоту: </Form.Label>
                        <Form.Control
                            value={arrivalTime}
                            onChange={e => setArrivalTime(e.target.value)}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label> Вартість: </Form.Label>
                        <Form.Control
                            value={cost}
                            onChange={e => setCost(e.target.value)}
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label> Кількість міць: </Form.Label>
                        <Form.Control
                            value={countOfSeats}
                            onChange={e => setCountOfSeats(e.target.value)}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label> Компанія: </Form.Label>
                        <Form.Control
                            value={company}
                            onChange={e => setCompany(e.target.value)}
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label> Тип квитка: </Form.Label>
                        <Form.Control
                            value={classOfTicket}
                            onChange={e => setClassOfTicket(e.target.value)}
                        />
                    </Form.Group>
                </Col>
            </Row>

            <Button variant="primary" className="w-100">
                Додати квиток
            </Button>
        </Form>
    </Container>
}

export default AddPlaneTicket