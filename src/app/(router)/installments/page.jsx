"use client";

import React, { useState, useEffect } from "react";
import { toast } from "sonner";

const CourseFeeCalculator = () => {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [fee, setFee] = useState(0);
  const [emiOptions, setEmiOptions] = useState([]);
  const [selectedEmi, setSelectedEmi] = useState("");
  const [totalFee, setTotalFee] = useState(0);
  const [installments, setInstallments] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const courses = [
    { name: "Diploma in Hotel Management", fee: 42000 },
    { name: "Diploma in Air hostess", fee: 45000 },
    { name: "Diploma in Cabin crew", fee: 39000 },
    { name: "Diploma in Airport Management", fee: 36000 },
    { name: "Diploma in Travel & Tourism Management", fee: 39000 },
    { name: "Diploma in Human Resources Management", fee: 20000 },
    { name: "Diploma in Marketing Management", fee: 20000 },
    { name: "Diploma in Web Designing", fee: 35000 },
    { name: "Diploma in Metro Management", fee: 40000 },
  ];

  const handleCourseChange = (e) => {
    const selectedCourseName = e.target.value;
    setSelectedCourse(selectedCourseName);
    const selectedCourse = courses.find(
      (course) => course.name === selectedCourseName
    );
    if (selectedCourse) {
      setFee(selectedCourse.fee);
      setSelectedEmi("");
      setTotalFee(0);
      setInstallments([]);
      fetchEmiOptions(selectedCourse.fee);
    } else {
      setFee(0);
      setEmiOptions([]);
      setSelectedEmi("");
      setTotalFee(0);
      setInstallments([]);
    }
  };

  const fetchEmiOptions = (amount) => {
    const emiOptions = [{ duration: 3 }, { duration: 6 }, { duration: 9 }];

    setEmiOptions(emiOptions);
  };

  const handleEmiChange = (e) => {
    const selectedEmi = e.target.value;
    setSelectedEmi(selectedEmi);
    if (selectedEmi) {
      const duration = parseInt(selectedEmi, 10);
      const monthlyInstallment = Math.floor(fee / duration);
      setTotalFee(monthlyInstallment);
      displayInstallments(monthlyInstallment, duration);
    } else {
      setTotalFee(0);
      setInstallments([]);
    }
  };

  const displayInstallments = (monthlyInstallment, duration) => {
    const newInstallments = [];
    for (let i = 1; i <= duration; i++) {
      newInstallments.push(`Installment ${i}: ₹${monthlyInstallment}`);
    }
    setInstallments(newInstallments);
  };

  const handlePayment = async () => {
    const response = await fetch("/api/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: totalFee, name: name, email: email }),
    });
    const order = await response.json();

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // client-side key
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
    <section className="bg-gray-100 bg-gradient-to-r from-blue-300 to-purple-500 p-10" >
      <div className="container max-w-5xl rounded shadow-sm  mx-auto bg-white p-10 mt-11 " data-aos="fade-left">
        <h2 className="text-2xl font-extrabold text-purple-600 mb-4 text-center">
          Pay Your Course fee.
        </h2>
        <form
          id="paymentForm"
          // onSubmit={handlePayment}
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
              <option value="" hidden>Select Course</option>
              {courses.map((course) => (
                <option key={course.name} value={course.name}>
                  {course.name}
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
            <label htmlFor="emi" className="block text-gray-700 mb-2">
              Select EMI Plan
            </label>
            <select
              id="emi"
              name="emi"
              className="form-control block w-full px-3 py-2 border border-gray-300 rounded"
              value={selectedEmi}
              onChange={handleEmiChange}
            >
              <option value="">Select EMI Option</option>
              {emiOptions.map((option) => (
                <option key={option.duration} value={option.duration}>
                  {option.duration} months
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="totalFee" className="block text-gray-700 mb-2">
              Total Fee
            </label>
            <input
              type="text"
              id="totalFee"
              name="totalFee"
              className="form-control block w-full px-3 py-2 border border-gray-300 rounded"
              value={totalFee.toFixed(2)}
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
            // run payment only if all input filled
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
