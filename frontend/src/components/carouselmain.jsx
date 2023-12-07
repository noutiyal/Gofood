import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Carouselmain() {
    return (
        <>
            <Row>
                <Col className="p-0">
                    <div className="position-relative">
                        <Carousel className="P-0 mian_crorusel">
                            <Carousel.Item>
                                <div>
                                    <img
                                        className="q"
                                        src="/img/club-sandwich-3538455_1280.jpg"
                                        alt=""
                                    />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="q"
                                    src="/img/snack-2635035_1280 (1).jpg"
                                    alt=""
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="q" src="/img/pizza-329523_1280.jpg" alt="" />
                            </Carousel.Item>
                        </Carousel>
                        <div className="rahul_bisht">
                            <input
                                className="form-control "
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <Button type="search" variant="outline-success">
                                Search
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default Carouselmain;
