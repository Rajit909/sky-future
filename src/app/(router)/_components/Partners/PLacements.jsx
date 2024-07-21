import Image from "next/image";
import React from "react";
import PLacementItem from "./_components/PLacementItem";

const PLacements = () => {
  const images = [
    "/images/companies/emirates.png",
    "/images/companies/hdfcc.png",
    "/images/companies/indigo.png",
    "/images/companies/jet airways.png",
    "/images/companies/kotak.png",
    "/images/companies/mutut.png",
    "/images/companies/qatar.png",
    "/images/companies/spice jet.png",
  ]
  return (
    <>
      <div className="my-20 " data-aos="fade-left">
        <h3 className="text-center text-gray-900 font-bold text-lg underline">
          OUR CAREER PARTNERS
        </h3>
        <h3 className="text-center font-bold  my-2 text-2xl text-gray-800">
          Top Companies In Which Our Students Placed
        </h3>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-4 gap-3 p-4 max-w-[400px] md:max-w-[1000px] place-items-center">
          <PLacementItem  url={images[0]} name={"Emirates"} stud={"5"}/>
          <PLacementItem  url={images[1]} name={"Hdfc"} stud={"10"}/>
          <PLacementItem  url={images[2]} name={"Indigo"} stud={"10"}/>
          <PLacementItem  url={images[3]} name={"Jet AirWays"} stud={"12"}/>
          <PLacementItem  url={images[4]} name={"Kotak"} stud={"12"}/>
          <PLacementItem  url={images[5]} name={"Mutut"} stud={"12"}/>
          <PLacementItem  url={images[6]} name={"Qatar Airways"} stud={"12"}/>
          <PLacementItem  url={images[7]} name={"Spice Jet Airways"} stud={"12"}/>
        </div>
      </div>
    </>
  );
};

export default PLacements;
