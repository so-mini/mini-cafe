import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import './Item.css'

const Item = ({ product }) => {
    return (
        <div>
            <Row xs={1} md={2} lg={3} className="g-3">
                {Array.from({ length: 1 }).map((_, idx) => (
                    <Col>
                        <Card style={{ width: '18rem', margin: '30px' }}>
                            <Card.Img variant="top" src={product.photo} alt='Image of product.' />
                            <Card.Body>
                                <Card.Title>{`${product.category} - ${product.name}`}</Card.Title>
                                <Card.Text>
                                    {product.price}
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Link to={`/details/${product.id}`} className="details-link">Details</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Item; 



