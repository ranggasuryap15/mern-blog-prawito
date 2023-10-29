import React from "react";
import { LoginBg } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";

const Login = () => {
  return (
    <div className="main-page">
      <div className="left">
        <img src={LoginBg} alt="register-bg" className="bg-image" />
      </div>
      <div className="right">
        <p className="title">Login</p>
        <Input label="Email" placeholder="Email" />
        <Gap height={16} />
        <Input label="Password" placeholder="Password" />
        <Gap height={25} />
        <Button title="Register" />
        <Gap height={10} />
        <Link title="Kembali ke Register" />
      </div>
    </div>
  );
};

export default Login;
