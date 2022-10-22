import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Skills from "./pages/Skills";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/" element={<Skills />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
