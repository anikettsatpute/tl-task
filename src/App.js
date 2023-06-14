import "./App.css";
import Model from "./Model";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
function App() {
  return (
    <BrowserRouter basename="/tl-task">
      <Routes>
        <Route exact path="/tl-task" element={<Home />} />
        <Route path="/model" element={<Model />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
