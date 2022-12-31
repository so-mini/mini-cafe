import { useCartContext } from "../../context/CartContext";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./CartList.css"

const CartList = ({ prod }) => {

    const { deleteByItem } = useCartContext()

    return (
        <div className="cartImageContainer">
            <Row xs={1} md={2} lg={3} className="g-3">
                <Col>
                    <Card style={{ width: '20rem', margin: '0 30px' }}>
                        <Card.Img className="cardImage" variant="top" src={prod.photo} alt='Image of product.' />
                        <Card.Body>
                            <Card.Title>
                                <h3>{`${prod.name}`}</h3>
                            </Card.Title>
                            <Card.Text>
                                <p className="productCategory">Category - {prod.category}</p>
                                <p>${prod.price} x {prod.qty}</p>
                                <Button onClick={() => deleteByItem(prod.id)} variant="light" style={{ margin: '10px' }}>Delete Item</Button>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default CartList;