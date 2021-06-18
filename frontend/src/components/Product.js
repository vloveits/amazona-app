import React from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";

export default function Product(props) {
  const { product } = props;
  return (
    <div key={product._id} className="cart">
      <Link href={`/product/${product._id}`}>
        {/* <!-- image size: 680px by 830px --> */}
        <img className="medium" src={product.image} alt={product.name} />
      </Link>
      <div className="cart-body">
        <Link href={`/product/${product._id}`}>
          <h2>{product.name}</h2>
        </Link>
        <Rating
          rating={product.rating}
          numReviews={product.numReviews}
        ></Rating>
        <div className="price">${product.price}</div>
      </div>
    </div>
  );
}
