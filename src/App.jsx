
import { useState, lazy, Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Help from "./components/Help";
import DeviceSelector from "./components/DeviceSelector";
import StickyMobileButton from "./components/StickyMobileButton";

// Lazy-loaded components
const TakeCarePlans = lazy(() => import("./components/TakeCarePlans"));
const PhoneCarrier = lazy(() => import("./components/PhoneCarrier"));
const LiveSupport = lazy(() => import("./components/LiveSupport"));
const ExpertCare = lazy(() => import("./components/ExpertCare"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const DependOnDevice = lazy(() => import("./components/DependOnDevice"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  return (
    <div className="flex flex-col w-full">
      <Navbar />
      <main className="min-h-screen md:max-w-[1400px] md:mx-auto">
        <HeroSection />
        <StickyMobileButton toggleDropdown={toggleDropdown} isOpen={isOpen} />
        <DeviceSelector
          isOpen={isOpen}
          toggleDropdown={toggleDropdown}
          closeDropdown={closeDropdown}
        />
        <Help />

        <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
          <TakeCarePlans />
          <PhoneCarrier />
          <LiveSupport />
          <ExpertCare />
          <Testimonials />
          <DependOnDevice />
          <Footer />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
