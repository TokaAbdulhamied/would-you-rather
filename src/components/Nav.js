import React from "react";
import { Tabs, Tab, Typography } from "@mui/material";
import { Route, BrowserRouter, Switch, Link } from "react-router-dom";
import Login from "./Login";
export default function Nav() {
  const routes = ["/", "/new-quistion", "/leaders", "/login"];
  return (
    <>
      <BrowserRouter>
        <Route
          path="/"
          render={(history) => (
            <Tabs
              aria-label="mini-mik "
              value={history.location.pathname}
              color="theme.palette.secondary.main"
              TabIndicatorProps={{
                style: {
                  backgroundColor: "theme.palette.secondary.main",
                },
              }}
            >
              <Tab
                label="Home"
                value={routes[0]}
                component={Link}
                to={routes[0]}
              />
              <Tab
                label="New Quistion"
                value={routes[1]}
                component={Link}
                to={routes[1]}
              />
              <Tab
                label="Leaderboard"
                value={routes[2]}
                component={Link}
                to={routes[2]}
              />
              <Tab
                label="Logout"
                value={routes[3]}
                component={Link}
                to={routes[3]}
              />
            </Tabs>
          )}
        />

        <Switch>
          {/* <Route path="/" component={Home} exact />
          <Route path="/new-quistion" component={NewQuistion} />
          <Route path="/leaders" component={Leaderborad} /> */}
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
