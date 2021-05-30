// core
import React from "react";

// styles
import {ListGroup} from "react-bootstrap";

export const ListGroupCustom = () => {

    return <>
        <h3> Топ 6 авіакомпаній </h3>
        <ListGroup >
            <ListGroup.Item> Turkish Airlines </ListGroup.Item>
            <ListGroup.Item> Air Astana </ListGroup.Item>
            <ListGroup.Item> Emirates </ListGroup.Item>
            <ListGroup.Item> Copa Airlines </ListGroup.Item>
            <ListGroup.Item> Norwegian Airline </ListGroup.Item>
            <ListGroup.Item> Qatar Airways </ListGroup.Item>
        </ListGroup>
    </>
}