import React, {Component} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import axios from "axios";

class LoginForm extends Component{
    firstName = React.createRef()
    lastName = React.createRef()
    email = React.createRef()
    password1 = React.createRef()
    password2 = React.createRef()
    handleSubmit = async (event) => {
        event.preventDefault()
        console.log("Handle Submit Click    " + this.password1.current.value + "    " + this.password2.current.value)
if(this.password1.current.value === this.password2.current.value){
    let result = await axios({
        method: 'post',
        url: 'http://localhost:8080/signup',
        data: {
            firstName: this.firstName.current.value,
            lastName: this.lastName.current.value,
            email: this.email.current.value,
            password: this.password1.current.value
        }

        })
    await this.props.setState({
            userFirstName:this.firstName.current.value,
            userLastName:this.lastName.current.value,
            userEmail:this.email.current.value,
            userId:result.data.userId
            ,isLoggedIn: true
    })
    this.props.router.push("/")
}





    }
    render(){
        return (
            <Form onSubmit={this.handleSubmit}>
                <Row>
                    <Col>
                        <Form.Group controlId="formFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control required ref={this.firstName} type="text" placeholder="First Name" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control required ref={this.lastName} type="text" placeholder="Last Name" />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control required ref={this.email} type="email" placeholder="email@example.com" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required ref={this.password1} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control required  ref={this.password2} type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }
}
export default LoginForm