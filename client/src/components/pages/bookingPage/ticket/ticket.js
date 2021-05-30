import React from "react";

import {FaArrowRight} from "react-icons/fa";
import {Alert, Button} from "react-bootstrap";
import {IoAirplane} from "react-icons/io5";

import "../ticket/ticket.css";

export const Ticket = ({startPoint, endPoint, cost, departureDay, departureTime, arrivalTime, arrivalDay, company, classOfTicket}) => {

    return <div className="bg-white ticket" style={{width: "100%"}}>
        <div>
            <div className="ticket-header">
                <IoAirplane className="ticket-plane" />
                {company}
            </div>
            <hr  />
        </div>
        <div className="ticket-direction">
            <div>
                <div className="ticket-det">
                    <span className="ticket-date">{departureDay} {departureTime}</span>
                    {startPoint}
                </div>
                <div className="arrow">
                    <FaArrowRight/>
                </div>
                <div className="ticket-det">
                    <span className="ticket-date">{arrivalDay} {arrivalTime}</span>
                    {endPoint}
                </div>
            </div>
            <div className="ticket-price">
                {cost} UAN
            </div>
        </div>
        <div className ="separator">
            Деталі перевезення
        </div>
        <div className="ticket-details p-4">
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
                <span className="ticket-details-det"> {classOfTicket} </span>
            </div>
        </div>
        {/*<div className="">*/}
        {/*    <hr  />*/}
        {/*    <div className="ticket-header ticket-price">*/}
        {/*        660 UAN*/}
        {/*        <Button> Забронювати </Button>*/}
        {/*    </div>*/}
        {/*</div>*/}
    </div>
}