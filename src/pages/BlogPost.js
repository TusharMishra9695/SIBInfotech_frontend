import React, { useEffect, useState } from "react";
import { getAPI } from "../utils/apiCalls";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";

export default function BlogPost() {
  const [detail, setDetail] = useState("");
  useEffect(() => {
    handleGetBlogDetail();
  }, []);
  function handleGetBlogDetail() {
    getAPI(
      `http://localhost:5000/api/blog?${window.location.pathname.slice(1)}`
    ).then((res) => {
      setDetail(res.result[0]);
    });
  }
  return (
    <>
      <Nav />
      {detail && (
        <div className="post_Detail">
          <Link to="/">
            <button className="back_btn">Back</button>
          </Link>
          <h2>{detail.title}</h2>
          <p>{detail.description}</p>
        </div>
      )}
    </>
  );
}
