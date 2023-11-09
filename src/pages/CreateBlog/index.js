import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Gap, Input, Link, TextArea, Upload } from "../../components";
import "./createBlog.scss";

const CreateBlog = () => {
  const navigate = useNavigate();
  return (
    <div className="blog-post">
      <Link title="Kembali" onClick={() => navigate("/")} />
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
