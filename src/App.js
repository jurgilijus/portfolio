import { createContext, useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Work from "./Components/Work/Work";
import Contact from "./Components/Contact/Contact";
import { FaMoon, FaSun } from "react-icons/fa";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

// CSS
import "./App.css";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
  };

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="App" id={theme}>
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Work />
          <Contact />
          <div onClick={handleClick} className="theme-btn">
            <button onClick={toggleTheme}>
              {!nav ? <FaSun className="sun" /> : <FaMoon className="moon" />}
            </button>
          </div>
          <ScrollToTop />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
