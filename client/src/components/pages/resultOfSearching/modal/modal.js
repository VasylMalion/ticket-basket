// core
import React from "react";

// icons
import {IoAirplane} from "react-icons/io5";
import {FaArrowRight} from "react-icons/fa";
import {Button, Modal} from "react-bootstrap";

const TicketModal = ({show, handleClose}) => {

    return <Modal show={show} onHide={handleClose} className="width modal-lg">
        <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
                <div className="ticket-header">
                    <IoAirplane className="ticket-plane" />
                    Fly Emirates
                </div>
                <hr  />
            </div>
            <div className="ticket-direction">
                <div>
                    <div className="ticket-det">
                        <span className="ticket-date">11.01.2021 20:20</span>
                        Львів
                    </div>
                    <div className="arrow">
                        <FaArrowRight/>
                    </div>
                    <div className="ticket-det">
                        <span className="ticket-date">11.01.2021 20:20</span>
                        Львів
                    </div>
                </div>
                <div className="ticket-price">
                    340 UAN
                </div>
            </div>
            <div className ="separator">
                Деталі перевезення
            </div>
            <div className="ticket-details">
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
                    <span className="ticket-details-det"> Економ </span>
                </div>
                <Button> Детальніше </Button>
            </div>
            <div className="">
                <hr  />
                <div className="ticket-header ticket-price">
                    660 UAN
                    <Button> Забронювати </Button>
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Save Changes
            </Button>
        </Modal.Footer>
    </Modal>
}

export default TicketModal