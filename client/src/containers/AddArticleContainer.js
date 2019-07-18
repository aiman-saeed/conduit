import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import AddArticle from "../components/add-article/AddArticle";

import { addArticle } from "./../actions/articleActions";

export class AddArticleContainer extends Component {
  onSubmit = userData => {
    this.props.addArticle(userData, this.props.history);
  };

  render() {
    return <AddArticle errors={this.props.errors} onSubmit={this.onSubmit} />;
  }
}

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addArticle }
)(withRouter(AddArticleContainer));
