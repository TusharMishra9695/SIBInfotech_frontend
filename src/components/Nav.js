import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <nav className="nav">
        <Link to={`/?category=personal`}>
          <span>Personal</span>
        </Link>
        <Link to={`/?category=technology`}>
          <span>Technology</span>
        </Link>
        <Link to={`/?category=travel`}>
          <span>Travel</span>
        </Link>
        <Link to={`/?category=other`}>
          <span>Other</span>
        </Link>
      </nav>
    </div>
  );
}
