import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

function AppHeader() {
  return (
    <>
      <header data-bs-theme="dark nav">
        <nav className="nav navbar navbar-expand-md navbar-dark fixed-top bg-dark">
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
<div className="container marketing">

{/* Three columns of text below the carousel */}
<div className="row nav">
  <div className="col-lg-4">
    <h2 className="fw-normal">Featured: Is Jaws Real?</h2>
    <p>Believe it or not, Jaws is actually based on a true story. The movie roughly follows the events of the
      Jersey Shore shark attack of 1916</p>
    <p><a className="btn btn-secondary" href="./action.html">More Info &raquo;</a></p>
  </div>{/* /.col-lg-4 */}
  <div className="col-lg-4">
    <h2 className="fw-normal">Featured: <strong>Will Ferrell</strong></h2>
    <p>John William Ferrell is 56 years of age. Throughout his career, he's earned four Emmy Awards and the Mark
      Twain Prize for American Humor in 2011.</p>
    <p><a className="btn btn-secondary" href="./comedy.html">View Comedies &raquo;</a></p>
  </div>{/* /.col-lg-4 */}
  <div className="col-lg-4">
    <h2 className="fw-normal">Featured: Is 'Johnny Football' kid-friendly?</h2>
    <p>Untold: Johnny Football is rated TV-MA and features explicit language. You may want to think twice before
      showing your kids this movie!</p>
    <p><a className="btn btn-secondary" href="./documentary.html">View All Documentaries &raquo;</a></p>
  </div>{/* /.col-lg-4 */}
</div>{/* /.row */}
</div>
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



