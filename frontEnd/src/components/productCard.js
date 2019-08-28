import React from "react";
import { Link } from "react-router-dom";
import { numberWithCommas } from "./utils";
function ProductCard({ item }) {
  return (
    <div className="product row">
      <div className="image">
        <Link to={"/items/" + item.id}>
          <img src={item.thumbnail} alt="product-alt" />
        </Link>
      </div>
      <div className="detail">
        <h2 className="price">$ {numberWithCommas(item.price)}</h2>
        <div className="description">
          <Link to={"/items/" + item.id}>
            <span>{item.title}</span>
          </Link>
        </div>
      </div>
      <div className="location">
        <span>{item.address.state_name}</span>
      </div>
    </div>
  );
}

export default ProductCard;
