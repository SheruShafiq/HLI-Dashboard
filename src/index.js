import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals"
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<GoogleOAuthProvider clientId="328533374442-m8iju91mq7ss118pui8jj6qs1dk4tpqs.apps.googleusercontent.com">
    <App />
</GoogleOAuthProvider>);

reportWebVitals();
