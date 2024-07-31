
"use client";

import React, { useState, useEffect } from "react";
import { toast } from "sonner";

const CourseFeeCalculator = () => {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [fee, setFee] = useState(0);
  const [installments, setInstallments] = useState([]);
  const [payable, setPayable] = useState(0);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const courses = [
    {
      name: "Diploma in Hotel Management",
      feePlan: {
        "3 Months": 45000,
        "6 Months": 90000,
        "11 Months": 110000,
      },
    },
    {
      name: "Diploma in Air hostess",
      feePlan: {
        "3 Months": 45000,
        "6 Months": 90000,
        "11 Months": 110000,
      },
    },
    {
      name: "Diploma in Cabin crew",
      feePlan: {
        "3 Months": 39000,
        "6 Months": 75000,
        "11 Months": 90000,
      },
    },
    {
      name: "Diploma in Airport Management",
      feePlan: {
        "3 Months": 36000,
        "6 Months": 70000,
        "11 Months": 90000,
      },
    },
    {
      name: "Diploma in Travel & Tourism Management",
      feePlan: {
        "3 Months": 39000,
        "6 Months": 75000,
        "11 Months": 90000,
      },
    },
    {
      name: "Diploma in Human Resources Management",
      feePlan: {
        "3 Months": 20000,
        "6 Months": 35000,
        "11 Months": 60000,
      },
    },
    {
      name: "Diploma in Marketing Management",
      feePlan: {
        "3 Months": 20000,
        "6 Months": 35000,
        "11 Months": 60000,
      },
    },
    {
      name: "Diploma in Web Designing",
      feePlan: {
        "3 Months": 35000,
        "6 Months": 60000,
        "11 Months": 80000,
      },
    },
    {
      name: "Diploma in Metro Management",
      feePlan: {
        "3 Months": 40000,
        "6 Months": 70000,
        "11 Months": 110000,
      },
    },
  ];

  const handleCourseChange = (e) => {
    const selectedCourseName = e.target.value;
    setSelectedCourse(selectedCourseName);
    const course = courses.find(
      (course) => course.name === selectedCourseName
    );
    if (course) {
      setSelectedPlan("3 Months"); // Default to the first fee plan
      setFee(course.feePlan["3 Months"]);
      setInstallments([]);
      displayInstallments(course.feePlan["3 Months"], 3);
    } else {
      setFee(0);
      setInstallments([]);
    }
  };

  const handlePlanChange = (e) => {
    const selectedPlanName = e.target.value;
    setSelectedPlan(selectedPlanName);
    const course = courses.find(
      (course) => course.name === selectedCourse
    );
    if (course) {
      setFee(course.feePlan[selectedPlanName]);
      const duration = parseInt(selectedPlanName.split(" ")[0], 10);
      displayInstallments(course.feePlan[selectedPlanName], duration);
    }
  };

  const displayInstallments = (totalFee, duration) => {
    const monthlyInstallment = Math.floor(totalFee / duration);
    const newInstallments = [];
    for (let i = 1; i <= duration; i++) {
      newInstallments.push(`Installment ${i}: ₹${monthlyInstallment}`);
    }
    setInstallments(newInstallments);
    setPayable(monthlyInstallment);
  };

  const handlePayment = async () => {
    const response = await fetch("/api/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: payable, name: name, email: email }),
    });
    const order = await response.json();

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: "INR",
      name: "Sky Future Academy: Course Fee Payment",
      description: "Payment for selected course",
      order_id: order.id,
      handler: async (response) => {
        toast(
          "Payment successful.  Transaction ID: " + response.razorpay_payment_id
        );
      },
      prefill: {
        name: name,
        email: email,
        contact: "9999999999",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <section className="bg-gray-100 bg-gradient-to-r from-blue-300 to-purple-500 p-10">
      <div
        className="container max-w-5xl rounded shadow-sm mx-auto bg-gray-100 bg-gradient-to-r from-blue-200 to-purple-300 p-10 mt-11"
        data-aos="fade-left"
      >
        <h2 className="text-2xl font-extrabold text-purple-600 mb-4 text-center">
          Pay Your Course fee.
        </h2>
        <form
          id="paymentForm"
          className="max-w-4xl mx-auto overflow-hidden"
        >
          <div className="mb-4">
            <label htmlFor="course" className="block text-gray-700 mb-2">
              Select Course
            </label>
            <select
              id="course"
              name="course"
              className="form-control block w-full px-3 py-2 border border-gray-300 rounded"
              value={selectedCourse}
              onChange={handleCourseChange}
              required
            >
              <option value="" hidden>
                Select Course
              </option>
              {courses.map((course) => (
                <option key={course.name} value={course.name}>
                  {course.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="plan" className="block text-gray-700 mb-2">
              Select Course Plan
            </label>
            <select
              id="plan"
              name="plan"
              className="form-control block w-full px-3 py-2 border border-gray-300 rounded"
              value={selectedPlan}
              onChange={handlePlanChange}
              required
            >
              <option value="" hidden>
                Select Course Plan
              </option>
              {selectedCourse &&
                Object.keys(
                  courses.find((course) => course.name === selectedCourse)
                    .feePlan
                ).map((plan) => (
                  <option key={plan} value={plan}>
                    {plan}
                  </option>
                ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="fee" className="block text-gray-700 mb-2">
              Course Fee
            </label>
            <input
              type="text"
              id="fee"
              name="fee"
              className="form-control block w-full px-3 py-2 border border-gray-300 rounded"
              value={fee}
              readOnly
            />
          </div>
          <div className="mb-4">
            <label htmlFor="installments" className="block text-gray-700 mb-2">
              Installments
            </label>
            <div
              id="installments"
              className="border border-gray-300 rounded p-3"
            >
              {installments.map((installment, index) => (
                <div key={index}>{installment}</div>
              ))}
            </div>

            <div>
              Total payable installment:{" "}
              <span className="font-bold text-lg text-purple-600">
                {payable}
              </span>
            </div>
          </div>
          
          <div className="border border-gray-300 rounded p-3 mb-4">
            <small id="passwordHelpBlock" className="form-text text-yellow-600">
              Enter name and Email to receive a receipt on your mail.
            </small>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control block w-full px-3 py-2 border border-gray-300 rounded"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Enter full name"
              />
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control block w-full px-3 py-2 border border-gray-300 rounded"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email"
                />
              </div>
            </div>
          </div>
          <button
            type="button"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            onClick={handlePayment}
          >
            Pay Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default CourseFeeCalculator;
