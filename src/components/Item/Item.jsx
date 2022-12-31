import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { Link } from 'react-router-dom';
import { memo } from 'react'
import './Item.css'


const Item = memo(
    ({ product }) => {
        return (
            <div className="singleCard">
                <Row xs={1} md={2} lg={3} className="g-3">  
                        <Col>
                            <Card style={{ width: '20rem', margin: '30px' }}>
                                <Card.Img className="cardImage" variant="top" src={product.photo} alt='Image of product.' />
                                <Card.Body>
                                    <Card.Title>
                                        <h3>{`${product.name}`}</h3>
                                    </Card.Title>
                                    <Card.Text>
                                        <p className="productCategory">Category - {product.category}</p>
                                        <p>${product.price}</p>
                                        <p><Link to={`/details/${product.id}`} className="details-link">Details</Link></p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                </Row>
            </div>
        )
    }
)

export default Item 

