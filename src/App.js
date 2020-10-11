import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import HomeTemplate from "./template/HomeTemplate";
import AdminTemplate from "./template/AdminTemplate";
import { RoutesHome, RoutesAdmin } from "./routes";
import PageNotFound from "./containers/PageNotFound";
import ChonGhe from "./containers/Home/ChonGhe";
import login from "./containers/Admin/Auth/templates/login";
import signup from "./containers/Admin/Auth/templates/sign-up";

function App() {
  const showMenuHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <HomeTemplate
            key={index}
            path={item.path}
            exact={item.exact}
            Component={item.component}
          />
        );
      });
    }
  };

  const showMenuAdmin = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <AdminTemplate
            key={index}
            path={item.path}
            exact={item.exact}
            Component={item.component}
          />
        );
      });
    }
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={login} />
        <Route path="/sign-up" component={signup} />
        {showMenuHome(RoutesHome)}
        <Route path="/chon-ghe/:id" component={ChonGhe} />
        <Route path="" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
