import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import Menu from "./Menu";
import {Col, Container, Row} from "react-bootstrap";
import TripTable from "./TripTable";

class BoardingPass extends Component {
    render() {
        return (
            <>

                <Menu state={this.props.setState} setState={this.props.setState} router={this.props.history}/>

                <Container className="my-5">

                    <Row>
                        <Col/>
                        <Col id="boardingPass" className="p-5 pt-1">
                            <h1 id="boardingPassTitle" className="mt-4 mb-0">Boarding Pass</h1>
                            <hr/>
                            <small>Please print this screen for your records</small>
                            <div className="tripInfo my-4">
                                <h2>Your Trip</h2>

                                <div className="flightInfo">
                                    <TripTable router={this.props.router} setState={this.props.setState}
                                               state={this.props.state}/>

                                </div>
                                <hr/>
                                <div className="boardingInfo">
                                    <p>Your exclusive PBK Flights Concierge will contact you within 24 hours to make
                                        final arrangements to ensure you experience is a once in a lifetime event.</p>
                                    <hr/>
                                    <p>Thank you for trusting us to provide you with an amazing Trip!</p>

                                </div>


                            </div>
                        </Col>
                        <Col/>
                    </Row>

                </Container>


            </>

        )
    }
}


export default withRouter(BoardingPass)