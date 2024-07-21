import React from "react";
import CourseItem from "./_components/CourseItem";

const Course = () => {
  const images = [
    "/images/cources/air.jpeg",
    "/images/cources/airport.jpeg",
    "/images/cources/cabin.jpg",
    "/images/cources/hotel-managment.jpg",
    "/images/cources/hr.jpg",
    "/images/cources/marketing-management.jpeg",
    "/images/cources/metro-management.jpg",
    "/images/cources/Travel-and-Tourism.png",
    "/images/cources/Web-Design.png",
  ];

  return (
    <>
      <div
        className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 mt-16 "
        data-aos="fade-right"
      >
        <div className="relative mx-auto max-w-5xl text-center">
          <h2 className="block shadow-sm w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-4xl sm:text-2xl">
            OUR COURSES
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10 mt-5">
          <CourseItem
            url={images[0]}
            name={"Diploma in Air Hostaess"}
            desc={"description"}
            time={"3 Months"}
          />
          <CourseItem
            url={images[1]}
            name={"Diploma in Airport management"}
            desc={"description"}
            time={"3 Months"}
          />
          <CourseItem
            url={images[2]}
            name={"Diploma in Cabin crew"}
            desc={"description"}
            time={"3 Months"}
          />
          <CourseItem
            url={images[3]}
            name={"Diploma in Hotel management"}
            desc={"description"}
            time={"3 Months"}
          />
          <CourseItem
            url={images[4]}
            name={"Diploma in Human Resources management"}
            desc={"description"}
            time={"3 Months"}
          />
          <CourseItem
            url={images[5]}
            name={"Diploma in Marketing management"}
            desc={"description"}
            time={"3 Months"}
          />
          <CourseItem
            url={images[6]}
            name={"Diploma in Metro management"}
            desc={"description"}
            time={"3 Months"}
          />
          <CourseItem
            url={images[7]}
            name={"Diploma in Travel & Tourism management"}
            desc={"description"}
            time={"3 Months"}
          />
          <CourseItem
            url={images[8]}
            name={"Diploma in Web Designing"}
            desc={"description"}
            time={"3 Months"}
          />
        </div>
      </div>
    </>
  );
};

export default Course;
