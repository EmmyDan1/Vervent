import { useState, lazy, Suspense } from "react";
import "./App.css";

import HeroSection from "../components/HeroSection";
import Help from "../components/Help";
import DeviceSelector from "../components/DeviceSelector";
import StickyMobileButton from "../components/StickyMobileButton";

// Lazy-loaded components
const TakeCarePlans = lazy(() => import("../components/TakeCarePlans"));
const PhoneCarriers = lazy(() => import("../components/PhoneCarriers"));
const LiveSupport = lazy(() => import("../components/LiveSupport"));
const ExpertCare = lazy(() => import("../components/ExpertCare"));
const Testimonials = lazy(() => import("../components/Testimonials"));
const DependOnDevice = lazy(() => import("../components/DependOnDevice"));
const HowItWorks = lazy(() => import("../components/HowItWorks"));

type HomeProps = {
    toggleDropdown: () => void;
    isOpen: boolean;
    closeDropdown: () => void;
}

const Home: React.FC<HomeProps> = ({ toggleDropdown, isOpen, closeDropdown }) => {
  return (
    <div className="md:max-w-[1400px] md:mx-auto">
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
        <LiveSupport />
        <ExpertCare />
        <Testimonials />
        <DependOnDevice />
      </Suspense>
    </div>
  );
};

export default Home;
