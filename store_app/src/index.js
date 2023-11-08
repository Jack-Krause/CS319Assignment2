import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import data from "./data.json";



function InitialAppBody() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data.items);
  }, []);

  return (
    <>
<div className="container">
      <header className="d-flex justify-content-center py-3">
        <span className="fs-4">Pants</span>
        <ul className="nav nav-pills">
          <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li>
          <li className="nav-item"><a href="./catalogTwo.html" className="nav-link">Other Items</a></li>
          <li className="nav-item"><a href="./about.html" className="nav-link">About</a></li>
        </ul>
      </header>
    </div>
    

  <div className="container px-4 py-5" id="custom-cards">
    <h1 className="main-title pb-2 border-bottom">Pants Selection</h1>
    {products.map((product, index) => (
        <div key={index}>
            <h3 className="product-title center mb-4 display-6 lh-1 fw-bold">
              Item: {product.title}
            </h3>
            <h4 className="center">
              ${product.price}
            </h4>
            <div className="center col">
            <img
        className="center card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
        src={product.imagePath}
        alt={product.title}
      />
            </div>
        </div>
    ))}
          
  </div>

  <div className="container px-4 py-5">
    <h2 className="secondary-title pb-2 border-bottom">Deals and More</h2>

    <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
      <div className="col d-flex flex-column align-items-start gap-2">
        <h2 className="fw-bold text-body-emphasis">Check out our great deals on shirts too!</h2>
        <p className="text-body-secondary">Nothing goes better with pants than a great shirt. Check them out while supplies last!</p>
        <a href="./catalogTwo.html" className="btn btn-primary btn-lg">View Shirts</a>
      </div>
      </div>

      <div className="col">
        <div className="row row-cols-1 row-cols-sm-2 g-4">
          <div className="col d-flex flex-column gap-2">
            <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
            </div>
            <h4 className="deal-title fw-semibold mb-0">BOGO</h4>
            <p className="text-body-secondary">Buy one pair of pants, get another pair <strong>free</strong>! Available only on Fridays.</p>
          </div>

          <div className="col d-flex flex-column gap-2">
            <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
            </div>
            <h4 className="deal-title fw-semibold mb-0">35% OFF</h4>
            <p className="text-body-secondary">Get 35% off your entire order. Use code: <strong>"35OFF"</strong> at checkout.</p>
          </div>

          <div className="col d-flex flex-column gap-2">
            <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
            </div>
            <h4 className="deal-title fw-semibold mb-0">Free Shipping</h4>
            <p className="text-body-secondary">Free shipping is included on all orders over $100.</p>
          </div>
          </div>

          <div className="col d-flex flex-column gap-2">
            <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
            </div>
            <h4 className="deal-title fw-semibold mb-0">Satisfaction Guaranteed</h4>
            <p className="text-body-secondary">Not happy with your order? We accept all returns within 30 days.</p>
          </div>
        </div>
      </div>

  <div className="container">
    <footer className="py-3 my-4">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
        <li className="nav-item"><a href="./catalogTwo.html" className="nav-link px-2 text-body-secondary">Other Items</a></li>
        <li className="nav-item"><a href="./about.html" className="nav-link px-2 text-body-secondary">About</a></li>
      </ul>
      <p className="text-center text-body-secondary">&copy; 2023 CS319</p>
    </footer>
  </div>
    </>
  );
}

function Initial() {
  return (
    <>
      <InitialAppBody />
    </>
  );
}



const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
  <React.StrictMode>
    <Initial />
  </React.StrictMode>
);



