import React from "react"

import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap";

class Menu extends React.Component {
    constructor(props) {
        super(props);

        console.log("Menu Component State:")
        console.log(this.props.state)
    }

    register = (event) => {
        event.preventDefault()
        this.props.router.push({
            pathname: '/register',
            state: {...this.props.state}
        })
    }
    login = (event) => {
        event.preventDefault()
        this.props.router.push({
            pathname: '/login',
            state: {...this.props.state}
        })
    }
    logout = (event) => {
        event.preventDefault()
        this.props.setState({
            userFirstName: "",
            userLastName: "",
            userEmail: "",
            userId: null,
            isLoggedIn: false,
            bookings:[],
        })
        this.props.router.push({
            pathname: '/',
            state: {...this.props.state}
        })
    }
    home = (event) => {
        event.preventDefault()
        this.props.router.push({
            pathname: '/',
            state: {...this.props.state}
        })
    }
    flights = (event) => {
        event.preventDefault()
        this.props.router.push({
            pathname: '/flights',
            state: {...this.props.state}
        })
    }

    render() {
        return (

            <Navbar className="navbar-custom" bg="light" expand="lg">
                <Container>
                    <Navbar.Brand id="brand" href="#" onClick={this.home}>PBK Flights Inc.</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link onClick={this.home}>Home</Nav.Link>
                            <Nav.Link className="float-end" onClick={this.flights}>Book Flight</Nav.Link>

                        </Nav>
                        {this.props.state.isLoggedIn ? <Nav className="nav navbar navbar-right">
                                <Nav.Link>{this.props.state.userFirstName} {this.props.state.userLastName}</Nav.Link>
                                <Nav.Link onClick={this.logout}>Logout</Nav.Link>
                            </Nav>
                            :
                            <Nav className="nav navbar navbar-right"
                                 role="form">
                                <Nav.Link onClick={this.login}>Log In</Nav.Link>
                                <Nav.Link onClick={this.register}>Register</Nav.Link>
                            </Nav>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default Menu
