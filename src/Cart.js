import { useState } from "react";
import "./Cart.css";

const Cart = ({ addItems }) => {
  const [type, setType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [submit, setSubmit] = useState("");

  const handleOnChangeType = (e) => {
    setType(e.target.value);
  };
  const handleOnchangeQuant = (e) => {
    setQuantity(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit("Added to cart Sucessfully");
    let id = Math.round(Math.random() * 100);
    let title = type;
    let origin = quantity;
    let itemTypes = { title, origin, id };
    console.log(itemTypes);
    addItems(itemTypes);
  };

  return (
    <>
      <h4>Add Items to Cart </h4>
      <form className="create" onSubmit={handleSubmit}>
        <label className="label" value={type}>
          Mango Type:
        </label>
        <input type="text" required onChange={handleOnChangeType}></input>
        <label value={quantity} className="label">
          Quantity
        </label>
        <input type="text" required onChange={handleOnchangeQuant}></input>
        <button className="button">Add to Cart</button>
        <p>{type}</p>
        <p>{quantity}</p>
        <p>{submit}</p>
      </form>
    </>
  );
};
export default Cart;
