import React, { useState } from "react";

import { Link } from "react-router-dom";

import cls from "./home.module.scss";

interface HomeItemProps {}

const HomeItem: React.FC<HomeItemProps> = () => {
  return (
    <div className={cls.wrapper}>
      <div className={cls.container}>
        <div className={cls.title}>
          <h1>Hello There</h1>
          <h3>Welcome to React User App</h3>
        </div>
        <div className={cls.buttons}>
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeItem;
