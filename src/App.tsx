import React from "react";
import { Route, Switch } from "react-router-dom";
import HomeItem from "./components/home/home";

import cls from "./App.module.scss";

import RegisterItem from "./components/register/register";
import LoginItem from "./components/login/login";

const App: React.FC = () => {
  return (
    <div className={cls.wrapper}>
      <Switch>
        <Route exact path="/" component={() => <HomeItem />} />
        <Route exact path="/login" component={() => <LoginItem/>}></Route>
        <Route
          exact
          path="/register"
          component={() => <RegisterItem />}
        ></Route>
      </Switch>
    </div>
  );
};

export default App;
