import React from "react";

export default function ArticleSection(props) {
  return (
    <section className="hero has-background-success">
      <div className="hero-body">
        <div className="container">
          <h1 className="title has-text-white is-2">{props.title}</h1>
          {props.body}
        </div>
      </div>
    </section>
  );
}
