import Image from "next/image";
import React from "react";

import "./_components/style.css";

const About = () => {
  return (
    <>
      {/* bg effect */}
      <section className="bg-gray-100 bg-gradient-to-r from-blue-300 to-purple-500 ">
      

          <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8" data-aos="fade-left">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
              <div className="mt-12 md:mt-0">
                <img
                  src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
                  alt="About Us Image"
                  className="object-cover rounded-xl shadow-md"
                />
              </div>
              <div className="max-w-lg">
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
                    className=" text-yellow-300 hover:text-blue-600 font-medium cursor-pointer"
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
