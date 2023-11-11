import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setDataBlog } from "../../config/redux/action";
import { BlogItem, Button, Gap } from "./../../components/";
import "./home.scss";

const Home = () => {
  // [namaState, method untuk mengubah state]
  const { dataBlog } = useSelector((state) => state.HomeReducer); // home reducer
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDataBlog());
  }, [dispatch]);

  const navigate = useNavigate();
  return (
    <div className="home-page-wrapper">
      <div className="create-wrapper">
        <Button title="Create Blog" onClick={() => navigate("/create-blog")} />
      </div>
      <Gap height={20} />
      <div className="content-wrapper">
        {dataBlog.map((blog) => {
          return (
            <BlogItem
              key={blog._id}
              image={`http://localhost:4000/${blog.image}`}
              title={blog.title}
              body={blog.body}
              name={blog.author.name}
              date={blog.createdAt}
            />
          );
        })}
      </div>
      <div className="pagination">
        <Button title="Previous" />
        <Gap width={20} />
        <Button title="Next" />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default Home;
