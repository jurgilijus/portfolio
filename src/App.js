import Navbar from "./Components/Navbar";

// CSS
import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
    </>
  );
}

export default App;
