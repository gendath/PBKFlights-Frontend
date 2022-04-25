import React, {Component} from "react";
import {Container, ListGroup} from "react-bootstrap";
import Menu from "./Menu";
import Flight from "./Flight";
import {withRouter} from "react-router-dom";

const axios = require('axios')


class FlightsList extends Component {
    state={
        flights:[]
    }


    componentDidMount() {
        axios.get(`http://localhost:8080/flights`)
            .then(res => {
                const flights = res.data;
                this.props.setState({ flights });

            }).catch()


    }
    render() {
      return (
          <>

          <Menu router={this.props.history} state={this.props.state} setState={this.props.setState}/>
              <h2 className="center my-3" id="flightHeader">Flights</h2>
              <Container>
                  <ListGroup className="my-4">
                      {
                          this.props.state.flights.map(
                              f=><Flight
                              router={this.props.history}
                              key={f.flightId}
                              index={f.flightId}
                              info={f}
                              state={this.props.state}
                              setState={this.props.setState}/>)
                      }


                  </ListGroup>

              </Container>

          </>
      )

    }
}
export default withRouter(FlightsList)