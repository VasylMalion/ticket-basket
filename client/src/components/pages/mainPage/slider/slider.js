import React from "react";
import {Carousel} from "react-bootstrap";

import "./slider.css";

export const Slider = () => {

    return <Carousel fade >
        <Carousel.Item>
            <a target="_blank" href="https://studway.com.ua/lifehacks-for-travel/">
            <img
                    className="d-block w-100 pict p-0 border-radius-slider"
                    src="https://studway.com.ua/wp-content/uploads/2016/07/podorozh.jpg"
                    alt="First slide"
                />
            <Carousel.Caption>
                <h3>Як правильно подорожувати?</h3>
                <p>7 лайфхаків для подорожі, які ти точно повинен знати.</p>
            </Carousel.Caption>
            </a>

        </Carousel.Item>

        <Carousel.Item>
            <a target="_blank" href="https://studway.com.ua/lifehacks-for-travel/">
            <img
                className="d-block w-100 pict border-radius-slider"
                src="https://etnoxata.com.ua/image/cache/catalog/image/catalog/stat3/08_2016/12_08/40.webp"
                alt="Second slide"
            />
            <Carousel.Caption>
                <h3>Мальовнича Україна</h3>
                <p>15 дивовижних місць України, які неодмінно варто відвідати.</p>
            </Carousel.Caption>
            </a>
        </Carousel.Item>
        <Carousel.Item>
            <a target="_blank" href="https://www.bbc.com/ukrainian/press-review-55248624">
            <img
                className="d-block w-100 pict border-radius-slider"
                src="https://ichef.bbci.co.uk/news/768/cpsprodpb/1638/production/_115988650_tv064689550.jpg"
                alt="Third slide"
            />
            <Carousel.Caption>
                <h3>Куди ми подорожуватимемо?</h3>
                <p>Туризм після пандемії: як коронавірус змінить подорожі.</p>
            </Carousel.Caption>
            </a>
        </Carousel.Item>
    </Carousel>
}