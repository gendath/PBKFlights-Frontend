import React,{Component} from "react"
import Menu from "./Menu"
import Splash from "./Splash";
import {Row} from "react-bootstrap";
import Article from "./Article";
import ArticleField from "./ArticleField";

class App extends Component {
    render(){
        return (
            <>
                <Menu />
                <Splash />
                <ArticleField />
            </>

        )
    }


}
export default App