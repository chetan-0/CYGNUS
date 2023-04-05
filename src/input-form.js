import React, { useState } from 'react';
import Form from 'react-bootstrap/Forms';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button';
import isRightWing from './sentiment-service'

function InputForm() {
    const [isTory, setTory] = useState(undefined);
    const [articleContent, setContent] = useState(undefined);
    return (
        <Container>
            <Form>
                <Form.Group controlId="articleContent">
                <Row>
                    <Form.Label>Article content</Form.Label>
                    <Form.Control as="textarea" rows="3" value={articleContent} onChange={ value => setContent(value.value)} /> 
                </Row>
                <Row className="input-form__button">
                    <Button variant="success" onClick={() => setTory(isRightWing())}>Detect Right wing propaganda</Button>
                </Row>
                <Row className="input-form__result">
                    {isTory !== undefined &&
                        <div>
                        {isTory ? "Right Wing alert!" : "Normal" }
                        </div>
                    }
                </Row>
                </Form.Group>
            </Form>
        </Container>
    );
}

export default InputForm;
