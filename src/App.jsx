import Features from "./components/layers/Features";
import Header from "./components/layers/Header";
import HeroSection from "./components/layers/HeroSection";
import MainFeatures from "./components/layers/MainFeatures";

function App() {
  return (
    <div className="background">
      <div className="background-glow" />
      <Header />
      <HeroSection />
      <Features />
      <MainFeatures />
    </div>
  );
}

export default App;
