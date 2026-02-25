import Features from "./components/layers/Features";
import Header from "./components/layers/Header";
import HeroSection from "./components/layers/HeroSection";

function App() {
  return (
    <div className="background">
      <div className="background-glow" />
      <Header />
      <HeroSection />
      <Features />
    </div>
  );
}

export default App;
