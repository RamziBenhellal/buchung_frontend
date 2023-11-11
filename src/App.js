import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./user/Home";
import UserForm from "./user/UserForm";
import Admin from "./admin/layouts/AdminLayout";
import User from "./user/layouts/UserLayout"
import Zweck from "./admin/zweck/Index";
import ZweckDetails from "./admin/zweck/Details";
import AddZweck from "./admin/zweck/Add";
import EditZweck from "./admin/zweck/Edit";

import Termin from "./admin/termin/Index";
import AddTermin from "./admin/termin/Add";
import EditTermin from "./admin/termin/Edit";
import TerminDetails from "./admin/termin/Details";

import Header from "./admin/layouts/Header";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/buchen" element={<UserForm/>}/>
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
