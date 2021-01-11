import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import MetaData from "../components/layout/MetaData";
import Product from "../components/product/Product";
import Loader from "../components/layout/Loader";
import Pagination from "react-js-pagination";

import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/actions/productActions";
import { useAlert } from "react-alert";

import "./homepage.css";

const HomePage = ({ match }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const alert = useAlert();
  const dispatch = useDispatch();

  const { loading, products, error, productsCount, resPerPage } = useSelector(
    (state) => state.products
  );

  const keyword = match.params.keyword;

  useEffect(() => {
    if (error) {
      return alert.error(error);
    }

    dispatch(getProducts(keyword, currentPage));
  }, [dispatch, alert, error, keyword, currentPage]);

  function setCurrentPageNo(pageNumber) {
    setCurrentPage(pageNumber);
  }

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

          {resPerPage <= productsCount && (
            <div className="d-flex justify-content-center mt-5">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText={"Next"}
                prevPageText={"Next"}
                firstPageText={"First"}
                lastPageText={"Last"}
                itemClass="page-item"
                linkClass="page-link"
              />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default HomePage;
