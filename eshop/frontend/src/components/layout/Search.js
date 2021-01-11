import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Search = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const searchHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push(`/`);
    }
  };

  return (
    <Form onSubmit={searchHandler} inline>
      <Form.Group>
        <Form.Control
          id="search_field"
          type="text"
          placeholder="Enter Product Name ..."
          onChange={(e) => setKeyword(e.target.value)}
        />

        <div className="input-group-append">
          <Button type="submit">
            <i className="fa fa-search"></i>
          </Button>
        </div>
      </Form.Group>
    </Form>
  );
};

export default Search;
