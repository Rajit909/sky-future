"use client"
import { Clock, Mail, MapPin, PhoneCall } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
    const [userData, setUserData] = useState({
      name: "",
      email: "",
      message: ""
    })

    const handleChange = (e)=>{
        const {id, value} = e.target;
        setUserData((prevData) => ({...prevData, [id]: value}))
    }
    console.log(userData)

    const handleSubmit = async (e)=>{
      e.preventDefault();
      setIsLoading(true);
      try {
        const formData = new FormData();
        Object.keys(userData).forEach((key) => {
          formData.append(key, userData[key]);
        });

        const response = await fetch("/api/contact", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          throw new Error("Network response not Found?");
        }
  
        const result = await response.json();
        if (result.success) {
          alert(result.message);
          Object.keys(userData).forEach((key) => {
            setUserData((prevData) => ({ ...prevData, [key]: " " }));
          });
        router.push("/");
        }else {
          alert("Failed to submit Application.");
        }
      } catch (error) {
        console.log("Error Submitting form", error);
        alert("An error while submitting form. Please try again!");
      } finally {
        setIsLoading(false);
      }
    }


  return (
    <>
      <section className="bg-gray-100 bg-gradient-to-r from-blue-300 to-purple-500 py-10" id="contact">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mb-4">
            <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
              <p className="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">
                Contact
              </p>
              <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
                Feel free to Write to Us!
              </p>
            </div>
          </div>
          <div className="flex items-stretch justify-center">
            <div className="grid md:grid-cols-2">
              <div className="h-full pr-6">
                <div className="p-4 mt-8">
                  <div className="">
                    <div className="flex items-center p-2">
                      <div className=" bg-blue-600 p-2 rounded-[5px]">
                        <MapPin color="white" />
                      </div>
                      <h2 className=" pl-4 font-semibold">
                        Our Address
                      </h2>
                    </div>
                    <p className=" text-gray-600 pl-16">
                      Gandhi puram near mini bypass road, izzatnager Bareilly ,
                      Uttar Pradesh , 243122
                    </p>
                  </div>

                  <div className="mt-3">
                    <div className="flex items-center p-2">
                      <div className=" bg-blue-600 p-2 rounded-[5px]">
                        <PhoneCall color="white" />
                      </div>

                      <h2 className=" pl-4 font-semibold">Contact</h2>
                    </div>
                    <p className=" text-gray-600 pl-16">+91 9718273445</p>
                  </div>

                  <div className=" mt-3">
                    <div className="flex items-center p-2">
                      <div className=" bg-blue-600 p-2 rounded-[5px]">
                        <Clock color="white" />
                      </div>
                      <h2 className=" pl-4 font-semibold">
                        Opening Hours
                      </h2>
                    </div>
                    <p className=" text-gray-600 pl-16">
                      Mon - Fri: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                  <div className=" mt-3">
                    <div className="flex items-center p-2">
                      <div className=" bg-blue-600 p-2 rounded-[5px]">
                        <Mail color="white" />
                      </div>
                      <h2 className="pl-4 text-gray-600">
                        skyfuturea@gmail.com
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                <h2 className="mb-4 text-2xl font-bold dark:text-white">
                  Ready to Get Started?
                </h2>
                <form id="contactForm" onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <div className="mx-0 mb-1 sm:mb-4">
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label
                          htmlFor="name"
                          className="pb-1 text-xs uppercase tracking-wider"
                        ></label>
                        <input
                          type="text"
                          id="name"
                          value={userData.name}
                          onChange={handleChange}
                          autoComplete="given-name"
                          placeholder="Your name"
                          className="mb-2 w-full rounded-[5px] border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-600 sm:mb-0"
                          name="name"
                          required
                        />
                      </div>
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label
                          htmlFor="email"
                          className="pb-1 text-xs uppercase tracking-wider"
                        ></label>
                        <input
                          type="email"
                          id="email"
                          value={userData.email}
                          onChange={handleChange}
                          autoComplete="email"
                          placeholder="Your email address"
                          className="mb-2 w-full rounded-[5px] border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-600 sm:mb-0"
                          name="email"
                        />
                      </div>
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        htmlFor="message"
                        className="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <textarea
                        id="message"
                        name="message"
                        value={userData.message}
                        onChange={handleChange}
                        cols="30"
                        required
                        rows="5"
                        placeholder="Write your message..."
                        className="mb-2 w-full rounded-[5px] border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-600 sm:mb-0"
                      ></textarea>
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-[5px] sm:mb-0"
                    >
                     {isLoading ? (
                      <div className="text-md">
                        <span
                          className="spinner-border spinner-border-sm mb-1 mr-2"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Sending...
                      </div>
                    ) : (
                      "Send message"
                    )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
