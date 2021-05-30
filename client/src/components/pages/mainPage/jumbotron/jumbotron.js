// core
import React from "react";

// styles
import {Button, Jumbotron} from "react-bootstrap";

export const Jumbotr = () => {

    return <Jumbotron className="bg-white">
        <h1>Коронавірус: як подорожувати під час пандемії?</h1>
        <p>
            Чи зможемо ми подорожувати, як раніше, і коли знімуть обмеження, введені через коронавируса?
            Що чекає туристів цього літа, спрогнозував в інтерв'ю DW німецький експерт.
        </p>
        <p>
            <a target="_blank" href="https://www.bbc.com/ukrainian/features-51815199">
                <Button variant="primary">
                    Детальніше
                </Button>
            </a>
        </p>
    </Jumbotron>
}