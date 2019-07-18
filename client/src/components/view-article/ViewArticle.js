import React, { Component } from "react";

import PropTypes from "prop-types";

import UserDetails from "./UserDetails";
import ArticleSection from "./ArticleSection";
import ArticleBody from "./ArticleBody";
import ArticleComments from "./ArticleComments";

import Spinner from "./../common/Spinner";
import Break from "./../elements/Break";

import moment from "moment";

class ViewArticle extends Component {
  userDetailsHolder = (userDetails_text_color, userDetails_date_color) => {
    return (
      <div className="field is-grouped ">
        <div className="control">
          <UserDetails
            src="/default_user.png"
            name={this.props.article.user.name}
            date={moment(this.props.article.data.date).format("LL")}
            color={userDetails_text_color}
            datecolor={userDetails_date_color}
          />
        </div>
        <div className="control">
          <span className="icon is-small has-text-grey-dark">
            <i className="far fa-edit" />
          </span>
        </div>
        <div className="control">
          <span className="icon is-small has-text-grey-dark">
            <i className="fa fa-trash" />
          </span>
        </div>
      </div>
    );
  };

  getContent = () => {
    return (
      <div className="viewArticle">
        <ArticleSection
          body={this.userDetailsHolder("has-text-white-ter", "has-text-grey")}
          title={this.props.article.data.title}
        />
        <Break times={1} />
        <div className="container">
          <ArticleBody
            body={this.props.article.data.body}
            tags={this.props.article.data.tags}
          />

          <div className="columns">
            <div className="column is-offset-5">
              {this.userDetailsHolder(
                "has-text-grey-darker",
                "has-text-grey-dark"
              )}
            </div>
          </div>
          <ArticleComments />
        </div>
      </div>
    );
  };

  render() {
    return this.props.article.loading ? <Spinner /> : this.getContent();
  }
}

ViewArticle.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  article: PropTypes.object.isRequired
};

export default ViewArticle;
