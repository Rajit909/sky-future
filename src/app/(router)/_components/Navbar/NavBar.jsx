"use client";
import React from "react";
import {
  Menu,
  BellDot,
  LayoutDashboard,
  Cog,
  Info,
  CircleUserRound,
  Contact,
  Wallet,
  PhoneCall,
} from "lucide-react";
import { Home } from "lucide-react";
import { BookOpen } from "lucide-react";
import { UserButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Newsletter from "../Newsletter";

const NavBar = () => {
  const { user, isLoaded } = useUser();

  return (
    <>
      <nav className="w-full p-4 px-5 flex justify-between items-center bg-white border-b-1 border-gray-100 shadow-lg h-[70px] fixed top-0 z-50 ">
        <Link href={"/"} className="ml-5">
          <Image
            width={100}
            height={100}
            src={"/images/logo/logo.png"}
            alt="logos"
          />
        </Link>

        {/* for desktop */}

        <div className="hidden lg:flex">
          <div className=" inline-flex  ">
            {isLoaded && user ? (
              <Link href={"/dashboard"}>
                <button className=" text-gray-600 font-medium text-sm px-5 py-2.5 text-center inline-flex gap-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 active:scale-95">
                  <LayoutDashboard className="mr-2" />
                  <span className="hover:text-gray-500"> Dashboard</span>
                </button>
              </Link>
            ) : (<>
              <Link href={"/"}>
                <button className=" text-gray-600 font-medium text-sm px-5 py-2.5 text-center inline-flex gap-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 active:scale-95">
                  <Home />
                  <span className="hover:text-gray-500 mt-[2.5px]">Home</span>
                </button>
              </Link>
              {/* <Link href={"/servises"}>
              <button className=" text-gray-600 font-medium text-sm px-5 py-2.5 text-center inline-flex gap-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 active:scale-95">
                <Cog />
                <span className="hover:text-gray-500 mt-[2.5px]">
                  {" "}
                  Servises
                </span>
              </button>
            </Link> */}
            <Link href={"/register"}>
              <button className=" text-gray-600 font-medium text-sm px-5 py-2.5 text-center inline-flex gap-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 active:scale-95">
                <CircleUserRound />
                <span className="hover:text-gray-500 mt-[2.5px]">
                  {" "}
                  Register
                </span>
              </button>
            </Link>
           
            <Link href={"/installments"}>
              <button className=" text-gray-600 font-medium text-sm px-5 py-2.5 text-center inline-flex gap-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 active:scale-95">
                <Wallet/>
                <span className="hover:text-gray-500 mt-[2.5px]">
                  {" "}
                  Installment
                </span>
              </button>
            </Link>
            <Link href={"/contact"}>
              <button className=" text-gray-600 font-medium text-sm px-5 py-2.5 text-center inline-flex gap-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 active:scale-95">
                <Contact />
                <span className="hover:text-gray-500 mt-[2.5px]">
                  {" "}
                  Contact us
                </span>
              </button>
            </Link>
            </>
            )}

            <Link href={"/courses"}>
              <button className=" text-gray-600 font-medium text-sm px-5 py-2.5 text-center inline-flex gap-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 active:scale-95">
                <BookOpen />
                <span className="hover:text-gray-500 mt-[2.5px]">
                  {" "}
                  Live Courses
                </span>
              </button>
            </Link>
           
            
          </div>
          <div className="cursor-pointer">          
          <Dialog className="cursor-pointer" >
                <DialogTrigger asChild>
                   <BellDot className="text-gray-500 mt-2 mr-3" />
                </DialogTrigger>
                <DialogContent className="bg-white">
                <DialogHeader>
                <DialogTitle>Subscribe Now</DialogTitle>
                </DialogHeader>
                <DialogDescription>
                Subscribe now to get notified about exclusive offers from us.
                </DialogDescription>
                <div className="flex items-center justify-center max-w-md pl-4 " style={{maxHeight:"420px"}}>
                <Newsletter/>
                </div>


                </DialogContent>
              </Dialog>
              </div>

          {/* {isLoaded && user ? (
            <div className="mt-1 ">
              <UserButton afterSignOutUrl="/"  />
            </div>
          ) : (
            <Link href={"/sign-in"}>
              <Button className=" bg-white hover:bg-[blue] hover:text-white text-black border border-black font-medium rounded-[7px] text-sm px-4 py-2 text-center inline-flex items-center justify-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 active:scale-95">
                Get started
              </Button>
            </Link>
          )} */}
        </div>
        {/* for mobile */}
        <div className="lg:hidden cursor-pointer flex">
      
          {/* {isLoaded && user ? (
                  <div className="mt-1 mr-3 ">
                    <UserButton afterSignOutUrl="/" />
                  </div>
                ) : (
                  <Link href={"/sign-in"}>
                    <Button className=" bg-white hover:bg-[blue] hover:text-white text-black border border-black font-medium rounded-[7px] text-sm px-3 py-1 text-center inline-flex items-center justify-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 active:scale-95">
                      Get started
                    </Button>
                  </Link>
                )} */}
          <DropdownMenu className="border-none">
            <DropdownMenuTrigger>
              <Menu className="mr-2" size={30} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white">
              <DropdownMenuLabel>
                {isLoaded && user ? (
                  <Link href={"/dashboard"}>
                    <button className=" text-gray-600 font-medium text-sm text-center inline-flex gap-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 active:scale-95">
                      <LayoutDashboard className="mr-2" />
                      <span className="hover:text-gray-500"> Dashboard</span>
                    </button>
                  </Link>
                ) : (
                  <Link href={"/"}>
                    <button className=" text-gray-600 font-medium text-sm px-5 text-center inline-flex gap-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 active:scale-95">
                      <Home className="mr-2" />
                      <span className="hover:text-gray-500">Home</span>
                    </button>
                  </Link>
                )}
              </DropdownMenuLabel>
              {/* <DropdownMenuSeparator /> */}
              {/* <DropdownMenuItem className="cursor-pointer px-5">
                <Link href={"/servises"}>
                  <button className=" text-gray-600 font-medium text-sm px-2 text-center inline-flex gap-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 active:scale-95">
                    <Cog />
                    <span className="hover:text-gray-500"> Servises</span>
                  </button>
                </Link>
              </DropdownMenuItem> */}
              {/* <DropdownMenuSeparator /> */}
              <DropdownMenuItem className="cursor-pointer">
                <Link href={"/about-us"}>
                  <button className=" text-gray-600 font-medium text-sm px-5 text-center inline-flex gap-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 active:scale-95">
                    <Info />
                    <span className="hover:text-gray-500"> About</span>
                  </button>
                </Link>
              </DropdownMenuItem>
              {/* <DropdownMenuSeparator /> */}
              <DropdownMenuItem>
                <Link href={"/courses"}>
                  <button className=" text-gray-600 font-medium text-sm px-5 text-center inline-flex gap-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 active:scale-95">
                    <BookOpen className="" />
                    <span className="hover:text-gray-500"> Live Courses</span>
                  </button>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={"/register"}>
                  <button className=" text-gray-600 font-medium text-sm px-5 text-center inline-flex gap-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 active:scale-95">
                    <CircleUserRound />
                    <span className="hover:text-gray-500"> Register</span>
                  </button>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={"/installments"}>
                  <button className=" text-gray-600 font-medium text-sm px-5 text-center inline-flex gap-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 active:scale-95">
                  <Wallet />
                    <span className="hover:text-gray-500"> Installments</span>
                  </button>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={"/contact"}>
                  <button className=" text-gray-600 font-medium text-sm px-5 text-center inline-flex gap-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 active:scale-95">
                  <Contact />
                    <span className="hover:text-gray-500"> Contact Us</span>
                  </button>
                </Link>
              </DropdownMenuItem>

              <DropdownMenuSeparator />
               {/* <DropdownMenuItem>
                {isLoaded && user ? (
                  <div className="mt-1 ">
                    <UserButton afterSignOutUrl="/" />
                  </div>
                ) : (
                  <Link href={"/sign-in"}>
                    <Button className=" bg-white hover:bg-[blue] hover:text-white text-black border border-black font-medium rounded-[7px] text-sm px-3 py-1 text-center inline-flex items-center justify-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 active:scale-95">
                      Get started
                    </Button>
                  </Link>
                )}
              </DropdownMenuItem>  */}
            </DropdownMenuContent> 
          </DropdownMenu>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
