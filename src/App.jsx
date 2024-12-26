
import "./App.css";
import Navbar from "./Header/Navbar";
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Booknow from './pages/Booknow';
import Footer from './Footer/Footer';

function App() {
  return (
    <>
    <main className="pt-16 p-4 flex-grow">
      <Navbar></Navbar>
      
      {/* Each section with a unique ID */}
      <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="book">
          <Booknow />
        </section>


</main>

<Footer></Footer>
    </>
  );
}

export default App;
