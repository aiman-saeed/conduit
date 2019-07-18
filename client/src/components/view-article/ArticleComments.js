import React from "react";

export default function ArticleComments() {
  return (
    <div className="Comments">
      <div className="columns">
        <div className="column is-three-fifths is-offset-one-fifth">
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
              <div className="field">
                <p className="control">
                  <textarea
                    className="textarea"
                    placeholder="Add a comment..."
                  />
                </p>
              </div>
              <nav className="level">
                <div className="level-left">
                  <div className="level-item" />
                </div>
                <div className="level-right">
                  <div className="level-item">
                    <button className="button is-success">Post Comment</button>
                  </div>
                </div>
              </nav>

              <div className="CommentBox">
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
                        <small style={{ fontSize: "11px" }}>
                          15 july, 2019
                        </small>
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin ornare magna eros, eu pellentesque tortor
                        vestibulum ut. Maecenas non massa sem. Etiam finibus
                        odio quis feugiat facilisis.
                      </p>
                    </div>
                  </div>
                  <div className="media-right">
                    <button className="delete" />
                  </div>
                </article>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
