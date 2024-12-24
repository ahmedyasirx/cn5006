import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Hook_ControlledButtonState from "./Counter";
import EmojiCounter from "./EmojiCounter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Hook_ControlledButtonState />
    <EmojiCounter type="Love" />
    <EmojiCounter type="Like" />
    <EmojiCounter type="Sad" />
  </React.StrictMode>
);
