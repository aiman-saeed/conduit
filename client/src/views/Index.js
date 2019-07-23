import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./../components/common/PrivateRoute";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import LoginContainer from "../containers/LoginContainer";
import RegisterContainer from "../containers/RegisterContainer";
import NavbarContainer from "../containers/NavbarContainer";
import SettingsContainer from "../containers/SettingsContainer";
import AddArticleContainer from "../containers/AddArticleContainer";
import ViewArticleContainer from "../containers/ViewArticleContainer";

import Landing from "../components/layout/Landing";
import setAuthToken from "./../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import store from "./../store";
import { setCurrentUser } from "./../actions/authActions";

import {
  LOGIN_URL,
  SIGNUP_URL,
  HOME_URL,
  SETTINGS_URL,
  NEWARTICLE_URL,
  VIEWARTICLE_URL,
} from "../routes/index";

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
}

function Index(props) {
  return (
    <Router>
      <div className="App">
        <NavbarContainer />
        <Route exact path={HOME_URL} component={Landing} />
        <Route exact path={LOGIN_URL} component={LoginContainer} />
        <Route exact path={SIGNUP_URL} component={RegisterContainer} />
        <Route
          exact
          path={VIEWARTICLE_URL + "/:id"}
          component={ViewArticleContainer}
        />
        <PrivateRoute
          exact
          auth={props.auth}
          path={SETTINGS_URL}
          component={SettingsContainer}
        />
        <PrivateRoute
          exact
          auth={props.auth}
          path={NEWARTICLE_URL}
          component={AddArticleContainer}
        />
      </div>
    </Router>
  );
}

Index.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Index);
