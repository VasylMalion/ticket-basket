// core
import React, {useState} from "react";

// components
import PlaneTickets from "../planeTickets/planeTickets";

// styles
import {Container, Tab, Tabs} from "react-bootstrap";
import "./typeOfTicket.css";
import BusTickets from "../busTickets/busTickets";
import TrainTickets from "../trainTickets/trainTickets";
import {useTranslation} from "react-i18next";

export const TypeOfTicket = () => {

    const [key, setKey] = useState('plane');
    const { t } = useTranslation();

    return <Tabs className = "mt-5 pl-3 pt-2 bg-info br-t "
                 activeKey={key}
                 onSelect={(k) => setKey(k)}
    >
        <Tab eventKey="plane" title={<span className="span-font">{t('aviatickets')}</span>} className = "p-1 bg-info br-b">
            <Container fluid className="p-0 m-0">
                <PlaneTickets />
            </Container>
        </Tab>
        <Tab eventKey="train"  title={<span className="span-font">{t('train-tickets')}</span>} className = "p-1 bg-info">
            <Container fluid className="p-0 m-0">
                <TrainTickets />
            </Container>
        </Tab>
        <Tab eventKey="bus" title={<span className="span-font">{t('bus-tickets')}</span>} className = "p-1 bg-info">
            <Container fluid className="p-0 m-0">
                <BusTickets />
            </Container>
        </Tab>
    </Tabs>
}