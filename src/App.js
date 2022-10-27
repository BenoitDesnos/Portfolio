import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import logo from "./assets/img/logo.svg";

import projectsData from "./data/projects.json";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home logo={logo} projectsData={projectsData} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
