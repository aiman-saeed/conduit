import React, { Component } from "react";
import { Link } from "react-router-dom";

import NavbarUnauthenticated from "./NavbarUnauthenticated";
import NavbarAuthenticated from "./NavbarAuthenticated";

export default class Navbar extends Component {
  render() {
    const { config, auth } = this.props;

    const config_NavbarUnauthenticated = {
      SIGNUP_URL: config.SIGNUP_URL,
      SIGNUP_TEXT: config.SIGNUP_TEXT,
      LOGIN_URL: config.LOGIN_URL,
      LOGIN_TEXT: config.LOGIN_TEXT
    };

    const config_NavbarAuthenticated = {
      ARTICLE_ACTION_TEXT: config.ARTICLE_ACTION_TEXT,
      SETTINGS_TEXT: config.SETTINGS_TEXT,
      NEWARTICLE_URL: config.NEWARTICLE_URL,
      SETTINGS_URL: config.SETTINGS_URL,
      USERNAME: auth.user.name,
      PROFILE_URL: config.PROFILE_URL,
      AVATAR_IMG_URL: auth.user.avatar
    };

    return (
      <div>
        <nav
          className="navbar is-fixed-top is-light"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="container">
            <div className="navbar-brand">
              <Link className="navbar-item" to={config.HOME_URL}>
                <div className="container">
                  <h1 className="title is-3 has-text-success">
                    {config.BRAND_NAME}
                  </h1>
                </div>
              </Link>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <Link
                  className="button is-light has-text-grey"
                  to={config.HOME_URL}
                >
                  {config.HOME_TEXT}
                </Link>
              </div>
              <div className="navbar-item">
                {!this.props.auth.isAuthenticated && (
                  <NavbarUnauthenticated
                    config={config_NavbarUnauthenticated}
                  />
                )}
              </div>
              <div className="navbar-item">
                {this.props.auth.isAuthenticated && (
                  <NavbarAuthenticated config={config_NavbarAuthenticated} />
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
