import { AboutMe } from "./components/AboutMe";
import ContactForm from "./components/ContactForm";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { Services } from "./components/Services";
import './globals.css'


const Home = () => (
  <div>
    <Header />
    <Hero />
    <AboutMe />
    <Services />
    <ContactForm />
    <Footer />
  </div>
);

export default Home;
