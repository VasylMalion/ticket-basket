import React, {useEffect, useState} from "react";
import { useTranslation } from "react-i18next";

import "./main.css";

import {Alert, Col, Container, Dropdown} from "react-bootstrap";
import Ticket from "./ticket/ticket";
import {connect} from "react-redux";
import {DoubleTickets} from "./double-tickets/double-tickets";
import {BiRightArrow} from "react-icons/bi";

function AllTickets({tickets, ticketType, countOfSeats, parametersOfSearching}) {

    const { t } = useTranslation();

    console.log(tickets[0])
    const [allTicketsMap, setAllTicketsMap] = useState(null);

    let allTickets = null;

    useEffect(() => {
        setAllTicketsMap(tickets[0])
    }, [allTickets])


    const filterForTime = () => {
        allTickets = null
    }
    //
    // const filterTicket = arr => {
    //     arr[0].filter(item => item.cost > 700);
    // }
    //
    // console.log(tickets[0]);

    if (ticketType === 'single') {
        if (tickets && tickets[0].length !== 0) {
            console.log(allTicketsMap);
            allTickets = tickets[0].map( item => {
                const {startPoint, endPoint, cost, departureDay, arrivalTime, departureTime, arrivalDay, company, classOfTicket, _id} = item
                return <Container className="flex-column p-2 mb-4">
                    <Ticket
                        key = {_id}
                        startPoint={startPoint}
                        endPoint={endPoint}
                        cost={cost}
                        arrivalTime={arrivalTime}
                        departureDay={departureDay}
                        departureTime={departureTime}
                        arrivalDay={arrivalDay}
                        company={company}
                        classOfTicket={classOfTicket}
                        countOfSeats={countOfSeats}
                    />
                </Container>
            })
        } else {
            allTickets = <Container className="flex-column p-2 mb-2 mt-2">
                <Alert variant="warning" className="text-center rez"> Квитків не знайдено! </Alert>
            </Container>
        }
    } else {
        if (tickets.length !== 0 && tickets[0].length !== 0) {

            allTickets = tickets[0].map( item => {
                return <Container style={{marginLeft: "50vh"}} className="mb-5">
                    <DoubleTickets
                        key = {item._id}
                        there = {item[0]}
                        back = {item[1]}
                    />
                </Container>
            })
        } else {
            allTickets = <Container className="flex-column p-2 mb-2 mt-2">
                <Alert variant="warning" className="text-center rez"> Квитків не знайдено! </Alert>
            </Container>
        }
    }

    console.log("param", parametersOfSearching)

    const {startPoint,
        endPoint,
        departureDate,
        countOfSeats: countOfSeatsUpdate,
        classOfTicket} = parametersOfSearching;

    return <div className="bg-for-main">
        <div className="m-0 pt-5">
            <Container fluid="sm" className="pt-5">
                <Alert variant="secondary">
                    {startPoint} - {endPoint} <BiRightArrow /> Дата: {departureDate} <BiRightArrow /> {countOfSeatsUpdate} пасажир, {classOfTicket}
                </Alert>
                <div className="d-flex justify-content-between">
                    <Dropdown className="d-flex">
                        <Dropdown.Toggle className="filter-width" variant="success" id="dropdown-basic">
                            Сортувати за
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onSelect={filterForTime}>Ціною</Dropdown.Item>
                            <Dropdown.Item >Часом</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle className="filter-width" variant="success" id="dropdown-basic">
                            Наявність багажу
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">З багажем</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Без багажу</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Все</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle className="filter-width" variant="success" id="dropdown-basic">
                            Кількість пересадок
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Без пересадок</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">до 1</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">до 2</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Все</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </Container>
        </div>
        <Container className="flex-column p-2 mb-2 mt-2">
            <Alert variant="success" className="text-center rez"> Результати пошуку </Alert>
        </Container>
            {allTickets}
        </div>
}

const mapStateToProps = state => {

    return {
        tickets: state.tickets.tickets,
        ticketType: state.tickets.ticketType,
        countOfSeats: state.tickets.countOfSeats,
        parametersOfSearching: state.tickets.parametersOfSearching
    }
}

export default connect(mapStateToProps)(AllTickets);
