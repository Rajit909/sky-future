"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import React from "react";

import "./_components/style.css";

const About = () => {
  const words = [
    {
      text: "Welcome",
    },
    {
      text: "to",
    },
    {
      text: "Sky",
    },
    {
      text: "Future",
    },
    {
      text: "Academy.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <>
      {/* bg effect */}
      <section className="bg-gray-100 bg-gradient-to-r from-blue-200 to-purple-300 ">
      

          <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 ">
                           <TypewriterEffectSmooth words={words} className="text-center py-8" />
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
              <div className="mt-6 md:mt-0" data-aos="fade-up" data-aos-ease="ease-in">
{/*                 <img
                  src="/images/about/about.jpg"
                  alt="About Us Image"
                  className="object-cover rounded-xl shadow-md"
                  style={{maxHeight: "500px", width: "100%"}}
                /> */}
              </div>
              <div className="max-w-lg" data-aos="fade-up" data-aos-ease="ease-in">
                <h2 className=" cursor-pointer text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  About Us
                </h2>
                <p className="mt-4 text-[#ffffff] text-lg">
                Sky Future Academy was established in 2013 as an NGO registered as an education trust in the government of India in 2024. Some skilled and highly trained instructors and other knowledgeable professors bring out the best in all the students.
                Sky future academy aims at bringing the world to you by providing course that are globally relevant. It provides industry oriented, professional training and skill development in the emerging sector like aviation, Hospitality and Travel.
                </p>
                <div className="mt-8 cursor-pointer">
                  <a
                    href="#"
                    className=" text-blue-500 hover:text-blue-700 font-medium cursor-pointer"
                  >
                    Learn more about us
                    <span className="ml-2">&#8594;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

      </section>
    </>
  );
};

export default About;
