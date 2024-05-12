import React, { useEffect, useState } from "react";
import { getAPI } from "../utils/apiCalls";
import Blog from "../components/Blog";
import Nav from "../components/Nav";

export default function BlogList() {
  const [blogList, setblogList] = useState("");
  useEffect(() => {
    handleBlogs();
  }, []);
  function handleBlogs() {
    getAPI(`http://localhost:5000/api/blog?category=personal`).then((res) => {
      setblogList(res.result);
    });
  }
  return (
    <div>
      <Nav />
      <div className="blog_list">
        {blogList &&
          blogList.map((items, id) => {
            return <Blog items={items} key={id} />;
          })}
      </div>
    </div>
  );
}
