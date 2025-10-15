import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home"; 
import Profile from "./pages/Profile";
import Portofolio from "./pages/portofolio";
import WebDevDetail from "./pages/WebDevDetail";
import BigDataDetail from "./pages/BigDataDetail";
import OBP from "./pages/OBP";
import "animate.css";

function App() {
  return (
    <div className="container mx-auto px-4">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/portofolio" element={<Portofolio />} />
        <Route path="/webdev" element={<WebDevDetail />} />
        <Route path="/bigdata" element={<BigDataDetail />} />
        <Route path="/obp" element={<OBP />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;