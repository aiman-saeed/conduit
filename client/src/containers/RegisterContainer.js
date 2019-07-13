import { connect } from "react-redux";
import { registerUser } from "../actions/authActions";

import { withRouter } from "react-router-dom";
import Register from "../components/auth/Register";

import React, { Component } from "react";

export class RegisterContainer extends Component {
  onSubmit = newUser => {
    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    return (
      <Register
        auth={this.props.auth}
        errors={this.props.errors}
        onSubmit={this.onSubmit}
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
  { registerUser }
)(withRouter(RegisterContainer));
