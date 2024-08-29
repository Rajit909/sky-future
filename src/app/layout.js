import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { AOSInit } from "@/components/ui/AOS";
import NavBar from "./(router)/_components/Navbar/NavBar";
import NextTopLoader from "nextjs-toploader";
import Footer from "./(router)/_components/Footer/Footer";
import Head from "next/head";
import { Toaster } from "@/components/ui/sonner";

export const metadata = {
  title: "Sky Future Aviation Academy",
  Script: "Fly in the Sky!",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />

          <link rel="" href="/favicon.ico" />
        </Head>
        <body>
          <NextTopLoader color="#000" showSpinner={false} />

          {/* <Navbar/> */}
          <NavBar />

          {/* aos lib */}
          <AOSInit />
          <main>{children}</main>
          <Toaster 
            position="bottom-right"
            reverseOrder={false}
            gutter={8}
            containerStyle={{}}
            containerClassName=""
            toastOptions={{
              // Define default options
              className: "",
              duration: 3000,
              style: {
                background: "#363636",
                color: "#fff",
              },
              success: {
                duration: 2000,
                theme: {
                  primary: "green",
                  secondary: "black",
                },
              },
            }}
          />
          <div className="fixed bottom-0 right-0 p-4">
            <a
              className="bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center"
              href="#"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                ></path>
              </svg>
            </a>
          </div>
          <Footer />

          {/* <Script src="https://checkout.razorpay.com/v1/checkout.js"/> */}
        </body>
      </html>
    </ClerkProvider>
  );
}
