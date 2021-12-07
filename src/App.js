import React from "react";
import "./App.css";
import Router  from "./router";

import Header from "./Component/Header/Header"
import Footer from "./Component/Footer/Footer";
import Navbar from "./Component/Navbar/Navbar"

class App extends React.Component {

  render() {
    return (
      <div className="landscape" >
        <div className="App">
          <Navbar />
          <Router />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
