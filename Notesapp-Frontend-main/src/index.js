// Importing necessary modules and components from React, React-DOM, CSS, and other libraries
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Importing components for routing, UI theme, and state management
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
// Creating a root element for React rendering
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the main App component wrapped within various providers for routing, UI theme, and state management
root.render(
  <BrowserRouter>
    <ChakraProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
  </BrowserRouter>
);

reportWebVitals();
