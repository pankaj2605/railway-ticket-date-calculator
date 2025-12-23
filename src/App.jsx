import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import UsefulLinks from "./pages/UsefulLinks";
import Footer from "./components/Footer";
import PNRStatus from "./pages/PNRStatus";


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pnr-status" element={<PNRStatus />} />
        <Route path="/useful-links" element={<UsefulLinks />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
