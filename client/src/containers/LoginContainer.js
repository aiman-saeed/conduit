import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";

import { withRouter } from "react-router-dom";
import Login from "../components/auth/Login";

import React, { Component } from "react";

export class LoginContainer extends Component {
  onSubmit = userData => {
    this.props.loginUser(userData);
  };

  render() {
    return (
      <Login
        auth={this.props.auth}
        errors={this.props.errors}
        onSubmit={this.onSubmit}
        location={this.props.location}
      />
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(withRouter(LoginContainer));
