import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Indexposts from "./posts/IndexPosts";
import HeaderBannerSection from "./HeaderBannerSection";
class MainComponent extends Component {
  state = {};
  render() {
    return (
      <>
        <HeaderBannerSection imgsource="h2.jpeg" interlink="#btn_header" />

        <Indexposts />
      </>
    );
  }
}

export default MainComponent;
