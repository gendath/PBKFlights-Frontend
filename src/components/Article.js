import React, {Component} from "react"
import {Card, Button, Col} from "react-bootstrap";



const Article = ({image,title,body})=>(
    <Col>
            <Card className="my-5 mx-3">
                <Card.Img className="image img-thumbnail rounded" variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {body}
                    </Card.Text>
                </Card.Body>
            </Card>
    </Col>
        )

export default Article