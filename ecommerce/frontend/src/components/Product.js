import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

const Product = ({ product }) => (
    <Card className=" p-3 rounded h-100">
      <Link to={`/product/${product._id}`}>
        <Card.Img fluid src={product.image} varient="top" />
      </Link>
      <Card.Title className="text-center mt-auto">
        <Link to={`/product/${product._id}`}>
          <strong>{product.name}</strong>
        </Link>
      </Card.Title>
      {/* <Card.Body className="">
        
      </Card.Body> */}
      <Card.Footer className="bg-light text-center pb-0 mb-0">
      <Card.Text as="div" className="mt-auto">
          <Rating
            value={product.rating}
            text={`${product.numReviews} мислења`}
          />
        </Card.Text>

        <Card.Text className="mt-auto" as="h3">
          {product.price} ден
        </Card.Text>
      </Card.Footer>
    </Card>
  );


export default Product;
