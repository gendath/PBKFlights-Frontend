import React, {Component} from "react";
import {Button, Form} from "react-bootstrap";

const axios = require('axios')

class LoginForm extends Component{
    email = React.createRef()
    password = React.createRef()

    handleSubmit = async (event) => {
        event.preventDefault()
        console.log(this.email)
        let user;
        try{
            user= await axios.get(`http://localhost:8080/login/${this.email.current.value}/${this.password.current.value}`)
            this.props.setState({
                userFirstName:user.data.firstName,
                userLastName:user.data.lastName,
                userEmail:user.data.email,
                userId:user.data.userId,
                bookings:user.data.bookings,
                isLoggedIn:true})
            this.props.router.push({
                pathname: '/',
                state: {...this.props.state}
            })


        }catch(e){
            console.log(e)
        }


    }
    render(){
        return (
            <Form target={"/"} onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={this.email} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={this.password} type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }
}
export default LoginForm