import React from 'react';
import FormComponent from '../components/FormComponent';
import { Container, Card} from 'react-bootstrap';

const ContactPage = () => {
    return (
        <Container className="py-5">
            <Card className="bg-dark text-white border-danger mb-5">
                <Card.Header className="bg-danger text-white">
                    <h1>Contact Me</h1>
                </Card.Header>
                <Card.Body>
                    <p>If you have any questions or would like to get in touch, please fill out the form below:</p>
                </Card.Body>
                </Card>
            <FormComponent />
        </Container>
    );
}

export default ContactPage;