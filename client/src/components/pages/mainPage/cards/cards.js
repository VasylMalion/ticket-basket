// core
import React from "react";

// styles
import {Button, Card, Col, Row} from "react-bootstrap";
import "./cards.css";
import {useTranslation} from "react-i18next";

export const Cards = () => {

    const { t, i18n } = useTranslation();

    return <Row className="padding-card">
        <Col className="col-xl-4 col-lg-6 mb-xl-0 mb-4 d-inline-flex justify-content-center">
            <Card className="cards">
                <Card.Img className="card-image" variant="top" src="https://hotel-edem.lviv.ua/wp-content/uploads/2019/03/golovna.jpg" />
                <Card.Body>
                    <Card.Title> {t('title1')} </Card.Title>
                    <Card.Text>
                        {t('desc1')}
                    </Card.Text>
                    <Button target="_blank" variant="primary" href="https://www.uvidpustku.com/podorozh-na-madeira-lisabon-z-kyiva-za-e156/"> Детальніше </Button>
                </Card.Body>
            </Card>
        </Col>
        <Col className="col-xl-4 col-lg-6 mb-xl-0 mb-4 d-inline-flex justify-content-center">
            <Card className="cards">
                <Card.Img className="card-image" variant="top" src="http://euroways.com.ua/wp-content/uploads/2017/06/Lisboa2.jpg" />
                <Card.Body>
                    <Card.Title> {t('title2')}  </Card.Title>
                    <Card.Text>
                        {t('desc2')}
                    </Card.Text>
                    <Button target="_blank" variant="primary" href="https://tourbaza.com/tour/tayemnici-lvova/"> Детальніше </Button>
                </Card.Body>
            </Card>
        </Col>
        <Col className="col-xl-4 col-md-12 d-inline-flex justify-content-center">
            <Card className="cards">
                <Card.Img className="card-image" variant="top" src="https://www.visitbritain.com/sites/default/files/styles/wysiwyg_image/public/consumer/vb34156199_1100.jpg?itok=8azk9zgC" />
                <Card.Body>
                    <Card.Title> {t('title3')}  </Card.Title>
                    <Card.Text>
                        {t('desc3')}
                    </Card.Text>
                    <Button target="_blank" variant="primary" href="https://triphearts.com/ua/united-kingdom/london"> Детальніше </Button>
                </Card.Body>
            </Card>
        </Col>
    </Row>
}