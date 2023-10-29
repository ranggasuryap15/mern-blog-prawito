import React from "react";
import { RegisterBg } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";
import "./register.scss";

const Register = () => {
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
        <Link title="Kembali ke Login" />
      </div>
    </div>
  );
};

export default Register;