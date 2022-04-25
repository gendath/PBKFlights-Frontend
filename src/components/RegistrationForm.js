import React, {Component} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import axios from "axios";

class LoginForm extends Component{
    handleSubmit = (event) => {
        event.preventDefault()
        console.log("Handle Submit Click")
        let result = axios({
            method: 'post',
            url: 'http://localhost:8080/signup',
            data: {
                firstName: 'Finn',
                lastName: 'Williams',
                email: 'user@example.com',
                password: "password1"
            }
        })
        console.log(result)
    }
    render(){
        return (
            <Form onSubmit={this.handleSubmit}>
                <Row>
                    <Col>
                        <Form.Group controlId="formFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="First Name" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Last Name" />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="email@example.com" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }
}
export default LoginForm