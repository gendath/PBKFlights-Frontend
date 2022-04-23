import React, {Component} from "react"


class Splash extends Component {

    render() {
        return (
            <div className="jumbotron">
                <img id="logo" className="my-4" src="images/logo.png" alt=""/>
                <p className="lead my-4">It's not where you're going that matters. It's how you get there.</p>
                    <a
                        onClick={this.flightsButtonClick}
                        className="btn btn-custom btn-lg" role="button">Learn more</a>
            </div>
        )
    }

    flightsButtonClick =(event)=> {
        event.preventDefault()
        this.props.router.push("/flights")
    }
}


export default Splash