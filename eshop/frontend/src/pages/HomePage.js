import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import MetaData from "../components/layout/MetaData";
import Product from "../components/product/Product";
import Loader from "../components/layout/Loader";

import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/actions/productActions";
import { useAlert } from "react-alert";

import "./homepage.css";

const HomePage = () => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const { loading, products, error, productsCount } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (error) {
      return alert.error(error);
    }

    dispatch(getProducts());
  }, [dispatch, alert, error]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={"Best Products"} />
          <h1 id="products_heading">latest products</h1>
          <section id="products">
            <Row>
              {products &&
                products.map((product) => (
                  <Product key={product._id} product={product} />
                ))}
            </Row>
          </section>
        </>
      )}
    </>
  );
};

export default HomePage;
