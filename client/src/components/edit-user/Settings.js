import React, { Component } from "react";
import Break from "./../elements/Break";
import classnames from "classnames";

export default class Settings extends Component {
  constructor() {
    super();
    this.state = {
      avatar: "",
      name: "",
      bio: "",
      email: "",
      password: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    //this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    this.setState({ errors: {} });
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="Settings">
        <Break times={2} />
        <h5 className="title is-2 has-text-centered has-text-grey-dark">
          Your Settings
        </h5>

        <div className="columns">
          <div className="column is-6 is-offset-3">
            <form>
              <div className="field">
                <div className="control has-icons-left">
                  <input
                    className="input is-large"
                    type="text"
                    placeholder="URL of Profile Picture"
                    name="avatar"
                    value={this.state.avatar}
                    onChange={this.onChange}
                  />
                  <span className="icon is-small is-left">
                    <i class="fas fa-link" />
                  </span>
                </div>
              </div>

              <div className="field">
                <div className="control has-icons-left has-icons-right">
                  <input
                    className={classnames("input is-large", {
                      "is-danger": errors.name
                    })}
                    type="text"
                    placeholder="User Name"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                  {errors.name && (
                    <span className="icon is-small is-right">
                      <i className="fas fa-exclamation-triangle" />
                    </span>
                  )}
                  {errors.name && (
                    <div className="help is-danger">{errors.name}</div>
                  )}
                  <span className="icon is-small is-left">
                    <i className="fas fa-user" />
                  </span>
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <textarea
                    className="textarea input is-large"
                    type="text"
                    placeholder="Short bio about you"
                    name="bio"
                    value={this.state.bio}
                    onChange={this.onChange}
                  />
                </div>
              </div>

              <div className="field">
                <div className="control has-icons-left has-icons-right">
                  <input
                    className={classnames("input is-large", {
                      "is-danger": errors.email
                    })}
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
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
                    className={classnames("input is-large", {
                      "is-danger": errors.password
                    })}
                    type="password"
                    placeholder="New Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
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
