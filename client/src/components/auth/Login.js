import React, { Component } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import PropTypes from "prop-types";

import { SIGNUP_URL } from "./../../routes/index";

import Break from "./../elements/Break";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.onSubmit(userData);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    this.setState({ errors: {} });
    this.props.location.state = undefined;
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="Login">
        <Break times={2} />
        <div className="columns">
          <div className="column is-12">
            {this.props.location.state && (
              <div className="columns">
                <div className="column is-6 is-offset-3">
                  <article className="message is-danger">
                    <div className="message-body">
                      {this.props.location.state.redirect_msg}
                    </div>
                  </article>
                </div>
              </div>
            )}
            <h1 className="title is-1 has-text-centered has-text-grey-dark">
              Log In
            </h1>
            <Link to={SIGNUP_URL}>
              <p className="has-text-centered has-text-link">
                {" "}
                Need an account?{" "}
              </p>
            </Link>
          </div>
        </div>
        <div className="columns">
          <div className="column is-6 is-offset-3">
            <form onSubmit={this.onSubmit}>
              <div className="field">
                <div className="control has-icons-left has-icons-right">
                  <input
                    className={classnames("input is-large has-text-grey-dark", {
                      "is-danger": errors.email
                    })}
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    required={true}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope" />
                  </span>
                  {errors.email && (
                    <span className="icon is-small is-right">
                      <i className="fas fa-exclamation-triangle" />
                    </span>
                  )}
                  {errors.email && (
                    <div className="help is-danger">{errors.email}</div>
                  )}
                </div>
              </div>

              <div className="field">
                <div className="control has-icons-left has-icons-right">
                  <input
                    className={classnames("input is-large has-text-grey-dark", {
                      "is-danger": errors.password
                    })}
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                    required={true}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock" />
                  </span>
                  {errors.password && (
                    <span className="icon is-small is-right">
                      <i className="fas fa-exclamation-triangle" />
                    </span>
                  )}
                  {errors.password && (
                    <div className="help is-danger">{errors.password}</div>
                  )}
                </div>
              </div>

              <div className="field is-grouped is-grouped-right">
                <p className="control">
                  <button
                    className="button is-success is-medium has-background-link"
                    type="submit"
                  >
                    Submit
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
export default Login;
