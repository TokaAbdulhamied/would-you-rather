import React from "react";
import UsersMenu from "./UsersMenu";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import { useStyles } from "../utils/styles";

export const CardHead = ({ subheader = "", ...props }) => {
  const classes = useStyles(props.style);
  return (
    <CardHeader
      className={classes.header}
      titleTypographyProps={{ variant: props.varient }}
      title={props.title}
      subheader={subheader}
    />
  );
};
