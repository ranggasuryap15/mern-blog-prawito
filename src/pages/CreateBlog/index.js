import React from "react";
import { Button, Gap, Input, TextArea, Upload } from "./../../components";
import "./createBlog.scss";

const CreateBlog = () => {
  return (
    <div className="blog-post">
      <p className="title">Create New Blog Post</p>
      <Input label="Post Title" />
      <Upload />
      <Gap height={10} />
      <TextArea />
      <Gap height={10} />
      <div className="button-action">
        <Button title="Save" />
      </div>
    </div>
  );
};

export default CreateBlog;
