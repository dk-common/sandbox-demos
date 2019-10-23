import React from "react";
import ReactDOM from "react-dom";
import { ActiveTableHeader } from "./demos/activeTableHeader";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <ActiveTableHeader showAdd={true} tableColumns={[]} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
