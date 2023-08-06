import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./views/Login";

function App() {
  const [state, setState] = useState(0);
  const increaseNumber = () => {
    setState(state + 1);
  };

  return (
    <div className="App">
      <h1>Welcome to React Router !</h1>
      <Routes>
        <Route path="/" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
