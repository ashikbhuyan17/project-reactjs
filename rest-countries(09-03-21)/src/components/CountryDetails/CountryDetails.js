import React, { useEffect, useState } from 'react';
import { Card, Button, Row, Col, Container, CardGroup } from 'react-bootstrap';
import { useParams } from 'react-router';

const CountryDetails = () => {
    // read the name
    const { name } = useParams()

    const [country, setCountry] = useState({})
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${name}`
        fetch(url)
            .then(res => res.json())
            .then(data => setCountry(data[0]))
    }, [])
    console.log(country);

    let { population, capital, subregion, flag } = country
    console.log(capital);

    return (
        <div>
            <Container>
                <CardGroup className="mt-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={flag} style={{ width: '18rem' }} />
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text>
                                subregion : {subregion} <br />
                            capital : {capital} <br />
                            population : {subregion}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Container>
        </div>
    );
};

export default CountryDetails;