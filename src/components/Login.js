import React, {Component} from "react";
import Menu from "./Menu";
import LoginForm from "./LoginForm";
import {Col, Container, Row} from "react-bootstrap";
import {withRouter} from "react-router-dom";


class Login extends Component {
    render() {
        return (
            <>
                <Menu router={this.props.history} setState={this.props.setState} state={this.props.state}/>
                <Container className="my-4">
                    <Row>

                        <Col/>
                        <Col>
                            <LoginForm router={this.props.history} setState={this.props.setState} />
                        </Col>
                        <Col/>
                    </Row>


                </Container>

            </>

        )
    }
}

export default withRouter(Login)