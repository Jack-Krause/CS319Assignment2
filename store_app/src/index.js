import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function AppHeader() {
  return (
    <div>
      <header>
        <h1>Header</h1>
      </header>
    </div>
  );
}

function AppBody() {
  return (
    <div className="App">
        <div className="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
          <ul
            className="dropdown-menu dropdown-menu-end shadow"
            aria-labelledby="bd-theme-text"
          >
            <li>
              
            </li>
            <li>
              <button
                type="button"
                className="dropdown-item d-flex align-items-center active"
                data-bs-theme-value="auto"
                aria-pressed="true"
              >
                <svg
                  className="bi me-2 opacity-50 theme-icon"
                  width="1em"
                  height="1em"
                >
                  <use href="#circle-half"></use>
                </svg>
                Auto
                <svg className="bi ms-auto d-none" width="1em" height="1em">
                  <use href="#check2"></use>
                </svg>
              </button>
            </li>
          </ul>
        </div>
    </div>
  );
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppHeader />
    <AppBody />
  </React.StrictMode>

);


