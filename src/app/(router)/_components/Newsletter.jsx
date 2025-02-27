"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const Newsletter = () => {
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();
      const [userData, setUserData] = useState({
        email: "",
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
            formData.append("email", userData.email);
  
          const response = await fetch("/api/newsletter", {
            method: "POST",
            body: formData,
          });
  
          if (!response.ok) {
            throw new Error("Network response not Found?");
          }
    
          const result = await response.json();
          if (result.success) {
            alert(result.message);
            
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
    <div className="mx-auto my-12 px-6 lg:px-8" data-aos="fade-up" >
    <div
        className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl rounded-2xl sm:rounded-3xl sm:px-24 xl:py-32">
       
        <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">Keep Updated
        </h2>

        <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
            Join our mailing list for selective, noteworthy updates.
        </p>

        <form className="mx-auto mt-10 flex max-w-md gap-x-4" onSubmit={handleSubmit}>

            <label htmlFor="email" className="sr-only">Email address</label>
            <input id="email" name="email" type="email" autoComplete="email" required value={userData.email} onChange={handleChange} className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6" placeholder="Enter your email"/>

            <button type="submit" className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
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
                      "Notify me"
                    )}
            </button>
        </form>

        <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
            aria-hidden="true">
            <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7">
            </circle>
            <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641" cx="0" cy="0" r="1"
                    gradientUnits="userSpaceOnUse" gradientTransform="translate(512 512) rotate(90) scale(512)">
                    <stop stopColor="#7775D6"></stop>
                    <stop offset="1" stopColor="#7ED321" stopOpacity="0"></stop>
                </radialGradient>
            </defs>
        </svg>

    </div>
</div>
    </>
  )
}

export default Newsletter