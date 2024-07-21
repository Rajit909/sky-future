
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { AOSInit } from "@/components/ui/AOS";
import NavBar from "./(router)/_components/Navbar/NavBar";
import NextTopLoader from "nextjs-toploader"
import Footer from "./(router)/_components/Footer/Footer";



export const metadata = {
  title: "Sky Futuer Aviation Academy",
  Script: "Fly in the Sky!",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
      
        <body>
        <NextTopLoader color="#000" showSpinner={false}/>
          
          {/* <Navbar/> */}
          <NavBar/>

          {/* aos lib */}
          <AOSInit/>
          <main>{children}</main>
          <div className="fixed bottom-0 right-0 p-4">
  <a className="bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center" href="#">
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
    </svg>
  </a>
</div>
          <Toaster />
          <Footer/>

        
        {/* <Script src="https://checkout.razorpay.com/v1/checkout.js"/> */}
        </body>
      </html>
    </ClerkProvider>
  );
}
