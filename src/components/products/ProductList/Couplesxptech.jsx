import React from "react";
import "./Productlist.css";
import "../../home/Home.css";
import "../../home/homecomponents/HomeComponent.css";

const products = [
  {
    id: 1,
    name: "ECLIPSE - 21`6FT",
    price: "$92,900",
    image: "https://deluxcaravan.b-cdn.net/assets/header/216.webp",
  },
  {
    id: 2,
    name: "ECLIPSE - 22FT",
    price: "$98,900",
    image: "",
  },
];

const Couplesxptech = React.memo(() => {
  return (
    <div className="container">
      <div className="component">
        <h1 className="product-grid-heading">Couples XP Tech</h1>
        <h2 className="product-grid-subheading">Eclipse</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <p>
                {product.name} | {product.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});
export default Couplesxptech;
