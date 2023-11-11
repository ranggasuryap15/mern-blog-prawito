import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Gap, Input, Link, TextArea, Upload } from "../../components";
import {
  postToApi,
  setForm,
  setImgPreview,
  updateToApi,
} from "../../config/redux/action";
import "./createBlog.scss";

const CreateBlog = (props) => {
  const navigate = useNavigate();
  const { form, imgPreview } = useSelector((state) => state.createBlogReducer);
  const { title, body } = form;
  const [isUpdate, setIsUpdate] = useState(false);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      setIsUpdate(true);
      Axios.get(`http://localhost:4000/v1/blog/post/${params.id}`)
        .then((result) => {
          const data = result.data.data;

          dispatch(setForm("title", data.title));
          dispatch(setForm("body", data.body));
          dispatch(setImgPreview(`http://localhost:4000/${data.image}`));
        })
        .catch((err) => console.log(err));
    }
  }, [props, params.id, dispatch]);

  const onSubmit = () => {
    if (isUpdate) updateToApi(form, params.id);
    else postToApi(form);
  };

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    dispatch(setForm("image", file));
    dispatch(setImgPreview(URL.createObjectURL(file)));
  };

  return (
    <div className="blog-post">
      <Link title="Kembali" onClick={() => navigate("/")} />
      <p className="title">{isUpdate ? "Update" : " Create New"} Blog Post</p>
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
        <Button title={isUpdate ? "Update" : "Save"} onClick={onSubmit} />
      </div>
    </div>
  );
};

export default CreateBlog;
