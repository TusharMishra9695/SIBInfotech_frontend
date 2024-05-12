import React from "react";

export default function Blog(props) {
  return (
    <div className="blog_post">
      <p>{Date(props.items.createdAt)}</p>
      <img src="/personal.jpg" alt="image" className="blog_img" />
      <h3>{props.items && props.items.title}</h3>
      <p>
        {props.items.description && props.items.description.length > 100
          ? props.items.description.slice(0, 100) + "..."
          : props.items.description}
      </p>
    </div>
  );
}
