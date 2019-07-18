import React, { Component } from "react";

import UserDetails from "./UserDetails";

class ViewArticle extends Component {
  renderTags = tags => {
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

  render() {
    const tags = ["tag1", "tag1", "tag1"];

    return (
      <div className="viewArticle">
        <section className="hero has-background-success">
          <div className="hero-body">
            <div className="container">
              <h1 className="title has-text-white is-2">article.title</h1>

              <div className="field is-grouped ">
                <div className="control">
                  <UserDetails
                    src="/default_user.png"
                    name="maira"
                    date="July 15, 2019"
                    color="has-text-white-ter"
                    datecolor="has-text-grey"
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
            </div>
          </div>
        </section>
        <br />
        <div className="container">
          <h1 className="has-text-grey-dark subtitle is-6">article.body</h1>
          <div className="tags are-medium">{this.renderTags(tags)}</div>
          <hr />
          <div className="columns">
            <div className="column is-offset-5">
              <div className="field is-grouped is-grouped-center">
                <div className="control">
                  <UserDetails
                    src="/default_user.png"
                    name="maira"
                    date="July 15, 2019"
                    color="has-text-black"
                    datecolor="has-text-grey-dark"
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
            </div>
          </div>

          <div className="AddComment">
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
                          <button className="button is-success">
                            Post Comment
                          </button>
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
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Proin ornare magna eros, eu pellentesque
                              tortor vestibulum ut. Maecenas non massa sem.
                              Etiam finibus odio quis feugiat facilisis.
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
        </div>
      </div>
    );
  }
}

export default ViewArticle;
