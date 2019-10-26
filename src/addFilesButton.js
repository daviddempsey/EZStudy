import React from "react";
import "./App.css";

function AddFile() {
  const addfileButton = () => {
    console.log("Add");
  };
  return (
    <div className="addfile">
      <p>Add your lecture slides below</p>
      <button onClick={addfileButton}>Add File</button>
    </div>
  );
}

export default AddFile;
