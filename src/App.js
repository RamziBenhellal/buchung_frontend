import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Details from "./zweck/Details";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/" exact Component={Home} />
            <Route path="/zweck/details/:id" exact Component={Details} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
