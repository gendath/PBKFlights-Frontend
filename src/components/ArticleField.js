import React, {Component} from "react"
import {Container, Row} from "react-bootstrap";
import Article from "./Article";

const ArticleField =props =>(
            <Container>
                <Row>
                    <Article
                        image="images/luxury.jpg"
                        title = "Luxury Matters"
                        body="Adorned with Himalayan Gold Leaf and trimmed with inlaid Sepilla Mahogany,
                        our expertly designed interiors exude comfort and refinement for a superb flying
                        experience of which you will find no equal. "
                    />
                    <Article
                        image="images/technology.jpg"
                        title = "Technology Matters"
                        body="Avoid the lumbering, oafish flights of larger  out-of-date aircraft! Our modern,
                        high-tech jets offer all the latest amenities to make your flight comfortable, safe and fast. "
                    />
                    <Article
                        image="images/dining.jpg"
                        title = "Dining Matters"
                        body="No peanuts and tiny bottle of cheap liquor here! Enjoy an exquisite in-flight meal prepared
                        by a Michelin 5-star chef accompanied by wine chosen by our in house sommelier."
                    />
                </Row>
            </Container>
        )


export default ArticleField