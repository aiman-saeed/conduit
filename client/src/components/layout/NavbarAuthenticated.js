import React from "react";
import { Link } from "react-router-dom";

export default function NavbarUnauthenticated(props) {
  const { config } = props;

  let { PROFILE_URL } = config;
  PROFILE_URL += "/" + config.USERNAME;

  return (
    <div>
      <Link className=" button is-light" to={config.NEWARTICLE_URL}>
        <span className="icon has-text-success">
          <i className="fas fa-edit" />
        </span>
        <span className="has-text-success">{config.ARTICLE_ACTION_TEXT}</span>
      </Link>

      <Link className=" button is-light" to={config.SETTINGS_URL}>
        <span className="icon has-text-link">
          <i className="fas fa-cog" />
        </span>

        <span className="has-text-link">{config.SETTINGS_TEXT} </span>
      </Link>

      <Link className="button is-light has-text-grey" to={PROFILE_URL}>
        <div className="columns">
          <div className="column is-1 is-offset-2">
            <figure className="image is-24x24">
              {!config.AVATAR_IMG_URL && (
                <img
                  className="is-rounded"
                  alt=""
                  src={config.DEFAULT_USER_IMG_URL}
                />
              )}
              {config.AVATAR_IMG_URL && (
                <img
                  className="is-rounded"
                  alt=""
                  src={config.AVATAR_IMG_URL}
                />
              )}
            </figure>
          </div>
          <div className="column">
            <span>
              <strong> {config.USERNAME} </strong>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
