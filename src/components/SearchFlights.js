import React, {Component} from "react";
import Menu from "./Menu";
import {Container} from "react-bootstrap";

class SearchFlights extends Component {


    render(){
        return (
            <>
                <Menu router = {this.props.history} />
                <Container>
                    <p>Coming Soon</p>
                </Container>
            </>

        )
    }
}

export default SearchFlights