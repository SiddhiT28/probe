import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ResultContextProvider } from "./contexts/ResultContextProvider";
import "./global.css";

createRoot(document.getElementById("root")).render(
  <ResultContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ResultContextProvider>
);
