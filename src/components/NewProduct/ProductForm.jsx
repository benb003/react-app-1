import { useState } from "react";
import "./ProductForm.css";

const ProductForm = (props) => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const titleChangeHandler = (event) => {
    setProductName(event.target.value);
  };

  const priceChangeHandler = (event) => {
    setProductPrice(event.target.value);
  };

  const imageChangeHandler = (event) => {
    setImageUrl(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const newProductData = {
      id: props.products.length + 1,
      productName,
      productPrice,
      imageUrl,
    };

    // props.setProducts((prevState) => [...prevState, newProductData]);
    props.onSaveProduct(newProductData);
    setProductName("");
    setProductPrice("");
    setImageUrl("");
  };

  return (
    <form className="product-form" onSubmit={submitHandler}>
      <div className="product-form-input">
        <label>Product Name</label>
        <input
          type="text"
          placeholder="product name"
          onChange={titleChangeHandler}
          value={productName}
        />
      </div>
      <div className="product-form-input">
        <label>Product Price</label>
        <input
          type="number"
          placeholder="product price"
          onChange={priceChangeHandler}
          value={productPrice}
        />
      </div>
      <div className="product-form-input">
        <label>Image Url</label>
        <input
          type="text"
          placeholder="image url"
          onChange={imageChangeHandler}
          value={imageUrl}
        />
      </div>
      <div className="form-buttons">
        <button className="product-form-button">Add Product</button>
        <button
          onClick={() => props.setIsOpen(false)}
          className="product-form-button cancel"
          type="button"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
