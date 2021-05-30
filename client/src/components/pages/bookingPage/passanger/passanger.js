import React from "react";
import {Container, FormControl, Row, Col} from "react-bootstrap";
import "./passanger.css";

const Passanger = ({number}) => {

    return <Container className="p-3 mt-2 bg-white border-info">
        <div className="pb-3"> Пасажир №{number} </div>
        <Row>
            <Col>
                <div className="mb-3 w-100 ">
                    <span className="d-inline-block pb-2 pl-2"> Ім'я </span>
                    <br />
                    <FormControl
                        placeholder="Name"
                        aria-label="Name"
                        aria-describedby="basic-addon1"
                    />
                </div>
                <div className="contact-fields">
                    <div className="mb-3 w-50 pr-2">
                        <span className="d-inline-block pb-2 pl-2"> Громадянство </span>
                        <br />
                        <FormControl
                            placeholder="Nationality"
                            aria-label="Nationality"
                            aria-describedby="basic-addon1"
                        />
                    </div>
                    <div className="mb-3 w-50 pl-2">
                        <span className="d-inline-block pb-2 pl-2"> Стать </span>
                        <br />
                        <FormControl
                            placeholder="Sex"
                            aria-label="Sex"
                            aria-describedby="basic-addon1"
                        />
                    </div>
                </div>
            </Col>
            <Col>
                <div className="mb-3 w-100">
                    <span className="d-inline-block pb-2 pl-2"> Прізвище </span>
                    <br />
                    <FormControl
                        placeholder="Surname"
                        aria-label="Surname"
                        aria-describedby="basic-addon1"
                    />
                </div>
                <span className="d-inline-block pb-2 pl-2"> Дата народження </span>
                <br />
                <div className="contact-fields">
                    <div className="mb-3 w-50 pr-2">
                        <FormControl
                            placeholder="DD"
                            aria-label="DD"
                            aria-describedby="basic-addon1"
                        />
                    </div>
                    <div className="mb-3 w-50 pl-2">
                        <FormControl
                            placeholder="MM"
                            aria-label="MM"
                            aria-describedby="basic-addon1"
                        />
                    </div>
                    <div className="mb-3 w-50 pl-2">
                        <FormControl
                            placeholder="YYYY"
                            aria-label="YYYY"
                            aria-describedby="basic-addon1"
                        />
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
}

export default Passanger