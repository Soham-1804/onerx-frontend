import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import WhoWeAre from "@/components/WhoWeAre";
import ModuleGrid from "@/components/ModuleGrid";
import VideoShowcase from "@/components/VideoShowcase";
import Comparison from "@/components/Comparison";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main>
      <Navigation />
      <Hero />
      <StatsBar />
      <WhoWeAre />
      <ModuleGrid />
      <VideoShowcase />
      <Comparison />
      <Pricing />
      <Testimonials />
      <CtaBanner />
      <Footer />
    </main>
  );
};

export default Index;
