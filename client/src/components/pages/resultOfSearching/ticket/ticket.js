// core
import React from "react";
import {useHistory} from "react-router-dom";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

// icons
import {FaArrowRight} from "react-icons/fa";
import {Button} from "react-bootstrap";
import {IoAirplane} from "react-icons/io5";

// styles
import "./ticket.css";

// actions
import {addCurrentTicket} from "../../../../redux/actions/actions";

const Ticket = ({addCurrentTicket, startPoint, endPoint, cost, departureDay,
                           departureTime, arrivalTime, arrivalDay,
                           company, classOfTicket, countOfSeats}) => {

    let history = useHistory()

    const booking = () => {
        addCurrentTicket({
            startPoint,
            endPoint,
            cost,
            departureDay,
            departureTime,
            arrivalDay,
            arrivalTime,
            company,
            classOfTicket,
            countOfSeats
        });
        history.push("/booking")
    }

    return <div className="ticket">
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
        <div className="ticket-details">
            <div>
                <span className="countPassanger"> К-сть пасажирів </span>
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
            <Button > Детальніше </Button>
        </div>
        <div className="">
            <hr  />
            <div className="ticket-header ticket-price">
                {cost * +countOfSeats} UAN
                <Button onClick={booking}> Забронювати </Button>
            </div>
        </div>
    </div>
}

const mapStateToProps = () => {}

const mapDispatchToProps = dispatch => bindActionCreators({
    addCurrentTicket: payload => addCurrentTicket(payload)
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Ticket)