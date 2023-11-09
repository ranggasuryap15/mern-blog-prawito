import React from "react";
import { useNavigate } from "react-router-dom";
import { RegisterBg } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";
import "./register.scss";

const Register = () => {
  const navigate = useNavigate();
  return (
    <div className="main-page">
      <div className="left">
        <img src={RegisterBg} alt="register-bg" className="bg-image" />
      </div>
      <div className="right">
        <p className="title">Register</p>
        <Input label="Fullname" placeholder="Full Name" />
        <Gap height={16} />
        <Input label="Email" placeholder="Email" />
        <Gap height={16} />
        <Input label="Password" placeholder="Password" />
        <Gap height={25} />
        <Button title="Register" />
        <Gap height={10} />
        <Link
          title="Belum punya akun? Silakan Daftar"
          onClick={() => navigate("/login")}
        />
      </div>
    </div>
  );
};

export default Register;
