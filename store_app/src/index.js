import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import data from "./data.json";

function CheckoutBody({
  setIsCheckoutPage,
  cart,
  products,
  filteredProducts,
  setCart,
  setProducts,
  setFilteredProducts,
}) {
  let totalPrice = 0;

  for (const cartItem of cart) {
    let p = cartItem.price * cartItem.quantity;
    totalPrice += p;
  }

  return (
    <>
      <div className="container">
        <header className="d-flex justify-content-center py-3">
          <span className="fs-4">Pants</span>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a href="#" className="nav-link active" aria-current="page">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="./catalogTwo.html" className="nav-link">
                Other Items
              </a>
            </li>
            <li className="nav-item">
              <a href="./about.html" className="nav-link">
                About
              </a>
            </li>
          </ul>
        </header>
      </div>

      <div className="container px-4 py-5" id="custom-cards">
        <h1 className="main-title pb-2 border-bottom">Your Cart:</h1>
        <p className="pb-2">Total Item Types in Cart: {cart.length}</p>

        <div className="row">
          <div className="col-md-3">
            <strong>Image</strong>
          </div>
          <div className="col-md-3">
            <strong>Title</strong>
          </div>
          <div className="col-md-3">
            <strong>Quantity</strong>
          </div>
          <div className="col-md-3">
            <strong>Price</strong>
          </div>
        </div>

        {cart.map((cartItem, cartIndex) => (
          <div key={cartIndex} className="row align-items-center">
            <div className="col-md-3">
              <img
                style={{ width: "100px", height: "100px" }}
                className="card-img-top"
                src={cartItem.imagePath}
                alt={cartItem.title}
              />
            </div>
            <div className="col-md-3">
              <h5>{cartItem.title}</h5>
            </div>
            <div className="col-md-3">
              <p>Quantity: {cartItem.quantity}</p>
            </div>
            <div className="col-md-3">
              <p>${cartItem.quantity * cartItem.price}.00</p>
            </div>
            <p className="pb-2">Total: ${totalPrice}</p>

            <button
              onClick={() => {
                setIsCheckoutPage(false);
              }}
            >
              Back to Products
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

function InitialAppBody({
  setIsCheckoutPage,
  cart,
  products,
  filteredProducts,
  setCart,
  setProducts,
  setFilteredProducts,
}) {
  const [userInput, setUserInput] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Filter the products based on user input
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(userInput.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const addToCart = (product) => {
    const updatedCart = [...cart];

    const existingProduct = updatedCart.find(
      (item) => item.title === product.title
    );

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }

    setCart(updatedCart);
  };

  useEffect(() => {
    setProducts(data.items);
  }, []);

  return (
    <>
      <link href="./bootstrap.min.css" rel="stylesheet" />
      <link
        rel="canonical"
        href="https://getbootstrap.com/docs/5.3/examples/features/"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@docsearch/css@3"
      />
      <div className="container">
        <header className="d-flex justify-content-center py-3">
          <span className="fs-4">Pants</span>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a href="#" className="nav-link active" aria-current="page">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="./catalogTwo.html" className="nav-link">
                Other Items
              </a>
            </li>
            <li className="nav-item">
              <a href="./about.html" className="nav-link">
                About
              </a>
            </li>
          </ul>
        </header>
      </div>

      <div className="container px-4 py-5" id="custom-cards">
        <h1 className="main-title pb-2 border-bottom">Your Cart:</h1>
        <p className="pb-2">Total Item Types in Cart: {cart.length}</p>

        {cart.map((cartItem, cartIndex) => (
          <div key={cartIndex}>
            <p>
              {cartItem.title} - Quantity: {cartItem.quantity}
            </p>
          </div>
        ))}
        <button
          className="nav-item"
          onClick={() => {
            if (cart.length > 0) {
              setIsCheckoutPage(true);
            } else {
              alert("You cannot checkout, the cart is empty!");
            }
          }}
        >
          Checkout
        </button>
      </div>

      <div className="container px-4 py-5" id="custom-cards">
        <h1 className="main-title pb-2 border-bottom">Pants Options:</h1>
        <form onSubmit={handleFormSubmit}>
          <label>
            Search our Products:
            <input
              type="text"
              name="userInput"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <input type="submit" value="Search" />
          </label>
        </form>

        {filteredProducts.length > 0
          ? filteredProducts.map((product, index) => (
              // Render filtered products here
              <div key={index}>
                <h3 className="product-title center mb-4 display-6 lh-1 fw-bold">
                  {product.title}
                </h3>
                <h4 className="center">${product.price}</h4>
                <div className="center col">
                  <img
                    className="center card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                    src={product.imagePath}
                    alt={product.title}
                  />
                </div>
                <p className="pb-2 border-bottom">{product.description}</p>
                <button onClick={() => addToCart(product)}>Add To Cart</button>
              </div>
            ))
          : products.map((product, index) => (
              // Render all products if no filter applied
              <div key={index}>
                <h3 className="product-title center mb-4 display-6 lh-1 fw-bold">
                  {product.title}
                </h3>
                <h4 className="center">${product.price}</h4>
                <div className="center col">
                  <img
                    className="center card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                    src={product.imagePath}
                    alt={product.title}
                  />
                </div>
                <p className="pb-2 border-bottom">{product.description}</p>
                <button onClick={() => addToCart(product)}>Add To Cart</button>
              </div>
            ))}
      </div>

      <div className="container px-4 py-5">
        <h2 className="secondary-title pb-2 border-bottom">Deals and More</h2>

        <div className="col">
          <div className="row row-cols-1 row-cols-sm-2 g-4">
            <div className="col d-flex flex-column gap-2">
              <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3"></div>
              <h4 className="deal-title fw-semibold mb-0">BOGO</h4>
              <p className="text-body-secondary">
                Buy one pair of pants, get another pair <strong>free</strong>!
                Available only on Fridays.
              </p>
            </div>

            <div className="col d-flex flex-column gap-2">
              <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3"></div>
              <h4 className="deal-title fw-semibold mb-0">35% OFF</h4>
              <p className="text-body-secondary">
                Get 35% off your entire order. Use code:{" "}
                <strong>"35OFF"</strong> at checkout.
              </p>
            </div>

            <div className="col d-flex flex-column gap-2">
              <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3"></div>
              <h4 className="deal-title fw-semibold mb-0">Free Shipping</h4>
              <p className="text-body-secondary">
                Free shipping is included on all orders over $100.
              </p>
            </div>
          </div>

          <div className="col d-flex flex-column gap-2">
            <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3"></div>
            <h4 className="deal-title fw-semibold mb-0">
              Satisfaction Guaranteed
            </h4>
            <p className="text-body-secondary">
              Not happy with your order? We accept all returns within 30 days.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="./catalogTwo.html"
                className="nav-link px-2 text-body-secondary"
              >
                Other Items
              </a>
            </li>
            <li className="nav-item">
              <a
                href="./about.html"
                className="nav-link px-2 text-body-secondary"
              >
                About
              </a>
            </li>
          </ul>
          <p className="text-center text-body-secondary">&copy; 2023 CS319</p>
        </footer>
      </div>
    </>
  );
}

function Initial() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isCheckoutPage, setIsCheckoutPage] = useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  return (
    <>
      {isCheckoutPage ? (
        <CheckoutBody
          setIsCheckoutPage={setIsCheckoutPage}
          cart={cart}
          products={products}
          filteredProducts={filteredProducts}
          setCart={setCart}
          setProducts={setProducts}
          setFilteredProducts={setFilteredProducts}
        />
      ) : (
        <InitialAppBody
          setIsCheckoutPage={setIsCheckoutPage}
          cart={cart}
          products={products}
          filteredProducts={filteredProducts}
          setCart={setCart}
          setProducts={setProducts}
          setFilteredProducts={setFilteredProducts}
        />
      )}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Initial />
  </React.StrictMode>
);
