import React from "react";
import { RegisterBg } from "../../../assets";
import "./blogItem.scss";

const BlogItem = () => {
  return (
    <div className="blog-item">
      <img className="image-thumb" src={RegisterBg} alt="post" />
      <div className="content-detail">
        <p className="title">Title Blog</p>
        <p className="author">Author - Date Post</p>
        <p className="body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
          veritatis numquam a rem at harum. Non, dolorum possimus totam minima
          maxime repudiandae praesentium, nam, commodi asperiores sit deserunt!
          Itaque, vitae!
        </p>
      </div>
    </div>
  );
};

export default BlogItem;
