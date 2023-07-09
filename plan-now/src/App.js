import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import MahalList from "./Pages/MahalList/MahalList";
import Mahal from "./Pages/Mahal/Mahal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mahals" element={<MahalList />} />
        <Route path="/mahal/:id" element={<Mahal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
