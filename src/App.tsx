import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, lazy, Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";

// Lazy-loaded components

const PhoneCarriers = lazy(() => import("./components/PhoneCarriers"));
const Claims = lazy(() => import("./Pages/Claims"));
const Footer = lazy(() => import("./components/Footer"));
const HowItWorks = lazy(() => import("./components/HowItWorks"));

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  return (
    <Router>
      <div className="flex flex-col w-full">
        <Navbar />
        <main className="min-h-screen">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  isOpen={isOpen}
                  toggleDropdown={toggleDropdown}
                  closeDropdown={closeDropdown}
                />
              }
            />
            <Route
              path="/Pages/Claims"
              element={
                <Suspense
                  fallback={<div className="text-center py-10">Loading...</div>}
                >
                  <Claims />
                  <PhoneCarriers />
                  <HowItWorks />
                </Suspense>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
