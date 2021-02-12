import React from 'react';
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const CityWeather = ({cityWeather}) => {
    console.log(JSON.stringify(cityWeather["main"]));
    return (
        <div>
            <Container>
            <Row>
                <Col>Weather</Col>
            </Row>
            <Row>
                <Col>{JSON.stringify(cityWeather["main"])}</Col>
            </Row>
            </Container>
            <br></br>
           
        </div>
    );
};

export default CityWeather;