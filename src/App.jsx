import { Routes, Route } from "react-router-dom";

// import components
import Header from './components/Header';
import Footer from './components/Footer';
import Whatsapp from "./components/Whatsapp";

// pages
import Home from './components/pages/Home';
import Blogs from './components/pages/Blogs';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
      <Whatsapp />
      <Footer />
    </>
  );
}

export default App;
