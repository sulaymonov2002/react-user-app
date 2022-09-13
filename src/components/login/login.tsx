import React, { useState } from "react";

import cls from "./login.module.scss";

interface LoginItemProps {}

const LoginItem: React.FC<LoginItemProps> = () => {
  return (
    <div className={cls.wrapper}>
      <div className={cls.container}>
        <div className={cls.text}>
          <h1>Login</h1>
        </div>
        <div className={cls["form-login"]}>
          <form action="">
            <div className={cls["input-email"]}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="enter your email address"
              />
            </div>
            <div className={cls["input-password"]}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="enter your password"
              />
            </div>
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginItem;
