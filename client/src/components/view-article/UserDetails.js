import React from "react";
import PropTypes from "prop-types";

UserDetails.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

export default function UserDetails(props) {
  return (
    <div>
      <div className="media">
        <figure className="media-left">
          <div className="image is-64x64">
            <img className="is-rounded" src={props.src} alt="" />
          </div>
        </figure>
        <div className="media-content">
          <div className="content">
            <div>
              <div>
                <strong className={props.color}>{props.name}</strong>
              </div>
              <div>
                <small className={props.datecolor} style={{ fontSize: "11px" }}>
                  {props.date}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
