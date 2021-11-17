import React, { useEffect } from "react";
import UsersMenu from "./UsersMenu";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import { useStyles } from "../utils/styles";
import { connect } from "react-redux";
import { CardHead } from "./CardHead";
import { handleGetUsers } from "../store/actioncreators/users";

function Login({ users, handleGetUsers }) {
  useEffect(() => {
    handleGetUsers();
  }, []);

  const classes = useStyles();
  console.log(users);
  return (
    <div>
      <Card variant="outlined" className={classes.card}>
        <CardHead
          style={{ height: "40px", align: "center" }}
          variant="h6"
          title="Welcome to the Would You Rather App!"
          subheader="Please sign in to continue"
        />
        <CardMedia
          className={classes.cardImg}
          component="img"
          image="\images\download.png"
          alt="animals"
        />
        <CardContent className={classes.content}>
          <UsersMenu users={users} />
          <Button sx={{ py: 1.5 }} variant="contained">
            Sign In
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
const mapStateToProps = (state) => ({ users: Object.values(state.users) });

export default connect(mapStateToProps, { handleGetUsers })(Login);
