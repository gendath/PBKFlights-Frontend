import {BrowserRouter, Route, Switch} from "react-router-dom";
import App from "./App";
import Menu from "./Menu";
import FlightsList from "./FlightsList";
import Login from "./Login";
import Register from "./Register";
import SearchFlights from "./SearchFlights";
import React,{Component} from "react";


class Router extends Component {
    constructor(props) {
        super(props);


        console.log("Router State:")
        console.log(this.props.state)
    }


    render() {
        return (
            <BrowserRouter setState={this.props.setState}>
                <Switch setState={this.props.setState}>
                    <Route exact path="/" render={()=><App state={this.props.state} setState={this.props.setState}/>} />
                    <Route exact path="/search" render={()=><SearchFlights state={this.props.state} setState={this.props.setState}/>} />
                    <Route exact path="/flights" render={()=><FlightsList state={this.props.state} setState={this.props.setState}/>} />
                    <Route exact path="/register" render={()=><Register state={this.props.state} setState={this.props.setState}/>} />
                    <Route exact path="/login" render={()=><Login state={this.props.state} setState={this.props.setState}/>} />
                    <Route exact path="/search" component={SearchFlights} state={this.props.state} setState={this.props.setState} />
                    <Route exact path="/search/:origin/:destination" component={SearchFlights} state={this.props.state} setState={this.props.setState} />
                    <Route component={App} state={this.props.state} setState={this.props.setState} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router