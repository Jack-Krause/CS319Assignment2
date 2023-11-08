import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";



function InitialAppBody() {
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
  
    <div className="b-example-divider"></div>
  
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <symbol id="check2" viewBox="0 0 16 16">
        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
      </symbol>
      <symbol id="circle-half" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"/>
      </symbol>
      <symbol id="moon-stars-fill" viewBox="0 0 16 16">
        <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
        <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
      </symbol>
      <symbol id="sun-fill" viewBox="0 0 16 16">
        <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
      </symbol>
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



