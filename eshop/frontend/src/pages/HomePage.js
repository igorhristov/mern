import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./homepage.css";
import MetaData from "../components/layout/MetaData";
import Product from "../components/product/Product";
import Loader from "../components/layout/Loader";
import Pagination from "react-js-pagination";

import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/actions/productActions";
import { useAlert } from "react-alert";

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const HomePage = ({ match }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([1, 100000]);
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState("");

  const categories = [
    "Electronics",
    "Cameras",
    "Laptops",
    "Accessories",
    "Headphones",
    "Food",
    "Books",
    "Clothes/Shoes",
    "Beauty/Health",
    "Sports",
    "Outdoor",
    "Home",
  ];

  const alert = useAlert();
  const dispatch = useDispatch();

  const {
    loading,
    products,
    error,
    productsCount,
    resPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);

  const keyword = match.params.keyword;

  useEffect(() => {
    if (error) {
      return alert.error(error);
    }

    dispatch(getProducts(keyword, currentPage, price, category, rating));
  }, [dispatch, alert, error, keyword, currentPage, price, category, rating]);

  function setCurrentPageNo(pageNumber) {
    setCurrentPage(pageNumber);
  }

  let count = productsCount;
  if (keyword) {
    count = filteredProductsCount;
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
              {keyword ? (
                <>
                  <Col md={3} className="my-5">
                    <div className="px-5">
                      <Range
                        marks={{ 1: `$1`, 100000: `$100000` }}
                        min={1}
                        max={100000}
                        defaultValue={[1, 100000]}
                        tipFormatter={(value) => `$${value}`}
                        tipProps={{
                          placement: "top",
                          visible: true,
                        }}
                        value={price}
                        onChange={(price) => setPrice(price)}
                      />

                      <hr className="my-5" />
                      <div className="my-5">
                        <h4 className="mb-3">Categories</h4>
                        <ul className="pl-0">
                          {categories.map((category) => (
                            <li
                              key={category}
                              style={{
                                cursor: "pointer",
                                listStyleType: "none",
                              }}
                              onClick={() => setCategory(category)}
                            >
                              {category}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <hr className="my-3" />
                      <div className="my-5">
                        <h4 className="mb-3">Ratings</h4>
                        <ul className="pl-0">
                          {[5, 4, 3, 2, 1].map((star) => (
                            <li
                              key={star}
                              style={{
                                cursor: "pointer",
                                listStyleType: "none",
                              }}
                              onClick={() => setRating(star)}
                            >
                              <div className="rating-outer">
                                <div
                                  className="rating-inner"
                                  style={{ width: `${star * 20}%` }}
                                ></div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Col>

                  <Col md={9}>
                    <Row>
                      {products &&
                        products.map((product) => (
                          <Product
                            key={product._id}
                            product={product}
                            col={4}
                          />
                        ))}
                    </Row>
                  </Col>
                </>
              ) : (
                products &&
                products.map((product) => (
                  <Product key={product._id} product={product} col={3} />
                ))
              )}
            </Row>
          </section>

          {resPerPage <= count && (
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
