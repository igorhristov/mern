import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import { listProducts } from "../redux/actions/productActions";
// import products from "../products";

const HomeScreen = () => {
  // const [products, setProducts] = useState([]);
  // const url = "/api/products";

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);

  const { loading, error, products } = productList;

  useEffect(() => {
    // const getProductsData = async () => {
    //   const res = await fetch(url);
    //   const getData = await res.json();
    //   setProducts(getData)
    // };
    // getProductsData()

    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h1>Најновите Телевизори</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
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
      )}
    </>
  );
};

export default HomeScreen;
