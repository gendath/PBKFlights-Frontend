import React, {Component} from "react";
import {render} from "react-dom"
import App from "./components/App"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/main.css"
import Router from "./components/Router"

class Index extends Component{
    constructor() {
        super();
        this.state={
            order:{},
            userFirstName:"",
            userLastName:"",
            userEmail:"",
            userId:null,
            bookings:[],
            flights:[],
            isLoggedIn:false
        }
        this.setState = this.setState.bind(this)
        console.log("Master State:")
        console.log(this.state)
    }


    render(){
        return <Router setState={this.setState} state={this.state}/>
    }
}




render(<Index />, document.querySelector("#main"))