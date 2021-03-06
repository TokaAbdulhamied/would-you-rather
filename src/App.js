import "./App.css";
import { Container } from "@mui/material";
import { Box } from "@mui/material";
import Nav from "./components/Nav";
import { Route, BrowserRouter, Switch, Link } from "react-router-dom";
import Login from "./components/Login";
import UserCard from "./components/UserCard";
import NewPoll from "./components/NewPoll";

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="App-header">Would You Rather</h1>
      </header>
      <BrowserRouter>
        <Container>
          <Nav />
          <Box
            display="flex"
            justifyContent="center"
            sx={{ marginTop: "2rem" }}
            minHeight="100vh"
          >
            <Switch>
              {/* <Route path="/" component={Home} exact />
         <Route path="/leaders" component={Leaderborad} />  */}
              <Route path="/new-quistion" component={NewPoll} />

              <Route exact path="/home" component={UserCard} />
              <Route path="/login" component={Login} />
            </Switch>
          </Box>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
