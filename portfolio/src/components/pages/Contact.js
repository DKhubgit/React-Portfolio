import React , { useState }from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contact() {

    const [validated, setValidated] = useState(false);

    function handleSubmit(event) {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        setValidated(true);
    }

    return (
    <div>
        <h1 className='text-center mt-5'>Contact Me!</h1>
        <div className='col-9 col-lg-4 mx-auto mt-5'>
            <Form validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Full Name:</Form.Label>
                    <Form.Control type="text" required />
                    <Form.Control.Feedback type="invalid">
                        *Required Field
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" required/>
                    <Form.Control.Feedback type="invalid">
                        *Required Field
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Message:</Form.Label>
                    <Form.Control as="textarea" rows={3} required/>
                    <Form.Control.Feedback type="invalid">
                        *Required Field
                    </Form.Control.Feedback>
                </Form.Group>
                <Button type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    </div>
    )
}

export default Contact;