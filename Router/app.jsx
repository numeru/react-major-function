import React, { useState } from "react";
import { Link, Redirect, Route, Switch } from "react-router-dom";
import Page from "./page";
import Home from "./home";
import Setting from "./setting";

const App = () => {
  const [data, setData] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <Link to="/">home</Link>
      <Link to="/setting">setting</Link>
      <Link to="/page">page</Link>

      <Switch>
        <Route exact path="/" component={Home} />

        <Route
          exact
          path="/setting"
          render={(props) => {
            if (loggedIn) return <Setting {...props} data={data} />;
            else
              return (
                <Redirect
                  to={{
                    pathname: "/",
                    state: { from: props.location },
                  }}
                />
              );
          }}
        />

        <Route exact path="/page">
          {loggedIn ? <Page data={data} /> : <Redirect to="/" />}
        </Route>

        <Route
          render={({ location }) => (
            <div>
              <h3>이 페이지는 존재하지 않습니다.</h3>
              {location.pathname}
            </div>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
