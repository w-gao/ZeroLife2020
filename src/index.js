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
import { API } from "./api/API";
import { LocalAPI } from "./api/LocalAPI";

import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";

const httpLink = createHttpLink({
  uri: "https://lobitos-fxuevruz4a-uc.a.run.app/"
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ""
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

LocalAPI.init();

ReactDOM.render(
  <ApolloProvider client={client}>
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
    </BrowserRouter>{" "}
  </ApolloProvider>,
  document.getElementById("root")
);
