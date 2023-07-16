/* eslint-disable react/jsx-key */
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Tours from "./components/Tours";
import Contact from "./components/Contact";
import Footter from "./components/Footter";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Contact />
      <Footter />
    </>
  );
}

export default App;
