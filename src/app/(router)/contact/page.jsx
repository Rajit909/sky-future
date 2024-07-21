import { Clock, Mail, MapPin, PhoneCall } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <>
      <section class="bg-blue-50 dark:bg-slate-800" id="contact">
        <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div class="mb-4">
            <div class="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
              <p class="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">
                Contact
              </p>
              <h2 class="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
                Get in Touch
              </h2>
              <p class="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
                Feel free to Write to Us!
              </p>
            </div>
          </div>
          <div class="flex items-stretch justify-center">
            <div class="grid md:grid-cols-2">
              <div class="h-full pr-6">
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
              <div class="card h-fit max-w-6xl p-5 md:p-12" id="form">
                <h2 class="mb-4 text-2xl font-bold dark:text-white">
                  Ready to Get Started?
                </h2>
                <form id="contactForm">
                  <div class="mb-6">
                    <div class="mx-0 mb-1 sm:mb-4">
                      <div class="mx-0 mb-1 sm:mb-4">
                        <label
                          for="name"
                          class="pb-1 text-xs uppercase tracking-wider"
                        ></label>
                        <input
                          type="text"
                          id="name"
                          autocomplete="given-name"
                          placeholder="Your name"
                          class="mb-2 w-full rounded-[5px] border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-600 sm:mb-0"
                          name="name"
                        />
                      </div>
                      <div class="mx-0 mb-1 sm:mb-4">
                        <label
                          for="email"
                          class="pb-1 text-xs uppercase tracking-wider"
                        ></label>
                        <input
                          type="email"
                          id="email"
                          autocomplete="email"
                          placeholder="Your email address"
                          class="mb-2 w-full rounded-[5px] border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-600 sm:mb-0"
                          name="email"
                        />
                      </div>
                    </div>
                    <div class="mx-0 mb-1 sm:mb-4">
                      <label
                        for="textarea"
                        class="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <textarea
                        id="textarea"
                        name="textarea"
                        cols="30"
                        rows="5"
                        placeholder="Write your message..."
                        class="mb-2 w-full rounded-[5px] border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-600 sm:mb-0"
                      ></textarea>
                    </div>
                  </div>
                  <div class="text-center">
                    <button
                      type="submit"
                      class="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-[5px] sm:mb-0"
                    >
                      Send Message
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
