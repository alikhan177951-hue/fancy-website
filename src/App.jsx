import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Process from "./components/Process";
import Trust from "./components/Trust";
import Gallery from "./components/Gallery";
import Areas from "./components/Areas";
import Reviews from "./components/Reviews";
import QuoteForm from "./components/QuoteForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <a className="skip" href="#top">
        Skip to content
      </a>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Trust />
        <Gallery />
        <Areas />
        <Reviews />
        <QuoteForm />
      </main>
      <Footer />
    </>
  );
}
