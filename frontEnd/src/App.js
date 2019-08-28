import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import SearchBox from "./components/searchBox";
import Home from "./containers/home";
import Products from "./containers/products";
import ProductDetail from "./containers/productDetail";
import "./App.scss";
function App() {
  return (
    <Router>
      <SearchBox />
      <div className="main">
        <Route path="/" component={Home} exact />
        <Route path="/items" component={Products} exact />
        <Route path="/items/:id" component={ProductDetail} exact />
      </div>
    </Router>
  );
}

export default App;
