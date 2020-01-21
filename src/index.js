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
import {LocalAPI} from "./api/LocalAPI";

export default class Global {
    static _api;

    static getAPI() {
        return this._api;
    }

    static setAPI(api) {
        this._api = api;
    }
}

// if (localStorage.getItem('token') !== null) {
//     Global.setAPI(new GraphQLAPI());
// } else {
//     Global.setAPI(new LocalAPI());
// }
// Global.getAPI().init();

LocalAPI.init();

console.log('API initialized! ');


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
            path="/logout"
            exact
            render={props => {
              API.logout();
              return <Redirect to="/login" />;
            }}
        />
        <Route path="/home" exact render={props => <Home {...props} />} />
        <Route path="/quests/:id" render={props => <Quests {...props} />} />
        <Route
            path="/achievements"
            exact
            render={props => <Achievements {...props} />}
        />
        <Route path="/news" exact render={props => <News {...props} />} />
        <Route path="/markets" exact render={props => <Markets {...props} />} />

        <Redirect to="/" />
      </Switch>
    </BrowserRouter>,
    document.getElementById("root")
);
