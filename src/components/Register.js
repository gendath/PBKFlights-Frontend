import React, {Component} from "react";
import Menu from "./Menu";
import LoginForm from "./LoginForm";
import {Col, Container, Row} from "react-bootstrap";
import RegistrationForm from "./RegistrationForm";

class Login extends Component {
    render() {
        return (
            <>
                <Menu router={this.props.history} setState={this.props.setState} />
                <Container className="my-4">
                    <Row>

                        <Col/>
                        <Col>
                            <RegistrationForm router={this.props.history} setState={this.props.setState} />
                        </Col>
                        <Col/>
                    </Row>


                </Container>

            </>

        )
    }
}

export default Login