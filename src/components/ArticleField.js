import React, {Component} from "react"
import {Container, Row} from "react-bootstrap";
import Article from "./Article";

class ArticleField extends Component{
    render(){
        return (
            <Container>
                <Row>
                    <Article></Article>
                    <Article></Article>
                    <Article></Article>
                </Row>
            </Container>
        )
    }
}

export default ArticleField