import About from "./components/About";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";

function App() {
  return (
    <div className="text-black">
      <Header />
      <Hero />
      <About />
      <TechStack />
      <Achievements />
      <Contact />
    </div>
  );
}

export default App;
