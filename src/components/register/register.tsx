import React from "react";

import cls from "./register.module.scss";

interface RegisterItemProps {}

const RegisterItem: React.FC<RegisterItemProps> = () => {
  return (
    <div className={cls.wrapper}>
      <div className={cls.container}>
        <div className={cls.title}>
          <h1>Register</h1>
        </div>
        <div className={cls["form-login"]}>
          <form action="">
            <div className={cls["input-first-name"]}>
              <label htmlFor="First Name">First Name</label>
              <input
                type="text"
                name="name"
                placeholder="enter your first name"
              />
            </div>
            <div className={cls["input-last-name"]}>
              <label htmlFor="Last Name">Last Name</label>
              <input
                type="text"
                name="name"
                placeholder="enter your last name"
              />
            </div>
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
          </form>
            <button>Register</button>
        </div>
      </div>
    </div>
  );
};

export default RegisterItem;
