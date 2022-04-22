import React, {Component} from "react"


class Splash extends Component {
    render() {
        return (
            <div className="jumbotron">
                <img id="logo"  src="images/logo.png" alt="PBK Flights Logo"/>
                <p className="lead">It's not where you're going that matters. It's how you get there.</p>

                    <a className="btn btn-custom btn-lg" href="#" role="button">Book an Amazing Flight!</a>
            </div>
        )
    }}


export default Splash