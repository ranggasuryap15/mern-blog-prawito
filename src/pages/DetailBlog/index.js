import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "../../components";
import Gap from "./../../components/atoms/Gap/index";
import "./detailBlog.scss";

const DetailBlog = (props) => {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;

  const [data, setData] = useState({});

  useEffect(() => {
    Axios.get(`http://localhost:4000/v1/blog/post/${id}`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [props, id]);

  if (data.author) {
    return (
      <div className="detail-blog-wrapper">
        <img
          className="img-cover"
          src={`http://localhost:4000/${data.image}`}
          alt="thumb"
        />
        <p className="blog-title">{data.title}</p>
        <p className="blog-author">
          {data.author.name} - {data.createdAt}
        </p>
        <div className="blog-body">
          <p>{data.body}</p>
        </div>
        <Gap height={20} />
        <Link title="kembali ke home" onClick={() => navigate("/")} />
      </div>
    );
  }

  return <p>Loading data...</p>;
};

export default DetailBlog;
