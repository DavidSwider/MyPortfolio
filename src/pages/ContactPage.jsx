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
                    <p><strong>Phone</strong> (860)-378-5676</p>
                    <p><strong>Email:</strong> Davidswider6@gmail.com</p>
                </Card.Body>
                </Card>
            <FormComponent />
        </Container>
    );
}

export default ContactPage;