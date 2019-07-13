import React from "react";
import { Link } from "react-router-dom";

export default function NavbarUnauthenticated(props) {
  const { config } = props;
  return (
    <div className="buttons">
      <Link
        className="button is-primary has-background-success"
        to={config.SIGNUP_URL}
      >
        <strong>{config.SIGNUP_TEXT}</strong>
      </Link>
      <Link className="button is-light" to={config.LOGIN_URL}>
        {config.LOGIN_TEXT}
      </Link>
    </div>
  );
}
