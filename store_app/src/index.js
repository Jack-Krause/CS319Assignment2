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

    <div>
      <h3 className="product-title center mb-4 display-6 lh-1 fw-bold">Sweatpants</h3>
      <h4 className="center">$45.00</h4>
      <div className="center col">
        <img className="center card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" src="./images/sweatpants.jpg" alt="sweatpants"></img>
      </div>
      <p className="pb-2 border-bottom">Sweatpants are the epitome of comfort and casual style. These versatile bottoms have become an essential part of modern-day fashion, offering a relaxed and cozy alternative to traditional trousers. Typically made from soft, breathable materials like cotton or fleece, sweatpants provide unmatched comfort for lounging at home, running errands, or even hitting the gym. With an elastic waistband and often featuring drawstrings, they offer a customizable fit that accommodates various body shapes. Sweatpants come in a range of colors and styles, from classic solid hues to trendy prints and designs, making them suitable for both leisurely and fashion-forward occasions. Whether you're looking for a laid-back day in or a sporty streetwear look, sweatpants are the go-to choice for those seeking comfort and style in one versatile garment.</p>
    </div>

      <div>
        <h3 className="product-title center mb-4 display-6 lh-1 fw-bold">Jeans</h3>
        <h4 className="center">$70.00</h4>
        <div className="center col">
          <img className="center card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" src="./images/jeans.jpg" alt="sweatpants"></img>
        </div>
        <p className="pb-2 border-bottom">Jeans are a timeless wardrobe staple cherished for their durability, versatility, and iconic style. Crafted from rugged denim fabric, these pants were originally designed for hard labor but have since evolved into a symbol of casual fashion. Their enduring popularity stems from their ability to effortlessly adapt to various occasions and personal styles. Whether it's the classic blue jeans, distressed denim, or tailored black jeans, this versatile garment suits a wide range of outfits. Jeans are celebrated for their comfort, practicality, and ability to age beautifully, developing a unique patina over time. From casual outings to more formal settings, jeans have proven themselves as a fashion mainstay, making them an essential part of many wardrobes around the world.</p>
      </div>

        <div>
          <h3 className="product-title center mb-4 display-6 lh-1 fw-bold">Cargo Pants</h3>
          <h4 className="center">$55.00</h4>
          <div className="center col">
            <img className="center card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" src="./images/cargopants.jpg" alt="sweatpants"></img>
          </div>
          <p className="pb-2 border-bottom">Cargo pants are a utilitarian fashion choice that combines functionality with a hint of rugged style. Characterized by their numerous pockets, typically on the sides of the legs, cargo pants were originally designed for military use to carry essential gear. Today, they have found their way into everyday fashion, appreciated for their ample storage space and comfortable fit. Cargo pants are ideal for those who value practicality, making them a popular choice among outdoor enthusiasts and individuals who need extra storage while on the go. They come in various materials and styles, allowing wearers to strike a balance between functionality and casual aesthetics, making cargo pants a versatile and distinctive addition to any wardrobe.</p>
      
          <div>
            <h3 className="product-title center mb-4 display-6 lh-1 fw-bold">Dress Pants</h3>
            <h4 className="center">$95.00</h4>
            <div className="center col">
              <img className="center card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" src="./images/dresspants.jpg" alt="sweatpants"></img>
            </div>
            <p className="pb-2">Dress pants are the refined and sophisticated counterpart to casual bottoms. These trousers are designed with a focus on formality, making them an essential piece in any professional or semi-formal wardrobe. Typically tailored from high-quality fabrics such as wool, cotton, or blends, dress pants boast a polished appearance, often featuring a crease down the front and a more structured fit compared to casual options. Their versatility allows them to seamlessly transition from the office to formal events, making them a reliable choice for individuals seeking a timeless, elegant look. Dress pants come in various styles, including classic, slim-fit, and wide-leg, catering to different tastes and occasions while always exuding an air of refinement and class.</p>
          </div>
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



