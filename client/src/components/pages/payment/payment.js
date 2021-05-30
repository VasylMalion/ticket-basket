import React from "react";
import {Button, Container} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {addMyTicket, payTickets} from "../../../redux/actions/actions";
import axios from "axios";

const Payment = ({payTickets, currentTicket, countOfSeats, user, addMyTicket, isAuth}) => {

    let history = useHistory();

    const payment = async () => {
        alert("Квитки оплачено!");

        isAuth && await axios.post('http://localhost:3051/api/user/update-tickets', {
            id: user._id,
            ticket: currentTicket,
        })

        payTickets({
            ticket: currentTicket,
            count: countOfSeats
        })

        addMyTicket(currentTicket);
        history.push('/');
    }

    return <Container className="d-flex justify-content-center mt-5 flex-column w-25 pt-5">
        <img alt="payment" src="https://thumb.tildacdn.com/tild3062-3532-4864-b932-663433386562/-/resize/744x/-/format/webp/logo-liq.png"/>
        <Button onClick={payment} className="mt-5"> Оплатити </Button>
    </Container>
}

const mapStateToProps = state => {
    return {
        user: state.user.user,
        currentTicket: state.tickets.currentTicket,
        countOfSeats: state.tickets.countOfSeats,
        tickets: state.user.tickets,
        isAuth: state.user.isAuth
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    payTickets,
    addMyTicket
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Payment)