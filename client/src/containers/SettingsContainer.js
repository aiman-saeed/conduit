import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Settings from "../components/edit-user/Settings";

import { PROFILE_URL, LOGIN_URL } from "./../routes/index";

import { logoutUser } from "./../actions/authActions";
import { updateUser } from "./../actions/updateUser";

import store from "./../store";

export class SettingsContainer extends Component {
  onClick = () => {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to Login
    this.props.history.push(LOGIN_URL);
  };

  onSubmit = userData => {
    this.props.updateUser(
      userData,
      this.props.history,
      PROFILE_URL + "/" + this.props.auth.user.name,
      { iat: this.props.auth.user.iat, exp: this.props.auth.user.exp }
    );
  };

  render() {
    return (
      <Settings
        auth={this.props.auth}
        errors={this.props.errors}
        onSubmit={this.onSubmit}
        onClick={this.onClick}
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
  { updateUser }
)(withRouter(SettingsContainer));
