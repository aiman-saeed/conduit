import React from "react";

export default function AddCommentAvatar(props) {
  return (
    <figure className="media-left">
      <p className="image is-64x64">
        <img className="is-rounded" src={props.avatar} alt="" />
      </p>
    </figure>
  );
}
