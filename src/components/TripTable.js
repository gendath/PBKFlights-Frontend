import React, {Component} from "react";
import {Table} from "react-bootstrap";

class TripTable extends Component{
    render(){
        return (
            <Table striped bordered hover size="sm">
                <thead>
                <tr>
                    <th>Flight #</th>
                    <th>Origin</th>
                    <th>Destination</th>
                    <th>Flight time</th>
                    <th>Cost</th>
                </tr>
                </thead>
                <tbody>
                {this.props.state.tripFlights.map(f=>(
                    <tr>
                        <td>{f.flightId}</td>
                        <td>{f.origin.name}</td>
                        <td>{f.destination.name}</td>
                        <td>{f.tripTime} hours</td>
                        <td>${f.price}</td>
                    </tr>
                ))}

                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>{this.props.state.trips.totalTravelTime} hours</td>
                    <td>${this.props.state.trips.totalPrice}</td>
                </tr>


                </tbody>
            </Table>
        )
    }
}

export default TripTable