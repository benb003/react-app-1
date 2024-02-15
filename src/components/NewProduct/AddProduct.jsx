const AddProduct = ({ setIsOpen }) => {
  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Add a product</button>
    </div>
  );
};

export default AddProduct;
