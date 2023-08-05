import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "tw-elements";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Searchable from "./pages/Searchable";
import AssignDetail from "./pages/AssignDetail";
import AssignDetailCom from "./components/AssignDetailCom";
import Api from "./API/api.php";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="searchable" element={<Searchable />} />
          <Route path="assignDetail" element={<AssignDetail />}>
            <Route path=":id" element={<AssignDetailCom />} />
          </Route>
          <Route path="api" element={<Api />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
