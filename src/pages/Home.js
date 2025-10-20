import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import PopularDestinations from "../components/PopularDestinations";
import TripIdeas from "../components/TripIdeas";
import BlogSection from "../components/BlogSection";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <PopularDestinations />
      <TripIdeas />
      <BlogSection />
      <Subscribe />
      <Footer />
    </>
  );
}

export default Home;
