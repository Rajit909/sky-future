import React from "react";

const Membership = () => {
  return (
    <>
      <div className="h-auto pt-20">
        <h2 className="text-center">Enroll to the course</h2>

        <div className="mx-auto max-w-3xl px-2 py-4 sm:px-6 sm:py-12 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="rounded-2xl w-96 border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12">
              <div className="text-center">
                <h2 className="text-lg font-medium text-gray-900">
                  Monthly
                  <span className="sr-only">Plan</span>
                </h2>

                <p className="mt-2 sm:mt-4">
                  <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                    15000 INR
                  </strong>

                  <span className="text-sm font-medium text-gray-700">
                    /month
                  </span>
                </p>
              </div>

              <ul className="mt-6 space-y-2">
                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5 text-indigo-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                  <span className="text-gray-700"> Access to Courses </span>
                </li>

                {/* <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5 text-indigo-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                  <span className="text-gray-700"> Free Source Code </span>
                </li> */}

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5 text-indigo-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                  <span className="text-gray-700"> App Membership </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5 text-indigo-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                  <span className="text-gray-700">
                    {" "}
                    Email & WhatsApp DM support{" "}
                  </span>
                </li>
              </ul>

              <a href="/membership"
                className="mt-8 block rounded-full border border-indigo-600 bg-white px-12 py-3 text-center text-sm font-medium text-indigo-600 hover:ring-1 hover:ring-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
              >
                Get Started
              </a>
            </div>
         
          </div>
        </div>
      </div>
    </>
  );
};

export default Membership;
