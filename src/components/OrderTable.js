import React, {Component} from "react";
import {Button, Card, ListGroup, ListGroupItem, Table} from "react-bootstrap";

class TripTable extends Component {
    render() {
        return (
            <Card className="float-end" style={{width: '30rem'}}>
                <Card.Body>
                    <Card.Title>Shopping Cart</Card.Title>

                </Card.Body> {this.props.state.order.flights.length > 0 ? (
                <>
                    <Card.Text className="mx-3">
                        Great! Once escrow is initiated your flight concierge will be in touch to ensure all your
                            desires are seen to!
                        <p>You are booking the following experience:</p>


                    </Card.Text>
                    <ListGroup className="list-group-flush">

                        <ListGroupItem>{this.props.state.order.flights.length} {this.props.state.order.flights.length > 1 ? "seperate flights complete with 5 star dining and an all-star V.I.P entertainment package"
                            : "exclusive, all-access V.I.P flight."}</ListGroupItem>
                        <ListGroupItem>Top notch entertainment with backstage privileges to local events</ListGroupItem>
                        <ListGroupItem>Our amazing no-limits concierge service</ListGroupItem>
                        <ListGroupItem>All for the insanely low price of
                            ${this.props.state.order.totalPrice}</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Button className="float-end btn-custom">Initiate Escrow</Button>

                    </Card.Body>
                </>
            ) : (
                <Card.Text className="mx-3">
                    <p>Click "Book This Trip" to get started</p>


                </Card.Text>
            )}


            </Card>
        )
    }
}

export default TripTable