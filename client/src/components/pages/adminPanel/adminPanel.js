import React from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {useHistory} from "react-router-dom";

const AdminPanel = () => {

    let history = useHistory();

    const addTicket = () => {}
    return <Container className="mt-5 pt-5 d-flex flex-column col-4">
        <Button onClick={() => history.push("/admin-panel/add-plane-ticket")} variant="primary" className="w-100 m-2">
             Plane ticket
        </Button>
        <Button onClick={addTicket} variant="primary" className="w-100 m-2">
            Train ticket
        </Button>
        <Button onClick={addTicket} variant="primary" className="w-100 m-2">
            Bus ticket
        </Button>
    </Container>

}

export {AdminPanel}