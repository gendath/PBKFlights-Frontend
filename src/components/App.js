import React,{Component} from "react"
import Menu from "./Menu"
import Splash from "./Splash";
import {Row} from "react-bootstrap";
import Article from "./Article";
import ArticleField from "./ArticleField";
import {withRouter} from "react-router-dom";

class App extends Component {
    constructor(props) {
        super(props);

        console.log("App Component State:")
        console.log(this.props.state)
    }


    render() {
        return (
            <>
                <Menu router={this.props.history} state={this.props.state} setState={this.props.setState}/>
                <Splash router={this.props.history}/>
                <ArticleField />
            </>

        )
    }


}
export default withRouter(App)