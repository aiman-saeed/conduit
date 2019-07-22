import React from "react";

import { Link } from "react-router-dom";

import AddCommentAvatar from "./AddCommentAvatar";
import AddCommentForm from "./AddCommentForm";
import CommentsFeed from "./CommentsFeed";

export default function ArticleComments(props) {
  const actionLinks = () => {
    const { LOGIN_URL, SIGNUP_URL } = props.authLinks;
    return (
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <hr />
        <h1 className="is-title is-1">
          <Link to={LOGIN_URL}>Sign In</Link> or{" "}
          <Link to={SIGNUP_URL}>Sign Up</Link> to add comments on this article.
        </h1>
      </div>
    );
  };

  return (
    <div className="Comments">
      <div className="columns">
        <div className="column is-three-fifths is-offset-one-fifth">
          <article className="media">
            <AddCommentAvatar avatar={props.avatar} />
            <div className="media-content">
              <AddCommentForm article_id={props.article_id} />
              {props.auth.isAuthenticated ? <CommentsFeed /> : actionLinks()}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
