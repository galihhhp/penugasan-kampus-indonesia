import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { AuthProvider } from "Context/AuthContext";
import { DatabaseProvider } from "Context/DatabaseContext";
import "styles/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <DatabaseProvider>
        <App />
      </DatabaseProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
