import React, { Component } from 'react'
import {
    Card, CardImg, CardBody, CardTitle,
    CardSubtitle, CardText, Button, Row, Col, CardGroup, CardColumns
} from 'reactstrap';
import dates from '../data';


export default class Procducts extends Component {
    render() {
        return (
            <div>
                <h2>สินค้าทั้งหมด</h2>
               <Row>
                    {
                        dates.products.map(pd =>
                            <Col sm ="3">
                            <Card>
                                <CardImg src={pd.image} />
                                <CardBody>
                                    <CardTitle>{pd.name}</CardTitle>
                                    <CardSubtitle>ราคา{pd.price}บาท</CardSubtitle>
                                    <CardSubtitle>{pd.numStock}</CardSubtitle>
                                    <CardText>รายละเอียดสินค้า</CardText>
                                    <Button color="warning">เพิ่มสินค้า</Button>
                                </CardBody>
                            </Card>

                            </Col>
                        )
                    }
                </Row>
            </div>
        )
    }
}
