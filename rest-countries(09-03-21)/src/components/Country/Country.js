import React from 'react';
import { Card, Button, Row, Col, Container, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Country = (props) => {
    const { name, flag, subregion, capital } = props.country
    console.log(props.country);
    return (

        <Container>
            <CardGroup className="mb-4">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={flag} style={{ width: '18rem' }} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            subregion : {subregion} <br />
                            capital : {capital}
                        </Card.Text>
                        <Button variant="dark" className='Light'><Link to={`country/${name}`}>Show Details</Link></Button>
                    </Card.Body>
                </Card>
            </CardGroup>
        </Container>

    );
};

export default Country;