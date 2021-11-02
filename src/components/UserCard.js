import React from "react";
import UsersMenu from "./UsersMenu";
import {
  Card,
  CardMedia,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import { useStyles } from "../utils/styles";
import { CardHead } from "./Login";
import { height } from "@mui/system";

export default function UserCard() {
  const classes = useStyles();
  return (
    <div>
      <Card variant="outlined" className={classes.card}>
        <CardHead
          style={{ height: "15px", align: "start" }}
          variant="h3"
          title="Meryem Jow asks:"
        />
        <div className={classes.userCard}>
          <CardMedia
            className={classes.userImg}
            component="img"
            image="\images\lion.png"
            alt="animals"
            s
          />
          <span className={classes.span}></span>
          <CardContent className={classes.content}>
            <Typography>this is the qiiostion content </Typography>
            <Button sx={{ py: 1.5 }} variant="contained">
              Answer Poll
            </Button>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
