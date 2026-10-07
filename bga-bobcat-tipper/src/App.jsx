import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import AboutAreas from "./components/AboutAreas";
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
        <Services />
        <AboutAreas />
        <QuoteForm />
      </main>
      <Footer />
    </>
  );
}
