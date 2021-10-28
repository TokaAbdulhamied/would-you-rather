import "./App.css";
import { Container } from "@mui/material";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="App-header">Project Mini-Mik</h1>
      </header>
      <Container>
        <Nav />
      </Container>
    </div>
  );
}

export default App;
