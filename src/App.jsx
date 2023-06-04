import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Artwork from "./Pages/Artwork/Artwork";
import Detail from "./Pages/Details/Detail";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artwork" element={<Artwork/>} />
        <Route path="/detail/:id" element={<Detail/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
