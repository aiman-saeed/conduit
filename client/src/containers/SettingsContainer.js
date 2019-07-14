import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Settings from "../components/edit-user/Settings";

import {PROFILE_URL, LOGIN_URL} from "./../routes/index";

import {logoutUser} from "./../actions/authActions"

import store from "./../store"

export class SettingsContainer extends Component {

  onClick = ()=>{
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to Login
    this.props.history.push(LOGIN_URL)
  }
  onSubmit = userData => {
    console.log(userData);
    console.log('Settings Form Submitted.');
    this.props.history.push(PROFILE_URL+'/'+this.props.auth.user.name);
  };

  render() {
    console.log(this.props.auth);
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
  mapStateToProps
)(withRouter(SettingsContainer));
