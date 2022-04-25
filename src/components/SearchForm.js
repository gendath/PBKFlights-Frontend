import React, {Component} from "react";
import {Button, Col, Dropdown, Row} from "react-bootstrap";
import axios from "axios";


class SearchForm extends Component {
    constructor(props) {
        super(props);

        console.log("SearchForm props:")
        console.log(this.props)
    }

    async componentDidMount() {

        try{
            let hubs = await axios.get("http://localhost:8080/hubs")
            this.props.setState({hubs:hubs.data})
        }catch(e){
            console.log(e)
        }
        console.log(this.props.state.hubs)



    }

    origin = React.createRef()
    destination = React.createRef()

    searchHandler = async()=>{
        console.log(`http://localhost:8080/test/routing/${this.origin.current.value}/${this.destination.current.value}`)

        let trip = await axios.get(`http://localhost:8080/test/routing/${this.origin.current.value}/${this.destination.current.value}`)
        await this.props.setState({
            trips: {...trip.data},
            tripOrigin: this.origin.current.value,
            tripDestination : this.destination.current.value,
            tripFlights: trip.data.flights
        })

        console.log(this.props.state.trips)
        console.log(this.props.state.tripOrigin)
        console.log(this.props.state.trips)
        console.log(this.props.state.trips)

    }

    render() {
        return (
            <>
                <div id="searchField">
                    <Row className="searchFormField">

                        <Col>
                            <div> <label className="mr-1">Flying From: -->  </label>
                                <select ref={this.origin} defaultValue={this.props.state.hubs[0]} className="bootstrap-select">
                                    {this.props.state.hubs.map(h=><option index={"origin" + h.faacode} key={"origin" + h.faacode} value={h.faacode}>{h.name}</option>)}

                                </select>
                            </div>
                        </Col>
                        <Col>
                            <div> <label className="mr-1">Flying To: -->  </label>
                                <select ref={this.destination} defaultValue={this.props.state.hubs[0]} className="bootstrap-select">
                                    {this.props.state.hubs.map(h=><option index= {"destination"+h.faacode} key={"destination" + h.faacode} value={h.faacode}>{h.name}</option>)}

                                </select>
                            </div>
                        </Col>
                        <Col>
                            <Button onClick={this.searchHandler} className="btn-custom">
                                Search For Your Amazing Flight Event!

                            </Button>
                        </Col>


                    </Row></div>
            </>
        )
    }
}

export default SearchForm