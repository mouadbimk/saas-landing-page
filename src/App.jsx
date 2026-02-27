import Features from "./components/layers/Features";
import Header from "./components/layers/Header";
import HeroSection from "./components/layers/HeroSection";
import MainFeatures from "./components/layers/MainFeatures";

function App() {
  return (
    <div className="background">
      <div className="background-glow" />
      <div className="relative z-100">
        <Header />
        <HeroSection />
        <Features />
        <MainFeatures />
      </div>
    </div>
  );
}

export default App;
