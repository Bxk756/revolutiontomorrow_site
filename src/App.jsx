import Hero from "./components/Hero";
import Features from "./components/Features";
import APIDemo from "./components/APIDemo";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="w-full">
      <Hero />
      <Features />
      <APIDemo />
      <Footer />
    </div>
  );
}
