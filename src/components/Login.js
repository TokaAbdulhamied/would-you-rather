import React from "react";
import { makeStyles } from "@mui/styles";
import UsersMenu from "./UsersMenu";
import { grey } from "@mui/material/colors";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
  Button,
} from "@mui/material";

const useStyles = makeStyles({
  card: {
    maxWidth: 500,
    display: "flex",
    flexDirection: "column",
  },
  img: {
    margin: "15px auto 15px auto",
    width: "75%",
    height: "75%",
  },
  header: {
    backgroundColor: grey[200],
    color: "rgba(0, 0, 0, 0.87)",
    height: "40px",
  },
  content: {
    flex: "1 1 120px",
    display: "flex ",
    flexDirection: "column",
    justifyContent: "space-between",
  },
});

export default function Login() {
  const classes = useStyles();
  return (
    <div>
      <Card variant="outlined" className={classes.card}>
        <CardHeader
          className={classes.header}
          titleTypographyProps={{ variant: "h6" }}
          title="Welcome to the Would You Rather App!"
          subheader="Please sign in to continue"
        />
        <CardMedia
          className={classes.img}
          component="img"
          image="\images\download.png"
          alt="animals"
        />
        <CardContent className={classes.content}>
          <UsersMenu />
          <Button sx={{ py: 1.5 }} className={classes.btn} variant="contained">
            Sign In
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
