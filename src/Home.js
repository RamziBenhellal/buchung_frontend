import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class Home extends Component {
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <a className="App-link" href="/">Home</a>
            <a className="App-link" href="/zweck/details/1">Home</a>


          </header>
        </div>
      );
    }
  }
  
  export default Home;
  