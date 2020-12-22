import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import Rating from "../components/Rating";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { actionListSingleProduct } from "../redux/actions/productActions";

const ProductPage = ({ history, match }) => {
  const [qty, setQty] = useState(0);

  const dispatch = useDispatch();

  const singleProduct = useSelector((state) => state.singleProduct);
  const { loading, error, product } = singleProduct;

  useEffect(() => {
    dispatch(actionListSingleProduct(match.params.id));
  }, [dispatch, match]);

  const addToCardHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

  return (
    <>
      <Link className="btn btn-outline-secondary my-3" to="/">
        Назад
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>

          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} мислења`}
                />
              </ListGroup.Item>
              <ListGroup.Item>Цена: {product.price} ден</ListGroup.Item>
              <ListGroup.Item>Опис: {product.description}</ListGroup.Item>
            </ListGroup>
          </Col>

          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Цена:</Col>
                    <Col>
                      <strong>{product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Залиха:</Col>
                    <Col>
                      {product.countInStock > 0 ? "Има" : "Нема Залиха"}
                    </Col>
                  </Row>
                </ListGroup.Item>

                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>Количина</Col>

                      <Col>
                        <Form.Control
                          as="select"
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}

                <ListGroup.Item>
                  <Row>
                    <Button
                      disabled={product.countInStock === 0}
                      className="btn-block"
                      type="button"
                      onClick={addToCardHandler}
                    >
                      Додади во кошничка
                    </Button>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductPage;
