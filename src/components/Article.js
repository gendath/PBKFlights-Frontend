import React, {Component} from "react"
import {Card, Button} from "react-bootstrap";


class Article extends Component {

    render(){
        return (
            <Card className="my-5">
                <Card.Img className="image img-thumbnail rounded" variant="top" src="images/luxury.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        )
    }
}
export default Article