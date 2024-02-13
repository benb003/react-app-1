import Counter from "../Counter";
import { useState } from "react";
import ProductInfo from "./ProductInfo";
import "./ProductItem.css";

const ProductItem = ({ product }) => {
  const { imageUrl, productName, productPrice } = product;
  const [counter, setCounter] = useState(productPrice);
  return (
    <div className="product-item">
      <div className="product-image">
        <img src={imageUrl} alt="" />
      </div>
      <ProductInfo>
        <h2>{productName}</h2>
        <Counter
          productPrice={productPrice}
          counter={counter}
          setCounter={setCounter}
        >
          <span>{counter}</span>
        </Counter>
      </ProductInfo>
    </div>
  );
};

export default ProductItem;
