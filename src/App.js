import logo from "./logo.svg";
import "./App.css";
import Rotas from "./components/Rotas";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Router>
        <nav>
          <Nav />
        </nav>
        <main>
          <Rotas />
        </main>
      </Router>
    </>
  );
}

export default App;
