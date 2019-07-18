import React, { Component } from "react";
import { addComment } from "./../../actions/commentActions";

import { connect } from "react-redux";

class AddCommentForm extends Component {
  constructor() {
    super();
    this.state = {
      body: "",
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
    const commentData = {
      body: this.state.body
    };
    this.props.addComment(this.props.article_id, commentData);
    this.setState({ body: "", errors: "" });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    this.setState({ errors: {} });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="field">
          <p className="control">
            <textarea
              className="textarea input has-text-grey-dark"
              type="text"
              name="body"
              placeholder="Add a comment..."
              value={this.state.body}
              onChange={this.onChange}
            />
          </p>
        </div>

        <nav className="level">
          <div className="level-left">
            <div className="level-item" />
          </div>
          <div className="level-right">
            <div className="level-item">
              <button className="button is-success" type="submit">
                Post Comment
              </button>
            </div>
          </div>
        </nav>
      </form>
    );
  }
}

export default connect(
  null,
  { addComment }
)(AddCommentForm);
