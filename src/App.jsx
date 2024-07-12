import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import BackToTop from "./component/backToTop";

import {
  Beranda,
  Dunia,
  Indonesia,
  Tiktok,
  Media,
  Viral,
} from "./pages/indexPage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/indonesia" element={<Indonesia />} />
          <Route path="/dunia" element={<Dunia />} />
          <Route path="/viral" element={<Viral />} />
          <Route path="/media" element={<Media />} />
          <Route path="/tiktok" element={<Tiktok />} />
        </Routes>
        <Footer />
        <BackToTop />
      </Router>
    </>
  );
}

export default App;
