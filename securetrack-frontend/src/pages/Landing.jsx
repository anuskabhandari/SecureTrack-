import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Feature";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

import "../styles/landing.css";
import DashboardPreview from "../components/DashboardPreview";

export default function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
      <DashboardPreview/>
      <Features />
      <CTA />
      <Footer />
    </>
  );
}