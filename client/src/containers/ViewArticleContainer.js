import React, { Component } from "react";
import { connect } from "react-redux";

import ViewArticle from "../components/view-article/ViewArticle";

import { getArticle } from "./../actions/articleActions";

import { DEFAULT_USER_IMG_URL } from "./../config/constants";

class ViewArticleContainer extends Component {
  componentDidMount() {
    this.props.getArticle(this.props.match.params.id);
  }
  render() {
    return (
      <ViewArticle
        auth={this.props.auth}
        errors={this.props.errors}
        article={this.props.article}
        DEFAULT_USER_IMG_URL={DEFAULT_USER_IMG_URL}
      />
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  article: state.article
});

export default connect(
  mapStateToProps,
  { getArticle }
)(ViewArticleContainer);
