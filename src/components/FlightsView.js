import React, {Component} from "react";
import {Container, ListGroup} from "react-bootstrap";
import Menu from "./Menu";
import {forEach} from "react-bootstrap/ElementChildren";
import Flight from "./Flight";
const axios = require('axios')


class FlightsView extends Component {
    state = {
        flights: [],
        order: []
    }

    componentDidMount() {
        axios.get(`http://localhost:8080/flights`)
            .then(res => {
                const flights = res.data;
                this.setState({ flights });

            }).catch()

    }
    render() {
      return (
          <>

          <Menu/>
              <h2 className="center my-3" id="flightHeader">Flights</h2>
              <Container>
                  <ListGroup className="my-4">
                      {
                          this.state.flights.map(f=><Flight key={f.flightId} info={f}/>)
                      }


                  </ListGroup>

              </Container>

          </>
      )

    }
}
export default FlightsView