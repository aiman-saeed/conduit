import React, { Component } from "react";
import { connect } from "react-redux";

import AddArticle from "../components/add-article/AddArticle";

import { addArticle } from "./../actions/articleActions";

export class AddArticleContainer extends Component {
  onSubmit = userData => {
    console.log("Article Submited");
    console.log(userData);
    this.props.addArticle(userData);
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
)(AddArticleContainer);
