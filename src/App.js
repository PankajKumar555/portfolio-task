import React from "react";
import SideBar from "./component/sidebar/SideBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        <SideBar />
      </div>
    </div>
  );
}

export default App;
