import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <Col key={product._id} sm={12} md={6} lg={3} className="my-3">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.images[0].url} />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{product.name}</Card.Title>
          <Card.Text className="ratings mt-auto">
            <div className="rating-outer">
              <div
                className="rating-inner"
                style={{ width: `${(product.ratings / 5) * 100}%` }}
              ></div>
            </div>
            <span id="no_of_reviews">{product.numOfReviews} Reviews</span>
          </Card.Text>
          <Card.Text>{product.price} den</Card.Text>
          <Link to={`/product/${product._id}`} id="view_btn" variant="primary">
            View Details
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
