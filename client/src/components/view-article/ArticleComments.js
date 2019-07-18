import React from "react";

import AddCommentAvatar from "./AddCommentAvatar";
import AddCommentForm from "./AddCommentForm";
import CommentsFeed from "./CommentsFeed";

export default function ArticleComments(props) {
  return (
    <div className="Comments">
      <div className="columns">
        <div className="column is-three-fifths is-offset-one-fifth">
          <article className="media">
            <AddCommentAvatar avatar={props.avatar} />
            <div className="media-content">
              <AddCommentForm article_id={props.article_id} />
              <CommentsFeed />
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
