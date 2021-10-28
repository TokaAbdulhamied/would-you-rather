import React from "react";
import { Tabs, Tab } from "@mui/material";
import { Route, BrowserRouter, Switch, Link } from "react-router-dom";

export default function Nav() {
  const routes = ["/", "/pilots", "/mechs", "/org"];
  return (
    <>
      <BrowserRouter>
        <Route
          path="/"
          render={(history) => (
            <Tabs
              aria-label="mini-mik "
              value={history.location.pathname}
              //   color="success.main"
              TabIndicatorProps={{
                style: {
                  backgroundColor: "secondry.main",
                },
              }}
            >
              <Tab
                label="Unit Info"
                value={routes[0]}
                component={Link}
                to={routes[0]}
              />
              <Tab
                label="Pilots"
                value={routes[1]}
                component={Link}
                to={routes[1]}
              />
              <Tab
                label="Mechs"
                value={routes[2]}
                component={Link}
                to={routes[2]}
              />
              <Tab
                label="Unit Organization"
                value={routes[3]}
                component={Link}
                to={routes[3]}
              />
            </Tabs>
          )}
        />

        <Switch>
          {/* <Route path="/" component={UnitInfo} exact />
          <Route path="/pilots" component={Pilots} />
          <Route path="/mechs" component={Mechs} />
          <Route path="/org" component={Org} /> */}
        </Switch>
      </BrowserRouter>
    </>
  );
}
