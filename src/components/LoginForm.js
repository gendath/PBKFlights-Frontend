import React, {Component} from "react";
import {Button, Form, Toast} from "react-bootstrap";

const axios = require('axios')

class LoginForm extends Component{
    email = React.createRef()
    password = React.createRef()

    constructor(props) {
        super(props);
        console.log("LoginForm state:")
        console.log(this.props.state)
    }


    handleSubmit = async (event) => {
        event.preventDefault()
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
        if(!this.props.state.isLoggedIn){
            console.log("not logged in")
            this.props.setState({
                toast:"Invalid Username or Password"
            })

        }
        console.log(this.props.state)

    }
    render(){
        return (
            <>
                {this.props.state.toast.length>0?(<Toast>
                    <Toast.Header>
                        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                        <strong className="me-auto">PBK Flights</strong>
                    </Toast.Header>
                    <Toast.Body>{this.props.state.toast}</Toast.Body>
                </Toast>):""}

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
            </Form></>
        )
    }
}
export default LoginForm