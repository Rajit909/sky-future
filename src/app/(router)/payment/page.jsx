import Image from "next/image";
import React from "react";

const Payment = () => {
  return (
    <>
      <section className="bg-gray-100 bg-gradient-to-r from-blue-300 to-purple-500 py-20">

      <div className="flex justify-center items-center mx-auto p-8 ">
        <div className="mx-auto">
          <h2>
            <span className="block text-base text-center font-bold text-gray-200">
              Pay your fee to Complete Registration. 
            </span>

          </h2>
          <br />
          <div className="gap-4">
            <div className=" p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-2">
                
                  <div className="w-full rounded-[8px] bg-indigo-600 p-1  text-center text-sm font-semibold text-white shadow-sm flex justify-center items-center ">
                    <Image
                      width={100}
                      height={20}
                      src={"/sky/PhonePeQR.png"}
                      className=" bg-cover"
                      style={{minWidth: "100%"}}
                      />
              
                  </div>
                  <h2 className="mt-6 text-2xl underline font-bold leading-5 text-gray-800 ">
                   Pay your fee
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default Payment;
