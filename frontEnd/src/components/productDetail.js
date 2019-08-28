import React from "react";
import { numberWithCommas } from "./utils";

function ProductDetail({ product }) {
  return (
    <div className="product row">
      <div className="col-left">
        <img src={product.item.thumbnail} alt="product-alt" />
        <h2 className="description-title">Descripción del producto</h2>
        <p>{product.item.description.plain_text}</p>
      </div>
      <div className="col-right">
        <p>{product.item.sold_quantity} vendidos</p>
        <h1 className="title">{product.item.title}</h1>
        <span className="item-price">
          $ {numberWithCommas(product.item.price)}
        </span>
        <button>Comprar</button>
      </div>
    </div>
  );
}
export default ProductDetail;
