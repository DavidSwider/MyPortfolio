import React from 'react';
import AboutmeComponent from '../components/AboutmeComponent';
import { Container, Card } from 'react-bootstrap';

const AboutmePage = () => {
    return (
        <Container className="py-5">
            <Card className="bg-dark text-white border-danger mb-5">
                <Card.Header className="bg-danger text-white">
                    <h1>About Me</h1>
                </Card.Header>
                <Card.Body>
                    <p>Here you can find out more about me and my background.</p>
                </Card.Body>
            </Card>
            <Card>
            <AboutmeComponent />
            </Card>
        </Container>
    );
};

export default AboutmePage;