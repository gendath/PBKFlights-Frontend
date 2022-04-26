import React, {Component} from "react";
import Menu from "./Menu";
import {Button, Col, Container, Row} from "react-bootstrap";
import SearchForm from "./SearchForm";
import {withRouter} from "react-router-dom";
import TripTable from "./TripTable";
import OrderTable from "./OrderTable";

class SearchFlights extends Component {
    constructor(props) {
        super(props);
        console.log("SearchFlights state:")
        console.log(this.props.state)
    }

    bookTrip = async ()=>{

        if(this.props.state.isLoggedIn){

            const order = {...this.props.state.trips}
            await this.props.setState({
                order
            })
            console.log(this.props.state.order)
        }else{
            this.props.setState({
                toast:"Please log in to book a flight."

            })
            this.props.history.push("/login")
        }

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
                        {this.props.state.tripFlights.length>0?(
                            <Row id="orderTripField">

                                <Col id="Trip">
                                    <div className="tripInfo">
                                        <Row>
                                            <Col>
                                                <div className="my-2 align-content-center"><h2>Itinerary for Trip from {this.props.state.tripOrigin} to {this.props.state.tripDestination}</h2></div>
                                                <TripTable router={this.props.router} setState={this.props.setState} state={this.props.state}/>
                                                <Button onClick={this.bookTrip} className="float-end btn-custom">Book This Trip!</Button>
                                            </Col>

                                        </Row>
                                    </div>
                                </Col>
                                <Col id="order">
                                    <div className="tripInfo">
                                        <Row>
                                            <Col>
                                                <OrderTable router={this.props.history} setState={this.props.setState} state={this.props.state}/>

                                            </Col>

                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        ):""}

                    </div>
                    </Row>
                </Container>
            </>

        )
    }
}

export default withRouter(SearchFlights)