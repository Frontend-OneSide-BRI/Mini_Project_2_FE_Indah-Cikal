import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Artwork from "./Pages/Artwork/Artwork";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artwork" element={<Artwork/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
