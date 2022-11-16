import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import logo from "./assets/img/logo.svg";
import aboutData from "./data/about.json";
import aboutDataEn from "./data/aboutEn.json";
import projectsData from "./data/projects.json";
import projectsDataEn from "./data/projectsEn.json";
import { useLayoutEffect, useState } from "react";

function App() {
  const [size, setSize] = useState(0);

  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              logo={logo}
              projectsData={projectsData}
              aboutData={aboutData}
              size={size}
            />
          }
        ></Route>
        <Route
          path="/en"
          element={
            <Home
              logo={logo}
              projectsData={projectsDataEn}
              aboutData={aboutDataEn}
              size={size}
            />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
