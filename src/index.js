/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './redux/store';

import AdminLayout from "layouts/Admin/Admin.js";

import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import ThemeContextWrapper from "./components/ThemeWrapper/ThemeWrapper";
import BackgroundColorWrapper from "./components/BackgroundColorWrapper/BackgroundColorWrapper";
import { initFluence } from "./redux/fluence/action";

initFluence();

ReactDOM.render(
  <Provider store={store}>
    <ThemeContextWrapper>
      <BackgroundColorWrapper>
        <BrowserRouter>
          <Switch>
            <Route path="/" render={(props) => <AdminLayout {...props} />} />
            <Redirect from="/" to="/datasets" />
          </Switch>
        </BrowserRouter>
      </BackgroundColorWrapper>
    </ThemeContextWrapper>
  </Provider>,
  document.getElementById("root")
);
