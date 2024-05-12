import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <nav className="nav">
        <Link to={`/`}>
          <span>Personal</span>
        </Link>
        <Link to={`/`}>
          <span>Technology</span>
        </Link>
        <Link to={`/`}>
          <span>Travel</span>
        </Link>
        <Link to={`/`}>
          <span>Other</span>
        </Link>
      </nav>
    </div>
  );
}
