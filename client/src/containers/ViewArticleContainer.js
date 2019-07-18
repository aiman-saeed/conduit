import React, { Component } from "react";
import { connect } from "react-redux";

import ViewArticle from "../components/view-article/ViewArticle";

import { getArticle } from "./../actions/articleActions";

class ViewArticleContainer extends Component {
  componentDidMount() {
    this.props.getArticle(this.props.match.params.id);
  }
  render() {
    return <ViewArticle />;
  }
}

export default connect(
  null,
  { getArticle }
)(ViewArticleContainer);
