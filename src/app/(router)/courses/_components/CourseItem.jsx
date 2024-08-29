import { Clock10 } from "lucide-react";
import Image from "next/image";
import React from "react";

const CourseItem = ({ course }) => {
  return (
    <div className=" border-2 border-gray-200 rounded overflow-hidden shadow-xl" data-aos="fade-up" data-aos-ease="ease-in">
    <a href="#"></a>
    <div className="relative">
      <a href="#" className="group relative flex items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg">
        <Image
          className="h-full min-h-48 max-h-48 w-full object-cover object-center transition duration-200 group-hover:scale-110"
          src={course?.banner?.url}
          alt="Sunset in the mountains"
          width={300}
          height={200}
        />
        {/* <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div> */}
      </a>
    </div>
    <div className="px-6 py-4">
      <a
        href="#"
        className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
      >
        {course?.name}
      </a>
      {/* <p className="text-gray-500 text-sm"></p> */}
    </div>
    <div className="px-6 py-4 flex flex-row items-center">
      <span
        href="#"
        className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center"
      >
        <Clock10 />
        <span className="ml-1">(3, 6, 11) Months</span>
      </span>
    </div>
  </div>
  );
};

export default CourseItem;