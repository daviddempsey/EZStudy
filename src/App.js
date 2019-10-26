import React from "react";
import "./App.css";
import AddFile from "./addFilesButton";

function App() {
  return (
    <div id="parent">
      <h1>Welcome to Study Guide Maker</h1>
      <div className="sidebar"></div>
      <div className="addbutton">
        <AddFile />
      </div>
    </div>
  );
}
export default App;
