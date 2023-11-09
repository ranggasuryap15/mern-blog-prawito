import React from "react";

<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
import { RegisterBg } from "../../assets";
import { Link } from "../../components";
import Gap from "./../../components/atoms/Gap/index";
=======
import { RegisterBg } from "../../assets";
>>>>>>> 26c539876946f3c1f45190729ec840314369a0b0
import "./detailBlog.scss";

const DetailBlog = () => {
  const navigate = useNavigate();
  return (
    <div className="detail-blog-wrapper">
      <img className="img-cover" src={RegisterBg} alt="thumb" />
      <p className="blog-title">Title Blog</p>
      <p className="blog-author">Author - Date Post</p>
      <div className="blog-body">
        <p className="blog-body">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis,
          qui. Similique voluptate sed praesentium. Voluptatem molestiae
          obcaecati ut reiciendis? Quam nesciunt ab a id labore quia fugiat
          minus, fugit iure. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Praesentium, odit accusantium, eos reprehenderit sapiente maxime
          dignissimos vero tempore libero explicabo consequatur aliquid,
          possimus minus tenetur. Dicta reiciendis molestias officiis vel. Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Sit libero nobis
          eveniet eaque porro dolores vitae incidunt quos impedit aliquid, nemo
          delectus voluptates? Nobis mollitia, ab fuga deserunt facilis
          voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Doloribus deserunt veritatis esse, sit earum a pariatur eius ipsum
          saepe! Sunt odit tempore asperiores eum error quisquam saepe fuga
          veritatis officiis? Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Laudantium nesciunt in natus. A quibusdam veniam
          repellat totam quos, cumque debitis natus quisquam error voluptates.
          Error perspiciatis repudiandae dicta beatae voluptates? Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Necessitatibus quas
          praesentium officiis, quaerat in voluptate ex exercitationem culpa
          quidem quae dignissimos laboriosam, vero saepe! Voluptas odio
          necessitatibus tempora recusandae laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          delectus accusantium sequi asperiores, facilis eaque laborum facere
          voluptatum officia dolore vitae repellendus est nihil dolorem amet id
          doloremque maiores aut.
        </p>
      </div>
      <Gap height={20} />
      <Link title="kembali ke home" onClick={() => navigate("/")} />
    </div>
  );
};

export default DetailBlog;
