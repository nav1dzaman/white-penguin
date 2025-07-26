import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CenterDevicePreview from "./components/CenterDevicePreview";
import BuiltForSchools from "./components/BuiltForSchools";
import WhyWhitePenguinSection from "./components/WHyWhitePenguinSection";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import FlowSection from "./components/FlowSection";
import WaitlistSection from "./components/WaitlistSection";
import PhoneFeatures from "./components/PhoneFeatures";
import SmartPaymentsSection from "./components/SmartPaymentsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQList from "./components/FAQList";
import EarlyAccessForm from "./components/EarlyAccessForm";

function App() {
  return (
    <div className="h-screen flex">
      {/* Left side spacer - fixed */}
      <div className="w-1 flex-shrink-0"></div>

      {/* Main scrollable content area */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <div className="flex-1 overflow-y-auto">
          <main className="min-h-full flex flex-col">
            <div className="flex-1">
              <Navbar />
              <HeroSection />
              <BuiltForSchools />
              <WhyWhitePenguinSection />
              <FeaturesSection />
              <FlowSection />
              <PhoneFeatures />
              <SmartPaymentsSection />
              <WaitlistSection />
              <TestimonialsSection />
              <FAQList />
              <EarlyAccessForm />
            </div>
            <Footer />
          </main>
        </div>
      </div>

      {/* Right side spacer - fixed */}
      <div className="w-1 flex-shrink-0"></div>
    </div>
  );
}

export default App;
