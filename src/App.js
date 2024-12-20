import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042442";
      showAlert("Dark mode has been enabled", "success");

      // setTimeout(() => {
      //   document.title = "TextUtils is Amazing"
      // }, 2000);
      // setTimeout(() => {
      //   document.title = "Install TextUtils now"
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      {/* <Navbar></Navbar> */}
      <Router>
        <Navbar title="TextUtilsName" aboutText="About Text" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
                <Route exact path="/about" element={<About mode={mode} />} />
                <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode} />}/>
          </Routes>
        </div>
      </Router>

    </>
  );
}

export default App;
