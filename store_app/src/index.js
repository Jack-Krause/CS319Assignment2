import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

function AppHeader() {
  return (
    <>
      <header data-bs-theme="dark">
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div className="container-fluid">
            <h1 className="navbar-brand">Home</h1>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <h2 className="nav-link">Products</h2>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

function InitialAppBody() {
  return (
    <>
    <nav>
      <h1>Hello, there</h1>
      </nav>
    </>
  );
}

function Initial() {
  return (
    <>
      <AppHeader />
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



