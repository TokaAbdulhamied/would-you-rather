import "./App.css";
import { Container } from "@mui/material";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="App-header">Would You Rather</h1>
      </header>
      <Container>
        <Nav />
      </Container>
    </div>
  );
}

export default App;
