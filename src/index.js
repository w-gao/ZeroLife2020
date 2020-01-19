import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/argon-design-system-react.css";

import Index from "views/Index.jsx";
import Login from "views/Login.jsx";
import Register from "views/Register.jsx";
import Home from "./views/Home";
import Quests from "./views/Quests";
import Achievements from "./views/Achievements";
import News from "./views/News";
import Markets from "./views/Markets";
import {API} from "./api/API";

ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={props => <Index {...props} />} />
        <Route path="/login" exact render={props => <Login {...props} />} />
        <Route
            path="/register"
            exact
            render={props => <Register {...props} />}
        />
        <Route
            path="/home"
            exact
            render={props => API.isLoggedIn() ? <Home {...props } /> : <Redirect to='/login' /> }
        />
        <Route
            path="/quests/:id"
            render={props => API.isLoggedIn() ? <Quests {...props } /> : <Redirect to='/login' /> }
        />
        <Route
            path="/achievements"
            exact
            render={props => API.isLoggedIn() ? <Achievements {...props } /> : <Redirect to='/login' /> }
        />
        <Route
            path="/news"
            exact
            render={props => API.isLoggedIn() ? <News {...props } /> : <Redirect to='/login' /> }
        />
        <Route
            path="/markets"
            exact
            render={props => API.isLoggedIn() ? <Markets {...props } /> : <Redirect to='/login' /> }
        />

        <Redirect to="/" />
      </Switch>
    </BrowserRouter>,
    document.getElementById("root")
);
