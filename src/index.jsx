import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import Preloader from "./components/preloader";
import DataContext from "./context/DataContext";
import DataProvider from "./context/DataProvider";
import reportWebVitals from "./reportWebVitals";

import "./index.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<Preloader />}>
        <DataProvider>
          <DataContext.Consumer>
            {(data) => <App data={data} />}
          </DataContext.Consumer>
        </DataProvider>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
