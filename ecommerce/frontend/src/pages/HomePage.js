import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
// import products from "../products";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const url = "/api/products";

  useEffect(() => {
    const getProductsData = async () => {
      const res = await fetch(url);
      const getData = await res.json();
      setProducts(getData)
    };

    getProductsData()
  }, []);

  return (
    <>
      <Row className="d-flex align-items-stretch">
        {products &&
          products.map((product) => (
            <Col
              className="my-3"
              key={product._id}
              sm={12}
              md={6}
              lg={4}
              xl={3}
            >
              <Product product={product} />
            </Col>
          ))}
      </Row>
    </>
  );
};

export default HomeScreen;
