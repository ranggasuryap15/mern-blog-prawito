import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Gap, Input, Link, TextArea, Upload } from "../../components";
import { postToApi, setForm, setImgPreview } from "../../config/redux/action";
import "./createBlog.scss";

const CreateBlog = () => {
  const navigate = useNavigate();
  const { form, imgPreview } = useSelector((state) => state.createBlogReducer);
  const { title, body } = form;
  const dispatch = useDispatch();

  const onSubmit = () => postToApi(form);

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    dispatch(setForm("image", file));
    dispatch(setImgPreview(URL.createObjectURL(file)));
  };

  return (
    <div className="blog-post">
      <Link title="Kembali" onClick={() => navigate("/")} />
      <p className="title">Create New Blog Post</p>
      <Input
        label="Post Title"
        value={title}
        onChange={(e) => dispatch(setForm("title", e.target.value))}
      />
      <Upload onChange={(e) => onImageUpload(e)} img={imgPreview} />
      <Gap height={10} />
      <TextArea
        value={body}
        onChange={(e) => dispatch(setForm("body", e.target.value))}
      />
      <Gap height={10} />
      <div className="button-action">
        <Button title="Save" onClick={onSubmit} />
      </div>
    </div>
  );
};

export default CreateBlog;
