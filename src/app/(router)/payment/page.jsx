import React from "react";

const Payment = () => {
  return (
    <>
      <section className="bg-gray-100 bg-gradient-to-r from-blue-300 to-purple-500 py-20">

      <div className="max-w-lg md:max-w-5xl flex justify-center items-center mx-auto p-8 ">
        <div className="mx-auto">
          <h2>
            <span className="block text-base text-center font-semibold text-gray-600">
              Pay your fee to Complete Registration. 
            </span>

          </h2>
          <br />
          <div className="gap-4">
            <div className="mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold text-gray-600">
                    Pay Only Registration Fee To Get Started
                  </p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-3xl font-bold tracking-tight text-gray-900">
                      Pay Registration fee
                    </span>
                  </p>
                  <div className="mt-10 block w-full rounded-[8px] bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    
                    
                    <form>
                      <script
                        src="https://checkout.razorpay.com/v1/payment-button.js"
                        data-payment_button_id="pl_OlVXyLLP861uH0"
                        async=""
                      >
                        {" "}
                      </script>{" "}
                      <span className="razorpay-payment-button svelte-ohbfj8">
                        <a
                          href="https://razorpay.com/payment-button/pl_OlVXyLLP861uH0/view/?utm_source=payment_button&amp;utm_medium=button&amp;utm_campaign=payment_button"
                          type="submit"
                          className="PaymentButton PaymentButton--light PaymentButton--rzpTheme PaymentButton--rzp-light-standard svelte-ekc7fv"
                        >
                          <svg
                            width="18"
                            height="20"
                            viewBox="0 0 18 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="svelte-ekc7fv"
                          >
                            <path
                              d="M7.077 6.476l-.988 3.569 5.65-3.589-3.695 13.54 3.752.004 5.457-20L7.077 6.476z"
                              fill="#fff"
                              className="svelte-ekc7fv"
                            ></path>
                            <path
                              d="M1.455 14.308L0 20h7.202L10.149 8.42l-8.694 5.887z"
                              fill="#fff"
                              className="svelte-ekc7fv"
                            ></path>
                          </svg>{" "}
                          <div className="PaymentButton-contents svelte-ekc7fv">
                            <span className="PaymentButton-text svelte-ekc7fv">
                              Pay Now
                            </span>{" "}
                            <div className="PaymentButton-securedBy svelte-ekc7fv">
                              Secured by Razorpay
                            </div>
                          </div>
                        </a>

                      </span>
  
                    </form>
                  </div>
                  <p className="mt-6 text-xs leading-5 text-gray-600">
                    Invoices and receipts will be sent on your email
                  </p>
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
