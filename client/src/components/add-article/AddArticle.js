import React, { Component } from "react";
import Break from "./../elements/Break";
import classnames from "classnames";
import PropTypes from "prop-types";

class AddArticle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      subject: "",
      body: "",
      tags: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    this.setState({ errors: {} });
  }

  onSubmit(e) {
    e.preventDefault();
    const articleData = {
      title: this.state.title,
      subject: this.state.subject,
      body: this.state.body,
      tags: this.state.tags
    };
    this.props.onSubmit(articleData);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="Settings">
        <Break times={2} />
        <h5 className="title is-2 has-text-centered has-text-grey-dark">
          Add Article
        </h5>

        <div className="columns">
          <div className="column is-6 is-offset-3">
            <form onSubmit={this.onSubmit}>
              <div className="field">
                <div className="control has-icons-left has-icons-right">
                  <input
                    className={classnames("input is-large has-text-grey-dark", {
                      "is-danger": errors.title
                    })}
                    type="text"
                    placeholder="Article Title"
                    name="title"
                    value={this.state.title}
                    onChange={this.onChange}
                  />
                  {errors.title && (
                    <span className="icon is-small is-right">
                      <i className="fas fa-exclamation-triangle" />
                    </span>
                  )}
                  {errors.title && (
                    <div className="help is-danger">{errors.title}</div>
                  )}
                  <span className="icon is-small is-left">
                    <i className="fas fa-heading" />
                  </span>
                </div>
              </div>

              <div className="field">
                <div className="control has-icons-left has-icons-right">
                  <input
                    className={classnames("input is-large has-text-grey-dark", {
                      "is-danger": errors.subject
                    })}
                    type="text"
                    placeholder="What's this article about?"
                    name="subject"
                    value={this.state.subject}
                    onChange={this.onChange}
                  />
                  {errors.subject && (
                    <span className="icon is-small is-right">
                      <i className="fas fa-exclamation-triangle" />
                    </span>
                  )}
                  {errors.subject && (
                    <div className="help is-danger">{errors.subject}</div>
                  )}
                  <span className="icon is-small is-left">
                    <i className="fab fa-amilia" />
                  </span>
                </div>
              </div>

              <div className="field">
                <div className="control has-icons-right">
                  <textarea
                    className={classnames(
                      "textarea input is-large has-text-grey-dark",
                      {
                        "is-danger": errors.body
                      }
                    )}
                    type="text"
                    placeholder="Write your article (in markdown)"
                    name="body"
                    value={this.state.body}
                    onChange={this.onChange}
                  />
                  {errors.body && (
                    <span className="icon is-small is-right">
                      <i className="fas fa-exclamation-triangle" />
                    </span>
                  )}
                  {errors.body && (
                    <div className="help is-danger">{errors.body}</div>
                  )}
                </div>
              </div>

              <div className="field">
                <div className="control has-icons-left">
                  <input
                    className="input is-large has-text-grey-dark"
                    type="text"
                    placeholder="Enter space sperated tags"
                    name="tags"
                    value={this.state.tags}
                    onChange={this.onChange}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-tags" />
                  </span>
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

AddArticle.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

export default AddArticle;
