import { Routes, Route, useLocation } from "react-router-dom";

// import components
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from "./components/Contact";
import Whatsapp from "./components/Whatsapp";

// pages
import Home from './components/pages/Home';
import Blogs from './components/pages/Blogs';
import EbooksDesigning from './components/pages/EbooksDesigning';
import EbookDetails from './components/pages/EbookDetails';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/ebooks-designing" element={<EbooksDesigning />} />
        <Route path="/ebook-details" element={<EbookDetails />} />
      </Routes>
      <Whatsapp />
      <Footer />
    </>
  );
}

export default App;
