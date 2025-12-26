"use client";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AnyRide from "../components/home/AnyRide";
import Blog from "../components/home/Blog";
import Guides from "../components/home/hero/About";
import Hero from "../components/home/hero/Hero";
import Pricing from "../components/home/Pricing/Pricing";
import Safety from "../components/home/Safety";
import Values from "../components/home/Values";

export default function Home() {
  return (
    <>
      <Header /> 
      <Hero />
      <Guides />
      <AnyRide />
      <Values />
      <Pricing />
      <Safety />
      <Blog />
      <Footer />
    </>
  );
}
