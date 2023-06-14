import "./App.css";
import Model from "./Model";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/model" element={<Model />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
