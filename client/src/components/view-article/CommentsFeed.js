import React from "react";

export default function CommentsFeed() {
  return (
    <div className="CommentBox" style={{ marginTop: "20px" }}>
      <article className="media">
        <figure className="media-left">
          <p className="image is-64x64">
            <img
              className="is-rounded"
              src="https://bulma.io/images/placeholders/128x128.png"
              alt=""
            />
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>John Smith</strong>{" "}
              <small style={{ fontSize: "11px" }}>15 july, 2019</small>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas
              non massa sem. Etiam finibus odio quis feugiat facilisis.
            </p>
          </div>
        </div>
        <div className="media-right">
          <button className="delete" />
        </div>
      </article>
    </div>
  );
}
