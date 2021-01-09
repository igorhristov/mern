import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import MetaData from "../components/layout/MetaData";

import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/actions/productActions";

import Product from "../components/product/Product";

const HomePage = () => {
  const dispatch = useDispatch();

  const { loading, products, error, productsCount } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <MetaData title={"Best Products"} />
      <h1>latest products</h1>
      <Row>
        {products &&
          products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
      </Row>
    </>
  );
};

export default HomePage;
