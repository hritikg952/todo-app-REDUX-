import React from "react";
import { useSelector } from "react-redux";

//import css
import "./css/app.css";
//import components
import InputArea from "./component/inputArea.jsx";
import ListArea from "./component/listArea";
import TaskCounter from "./component/taskCounter";
const App = () => {
  return (
    <div className="App">
      <div className="container">
        <TaskCounter />
        <InputArea />
        <ListArea />
      </div>
    </div>
  );
};

export default App;
