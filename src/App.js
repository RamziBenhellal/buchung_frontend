import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Zweck from "./zweck/Index";
import AddZweck from "./zweck/Add";
import ZweckDetails from "./zweck/Details";

import Termin from "./termin/Index";
import AddTermin from "./termin/Add";
import Header from "./layouts/Header";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Header />
        <Routes>

          <Route path="/" exact Component={Home} />
          
          <Route path="/zweck/index" exact Component={Zweck} />
          <Route path="/zweck/add" exact Component={AddZweck} />
          <Route path="/zweck/details/:id" exact Component={ZweckDetails} />

          <Route path="/termin/index" exact Component={Termin} />
          <Route path="/termin/add" exact Component={AddTermin} />


        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
