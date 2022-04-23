import React, {Component} from "react";
import {Button, Col, ListGroup, Row} from "react-bootstrap";

class Flight extends Component{
    render(){
       return <ListGroup.Item>
           <Row>
               <Col>
                   <p>Aircraft : {this.props.info.plane.model}</p>
               </Col>
               <Col>
                   <p>Departing: {this.props.info.origin.name} {this.props.info.departure}</p>
                   <p>Arriving: {this.props.info.destination.name} {this.props.info.arrival}</p>

               </Col>
               <Col>
                   <p>Price: ${this.props.info.price} </p>
               </Col>
               <Col>
                   <Button className="btn-custom">Book a Seat</Button>
               </Col>
           </Row>

       </ListGroup.Item>
    }
}

export default Flight