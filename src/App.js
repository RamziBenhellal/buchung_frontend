import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Admin from "./layouts/AdminLayout";
import User from "./layouts/UserLayout"
import Zweck from "./zweck/Index";
import ZweckDetails from "./zweck/Details";
import AddZweck from "./zweck/Add";
import EditZweck from "./zweck/Edit";

import Termin from "./termin/Index";
import AddTermin from "./termin/Add";
import EditTermin from "./termin/Edit";
import TerminDetails from "./termin/Details";

import Header from "./layouts/Header";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/admin" Component={Admin}>
            <Route path="zweck/index" exact Component={Zweck} />
            <Route path="zweck/add" exact Component={AddZweck} />
            <Route path="zweck/details/:id" exact Component={ZweckDetails} />
            <Route path="zweck/edit/:id" exact Component={EditZweck} />

            <Route path="termin/index" exact Component={Termin} />
            <Route path="termin/add" exact Component={AddTermin} />
            <Route path="termin/edit/:id" exact Component={EditTermin} />
            <Route path="termin/details/:id" exact Component={TerminDetails} />
          </Route>
          <Route path="/" Component={User}>
          <Route index exact Component={Home} />

          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
