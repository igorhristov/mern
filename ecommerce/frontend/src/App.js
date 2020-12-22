import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomePage} exact />
          <Route path="/product/:id" component={ProductPage} />

          {/* ? at end of cart/:id? mean that id is optional */}
          <Route path="/cart/:id?" component={CartPage} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
