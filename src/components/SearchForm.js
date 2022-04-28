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





    }

    origin = React.createRef()
    destination = React.createRef()

    searchHandler = async()=>{

        if(this.origin.current.value !== this.destination.current.value){
            console.log(`http://localhost:8080/test/routing/${this.origin.current.value}/${this.destination.current.value}`)

            let trip = await axios.get(`http://localhost:8080/test/routing/${this.origin.current.value}/${this.destination.current.value}`)
            await this.props.setState({
                trips: {...trip.data},
                tripOrigin: this.origin.current.value,
                tripDestination : this.destination.current.value,
                tripFlights: trip.data.flights
            })
            this.props.setState({
                toast:""
            })

        }else{

            this.props.setState({
                toast:"Origin and Destination cannot be the same.",
                tripFlights: [],
                order:{
                    flights:[]
                }
            })
        }




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
                                    {this.props.state.hubs.map(h=> <option index={"destination" + h.faacode} key={"destination" + h.faacode} value={h.faacode}>{h.name}</option>)}

                                </select>
                            </div>
                        </Col>
                        <Col>
                            <Button onClick={this.searchHandler} className="btn-custom">
                                Search For Your Amazing Flight Event!

                            </Button>
                        </Col>

                        {this.props.state.toast.length>0?<small>{this.props.state.toast}</small>:""}
                    </Row>

                </div>
            </>
        )
    }
}

export default SearchForm