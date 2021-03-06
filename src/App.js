import React, { Component } from "react";
import Heading from "./components/Heading";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Launches from "./components/Launches";
import LaunchPage from "./components/LaunchPage";
import RocketCard from "./components/RocketCard";
import { Router } from "@reach/router";
import "./css/App.css";

class App extends Component {
  state = {
    launches: []
  };

  render() {
    return (
      <div className="App">
        <Heading />
        <Nav />
        <Router>
          <Launches path="/" />
          <LaunchPage path="/launches/:flight_number" />
          <RocketCard path="/rockets/:rocket_id" />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
