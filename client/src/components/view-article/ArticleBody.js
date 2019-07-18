import React from "react";

export default function ArticleBody(props) {
  const renderTags = tags => {
    const items = [];
    for (let i = 0; i < tags.length; i++) {
      items.push(
        <span key={i} className="tag is-normal">
          {tags[i]}
        </span>
      );
    }
    return items;
  };
  return (
    <div>
      <h1 className="has-text-grey-dark subtitle is-6">{props.body}</h1>
      <div className="tags are-medium">{renderTags(props.tags)}</div>
      <hr />
    </div>
  );
}
