import { connect } from "react-redux";

import { withRouter } from "react-router-dom";
import Settings from "../components/edit-user/Settings";

import React, { Component } from "react";

import {PROFILE_URL} from "./../routes/index";

export class SettingsContainer extends Component {
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
