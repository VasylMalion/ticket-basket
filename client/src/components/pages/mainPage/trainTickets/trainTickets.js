// core
import React, {useEffect, useState} from "react";
import DatePicker from "react-datepicker";
import { useHistory } from "react-router-dom";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";


// icons
import {FiMinusSquare, FiPlusSquare} from "react-icons/fi";

// style
import {Button, Col, Container, Row} from "react-bootstrap";
import "./planeTickets.css";

// actions
import {addParametersOfSearching, fetchedTickets} from "../../../../redux/actions/actions";

const TrainTickets = ({fetchedTickets, addParametersOfSearching}) => {

    const [city1, setCity1] = useState('');
    const [city2, setCity2] = useState('');
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [countOfPassanger, setCountOfPassanger] = useState(1);
    const [classType, setClassType] = useState("all")
    const [classOfTicket, setClassOfTicket] = useState("Будь-який");

    let history = useHistory();

    const decrease = () => {
        if (countOfPassanger === 1) {
            return
        }
        setCountOfPassanger(countOfPassanger - 1)
    }

    const increase = () => {
        if (countOfPassanger === 9) {
            return
        }
        setCountOfPassanger(countOfPassanger + 1)
    }

    const getDate = date => {
        if (!date) {
            return ''
        }
        return `${new Date(date).getFullYear()}-${new Date(date).getMonth() + 1}-${new Date(date).getDate()}`
    }

    const getTickets = () => {

        const payload = {
            startPoint: city1,
            endPoint: city2,
            departureDate: getDate(startDate),
            arrivalDate: getDate(endDate),
            countOfSeats: countOfPassanger,
            classOfTicket
        }
        addParametersOfSearching(payload);
        fetchedTickets(payload);
        history.push("/result")
    }

    const changeCity1 = e => {
        setCity1(e.target.value)
    }

    const changeCity2 = e => {
        setCity2(e.target.value)
    }

    const [visible, setVisible] = useState(false)

    const modalClose = e => {
        if (!e.target.closest("#div") && !e.target.classList.contains("qqq")) {
            setVisible(false)
        }
    }

    window.addEventListener('click', modalClose)

    useEffect(() => {

        return () => {
            window.removeEventListener('click', modalClose)
        }
    }, [])

    const buttons = [
        {filterType: 'all', label: 'Будь-який'},
        {filterType: 'business', label: 'Бізнес'},
        {filterType: 'ekonom', label: 'Економ'}
    ];

    const allButtons = buttons.map( ({filterType, label}) => {

        const activeBtn =  classType === filterType;
        const classBtn = activeBtn ? 'activeBtn' : '';

        return (
            <button
                key = {filterType}
                className = {`${classBtn} btn-class`}
                onClick = {() => {
                        setClassType(filterType)
                        setClassOfTicket(label)
                    }
                }
            > {label} </button>
        );
    });

    return (
        <>
            <Container className="p-0 m-0">
                <Row className="p-1 m-1 align-items-center br-b">
                    <Col className="p-0 col">
                        <fieldset className="inputGroup">
                            <span> З </span>
                            <input
                                className="home-font inputGroup_input_first"
                                value={city1}
                                onChange={changeCity1}
                            />
                        </fieldset>
                    </Col>
                    <Col className="p-0 col" >
                        <fieldset className="inputGroup">
                            <span> До </span>
                            <input
                                className="home-font inputGroup_input"
                                value={city2}
                                onChange={changeCity2}
                            />
                        </fieldset>
                    </Col>
                    <Col className="p-0 col">
                        <fieldset className="inputGroup">
                            <DatePicker
                                selected={startDate}
                                onChange={date => setStartDate(date)}
                                className="home-font p-2 inputGroup_input inp_span"
                                placeholderText="Дата виїзду"
                                aria-label="Default"
                            />
                        </fieldset>
                    </Col>
                    <Col className="p-0 col">
                        <fieldset className="inputGroup">
                            <DatePicker
                                selected={endDate}
                                onChange={date => setEndDate(date)}
                                className="home-font p-2 inputGroup_input inp_span"
                                placeholderText="Дата повернення"
                            >
                                <Button className="btn-block" onClick={() => setEndDate('')}> В одну сторону </Button>
                            </DatePicker>
                        </fieldset>
                    </Col>
                    <Col className="p-0 col count-of-place-cont">
                        <fieldset className="inputGroup">
                            <input value="" className="home-font qqq inputGroup_input_last inp_span" onClick={() => setVisible(true)} placeholder="К-сть пасажирів"/>
                        </fieldset>
                        {visible && <div id = "div" className="count-of-place">
                            <div className="count-flex">
                                <strong className="modal-font"> К-сть місць: </strong>
                                <span >
                        <FiMinusSquare onClick={decrease} className="btn-cr"/>
                                    <span className="count-pas">{countOfPassanger}</span>
                        <FiPlusSquare onClick={increase} className="btn-cr"/>
                    </span>
                            </div>
                            <hr />
                            <div>
                                <strong className="modal-font"> Клас: </strong>
                                <br />
                                {allButtons}
                            </div>
                            <div className="btn-ok">
                                <Button variant="success pr-5 pl-5" onClick={() => setVisible(false)}> OK </Button>
                            </div>
                        </div>}
                    </Col>
                    <Col className="p-0 col ml-2">
                        <Button variant="success" onClick={getTickets}> Пошук </Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

const mapStateToProps = () => {
    return {

    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchedTickets,
    addParametersOfSearching
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TrainTickets)