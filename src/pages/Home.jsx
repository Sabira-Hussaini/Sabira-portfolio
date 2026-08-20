import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import FeaturedProjects from "../components/FeaturedProjects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-wrapper">
      <Navbar />

      <main className="home-main">
        <Hero />
        <About />
        <Skills />
        <FeaturedProjects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}