import React from "react";
import { Link } from "react-router-dom";

export default function Blog(props) {
  return (
    <div className="blog_post">
      <p>{Date(props.items.createdAt) || "13 May 2024"}</p>
      <Link to={`/_id=${props.items._id}`}>
        <img src="/personal.jpg" alt="image" className="blog_img" />
      </Link>
      <h3>{(props.items && props.items.title) || "Title Fetching"}</h3>
      <p>
        {props.items.description && props.items.description.length > 100
          ? props.items.description.slice(0, 100) + "..."
          : props.items.description}
      </p>
    </div>
  );
}
