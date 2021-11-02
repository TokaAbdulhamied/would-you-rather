import React from "react";
import { Tabs, Tab, Typography } from "@mui/material";
import {
  Route,
  BrowserRouter,
  Switch,
  Link,
  useLocation,
} from "react-router-dom";
import Login from "./Login";
import UserCard from "./UserCard";
export default function Nav() {
  const routes = ["/home", "/new-quistion", "/leaders", "/login"];

  const location = useLocation();
  const { pathname } = location;
  return (
    <>
      <Tabs
        aria-label="mini-mik "
        value={pathname}
        color="theme.palette.secondary.main"
        TabIndicatorProps={{
          style: {
            backgroundColor: "theme.palette.secondary.main",
          },
        }}
      >
        <Tab label="Home" value={routes[0]} component={Link} to={routes[0]} />
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
        <Tab label="Logout" value={routes[3]} component={Link} to={routes[3]} />
      </Tabs>
    </>
  );
}
