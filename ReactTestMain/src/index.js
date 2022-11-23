// 帶入react套件
import React from 'react';
import ReactDOM from 'react-dom/client';
// 將App.js帶入使用
import App from "./App"
// react 18後必須使用reportWebVitals
import reportWebVitals from "./reportWebVitals";

// 必須使用
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();