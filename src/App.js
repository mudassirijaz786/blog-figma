import React, { Component } from "react";
import BlogArticle from "./views/BlogArticle";
import "./assets/styling/index.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BlogArticle />
      </React.Fragment>
    );
  }
}

export default App;
