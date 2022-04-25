import React, {Component} from "react";
import Menu from "./Menu";
import {Col, Container, Row} from "react-bootstrap";
import SearchForm from "./SearchForm";
import {withRouter} from "react-router-dom";

class SearchFlights extends Component {
    constructor(props) {
        super(props);
        console.log("SearchFlights state:")
        console.log(this.props.state)
    }


    render(){
        return (
            <>
                <Menu router = {this.props.history} setState={this.props.setState} state={this.props.state} />
                <Container>
                    <Row>
                    <div className="my-1">
                        <SearchForm router = {this.props.history} setState={this.props.setState} state={this.props.state}  />
                        <hr />
                        <Row id="orderTripField">

                            <Col id="Trip">
                                <div className="tipInfo">
                                    <Row>
                                        <Col>
                                            <p>{this.props.state.tripFlights.length>0?<span>From: </span>:""}{this.props.state.tripOrigin}</p>
                                            <ul>
                                                <li>
                                                    {this.props.state.tripFlights.map(f=><li>{f.origin.name} -- > {f.destination.name}</li>)}
                                                </li>
                                            </ul>
                                            <p>{this.props.state.tripFlights.length>0?<span>To: </span>:""}{this.props.state.tripDestination}</p>
                                        </Col>

                                    </Row>
                                </div>
                            </Col>
                            <Col id="order">
                                <p>Order Field</p>
                            </Col>
                        </Row>

                    </div>
                    </Row>
                </Container>
            </>

        )
    }
}

export default withRouter(SearchFlights)