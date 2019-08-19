import React, { Component } from "react";
import Heading from "./components/Heading";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Launches from "./components/Launches";

// import Articles from "./components/Articles";
// import ArticlePage from "./components/ArticlePage";
// import PostComment from "./components/PostComment";
// import Error from "./components/Error";
// import { Router } from "@reach/router";
import "./css/App.css";

class App extends Component {
  state = {
    launches: []
  };

  render() {
    // const { launches } = this.state;
    return (
      <div className="App">
        <Heading />
        <Nav />
        <Launches />
        <Footer />
      </div>
    );
  }
}

export default App;
