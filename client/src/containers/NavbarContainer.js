import React, { Component } from "react";
import { connect } from "react-redux";

import NavBar from "../components/layout/Navbar";

import * as constants from "./../config/constants";
import * as urls from "./../routes/index";

export class NavbarContainer extends Component {
  render() {
    const config = {
      ...constants,
      ...urls
    };
    console.log(config);
    return <NavBar auth={this.props.auth} config={config} />;
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(NavbarContainer);
