import React from "react";
import {Container, FormControl, InputGroup, Row, Col} from "react-bootstrap";
import {connect} from "react-redux";
import "./contactInformation.css";

const Contact = () => {

    return <Container className="p-3 mt-2 bg-white border-info">
        <div className="pb-3"> Контактна інформація </div>
        <div className="contact-fields">
            <div className="mb-3 w-50 pr-2">
                <span className="d-inline-block pb-2 pl-2"> Електронна адреса: </span>
                <br />
                <FormControl
                    placeholder="Email"
                    aria-label="Email"
                    aria-describedby="basic-addon1"
                />
            </div>
            <div className="mb-3 w-50 pl-2">
                <span className="d-inline-block pb-2 pl-2"> Телефон: </span>
                <br />
                <FormControl
                    placeholder="Phone"
                    aria-label="Phone"
                    aria-describedby="basic-addon1"
                />
            </div>
        </div>
    </Container>
}

export default connect()(Contact)