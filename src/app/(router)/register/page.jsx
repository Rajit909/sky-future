"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Register = () => {
  const [photoFile, setPhotoFile] = useState(null);
  const [aadharFile, setAadharFile] = useState(null);
  const [highmarkFile, setHighmarkFile] = useState(null);
  const [intermarkFile, setIntermarkFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const [userData, setUserData] = useState({
    name: "",
    fname: "",
    mname: "",
    gender: "",
    email: "",
    phone: "",
    aadhar:"",
    qfn: "",
    address: "",
    state: "",
    country: "",
    course: "",
  });

  console.log(userData);

  const handleFileChange = (e, setFile, maxSize)=>{
    const file = e.target.files[0];
    if(file.size > maxSize){
      alert(`फ़ाइल का Size ${maxSize / 1024}KB से अधिक है. कृपया 400kb से कम की फ़ाइल अपलोड करें।.`);
      e.target.value = null;
    }else{
      setFile(file);
    }
  }



  const handleHighmarkfileChange = (e) => handleFileChange(e, setHighmarkFile, 400 * 1024);

  const handleIntermarkfileChange = (e) => handleFileChange(e, setIntermarkFile, 400 * 1024);
  
  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("highmark", highmarkFile);
      formData.append("intermark", intermarkFile);
      Object.keys(userData).forEach((key) => {
        formData.append(key, userData[key]);
      });

      const response = await fetch("/api/upload", {
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
        setHighmarkFile("");
        setIntermarkFile("");

        // Redirect to payment page
        router.push("/payment");
      } else {
        alert("Failed to submit Application.");
      }
    } catch (error) {
      console.log("Error Submitting form", error);
      alert("An error while submitting form. Please try again!");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div
        className="bg-gray-100 bg-gradient-to-r from-blue-400 to-purple-500 py-10"
        style={{ margin: "70px 0 0 0" }}
      >
        <div className="container mx-auto py-5" data-aos="fade-left">
          <div className="text-center mb-4">
            <h5
              className="text-primary text-uppercase mb-3 "
              style={{ letterSpacing: "5px" }}
            >
              Need Any Courses
            </h5>
            <h1 className="text-white">Afordable Price For New Students</h1>
            <p className="text-white mt-3">
              
            </p>
            {/* <ul className="list-inline text-white m-0">
              <li className="py-2">
                <i className="fa fa-check text-primary mr-3"></i>Labore eos amet
                dolor amet diam
              </li>
              <li className="py-2">
                <i className="fa fa-check text-primary mr-3"></i>Etsea et sit
                dolor amet ipsum
              </li>
              <li className="py-2">
                <i className="fa fa-check text-primary mr-3"></i>Diam dolor diam
                elitripsum vero.
              </li>
            </ul> */}
          </div>
          <div className="max-w-4xl mx-auto bg-light rounded-[10px] shadow-lg overflow-hidden">
            <div className="bg-gray-100 text-center p-4">
              <h1 className="text-2xl font-bold">Register Now</h1>
            </div>
            <div className="bg-gray-100 bg-gradient-to-r from-blue-300 to-purple-500 shadow-lg p-6">
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    className="form-control border-0 p-4 rounded"
                    id="name"
                    name="name"
                    value={userData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                  <input
                    type="text"
                    className="form-control border-0 p-4 rounded"
                    id="fname"
                    name="fname"
                    value={userData.fname}
                    onChange={handleChange}
                    placeholder="Father's name"
                    required
                  />
                  <input
                    type="text"
                    className="form-control border-0 p-4 rounded"
                    name="mname"
                    id="mname"
                    value={userData.mname}
                    onChange={handleChange}
                    placeholder="Mother's name"
                    required
                  />
                  <select
                    className="form-control border-0 px-4 rounded h-12"
                    id="gender"
                    name="gender"
                    value={userData.gender}
                    onChange={handleChange}
                    required
                  >
                    <option hidden>Select Gender</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Other">Other</option>
                  </select>
                  <input
                    type="email"
                    className="form-control border-0 p-4 rounded"
                    id="email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                  />
                  <input
                    type="tel"
                    className="form-control border-0 p-4 rounded"
                    name="phone"
                    id="phone"
                    value={userData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    required
                  />
                  <input
                    type="text"
                    className="form-control border-0 p-4 rounded"
                    name="aadhar"
                    id="aadhar"
                    value={userData.aadhar}
                    onChange={handleChange}
                    placeholder="Aadhar no."
                    required
                  />
                  <select
                    className="form-control border-0 px-4 rounded h-12"
                    name="qfn"
                    id="qfn"
                    value={userData.qfn}
                    onChange={handleChange}
                    required
                  >
                    <option hidden>Select Qualification</option>
                    <option value="High School">High School</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Graduation">Graduation</option>
                    <option value="Post-Graduation">Post-Graduation</option>
                  </select>
                  
                  <div className="p-4 bg-gray-200 rounded">
                    <h6 className="mb-2">
                      10<sup>th</sup> MarkSheet
                    </h6>
                    <input
                      type="file"
                      id="highmark"
                      name="highmark"
                      accept=".jpg, .jpeg, .png, .pdf"
                      onChange={handleHighmarkfileChange}
                      required
                    />
                  </div>
                  <div className="p-4 bg-gray-200 rounded">
                    <h6 className="mb-2">XII MarkSheet</h6>
                    <input
                      type="file"
                      id="intermark"
                      name="intermark"
                      accept=".jpg, .jpeg, .png, .pdf"
                      onChange={handleIntermarkfileChange}
                      required
                    />
                  </div>
                    <textarea
                    className="form-control border-0 p-4 rounded md:col-span-2"
                    id="address"
                    name="address"
                    value={userData.address}
                    onChange={handleChange}
                    cols="45"
                    rows="5"
                    required
                    placeholder="Enter your address"
                  ></textarea>

                  <select
                    className="form-control border-0 px-4 rounded h-12 md:col-span-2"
                    id="state"
                    name="state"
                    value={userData.state}
                    onChange={handleChange}
                    required
                  >
                    <option hidden>Select State</option>
                    <option value="ANDHRA PRADESH">ANDHRA PRADESH</option>
                    <option value="ASSAM">ASSAM</option>
                    <option value="ARUNACHAL PRADESH">ARUNACHAL PRADESH</option>
                    <option value="BIHAR">BIHAR</option>
                    <option value="GUJRAT">GUJRAT</option>
                    <option value="HARYANA">HARYANA</option>
                    <option value="HIMACHAL PRADESH">HIMACHAL PRADESH</option>
                    <option value="JAMMU KASHMIR">JAMMU & KASHMIR</option>
                    <option value="KARNATAKA">KARNATAKA</option>
                    <option value="KERALA">KERALA</option>
                    <option value="MADHYA PRADESH">MADHYA PRADESH</option>
                    <option value="MAHARASHTRA">MAHARASHTRA</option>
                    <option value="MANIPUR">MANIPUR</option>
                    <option value="MEGHALAYA">MEGHALAYA</option>
                    <option value="MIZORAM">MIZORAM</option>
                    <option value="NAGALAND">NAGALAND</option>
                    <option value="ORISSA">ORISSA</option>
                    <option value="PUNJAB">PUNJAB</option>
                    <option value="RAJASTHAN">RAJASTHAN</option>
                    <option value="SIKKIM">SIKKIM</option>
                    <option value="TAMIL NADU">TAMIL NADU</option>
                    <option value="TRIPURA">TRIPURA</option>
                    <option value="UTTAR PRADESH">UTTAR PRADESH</option>
                    <option value="WEST BENGAL">WEST BENGAL</option>
                    <option value="DELHI">DELHI</option>
                    <option value="GOA">GOA</option>
                    <option value="PONDICHERY">PONDICHERY</option>
                    <option value="LAKSHDWEEP">LAKSHDWEEP</option>
                    <option value="DAMAN and DIU">DAMAN & DIU</option>
                    <option value="DADRA and NAGAR">DADRA & NAGAR</option>
                    <option value="CHANDIGARH">CHANDIGARH</option>
                    <option value="ANDAMAN and NICOBAR">
                      ANDAMAN & NICOBAR
                    </option>
                    <option value="UTTARANCHAL">UTTARANCHAL</option>
                    <option value="JHARKHAND">JHARKHAND</option>
                    <option value="CHATTISGARH">CHATTISGARH</option>
                  </select>

                  <input
                    type="text"
                    className="form-control border-0 p-3 rounded"
                    id="country"
                    name="country"
                    value={userData.country}
                    onChange={handleChange}
                    placeholder="Country"
                    required
                  />
                  <select
                    className="form-control border-0 px-4 rounded h-12"
                    id="course"
                    name="course"
                    value={userData.course}
                    onChange={handleChange}
                  >
                    <option hidden>Select course</option>
                          <option value="Diploma in Hotel Management">
                            Diploma in Hotel Management
                          </option>
                          <option value="Diploma in Air hostess">
                            Diploma in Air hostess
                          </option>
                          <option value="Diploma in Cabin crew">
                            Diploma in Cabin crew
                          </option>
                          <option value="Diploma in Airport Management">
                            Diploma in Airport Management
                          </option>
                          <option value="Diploma in Travel & Tourism Management">
                            Diploma in Travel & Tourism Management
                          </option>
                          <option value="Diploma in Human Resources Management">
                            Diploma in Human Resources Management
                          </option>
                          <option value="Diploma in Marketing Management">
                            Diploma in Marketing Management
                          </option>
                          <option value="Diploma in Metro Management">
                            Diploma in Metro Management
                          </option>
                          <option value="Diploma in Web Designing">
                            Diploma in Web Designing
                          </option>
                  </select>
                </div>
                <div className="text-center mt-6">
                  <button
                    className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-300"
                    type="submit"
                  >
                    {isLoading ? (
                      <div className="text-md">
                        <span
                          className="spinner-border spinner-border-sm mb-1 mr-2"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Please wait...
                      </div>
                    ) : (
                      "Register now"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
