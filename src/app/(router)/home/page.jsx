"use client";
import React from "react";
import Hero from "../_components/Hero";
import About from "../about/page";
import Services from "../servises/page";
import Newsletter from "../_components/Newsletter";
import PLacements from "../_components/Partners/PLacements";
import Course from "../course/page";
import Footer from "../_components/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <main>
        {/* hero carousel */}
        <Hero />
  
        {/* About */}
        <About/>

        {/* services */}

        <Services/>
        <PLacements/>

          <Course/>
        <Newsletter/>
      </main>
    </>
  );
};

export default HomePage;
