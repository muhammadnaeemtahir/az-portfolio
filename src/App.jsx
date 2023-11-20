import { useEffect } from 'react';

// import components
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
