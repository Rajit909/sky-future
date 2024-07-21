'use client'
import React from "react";
import { Menu,  LayoutDashboard } from 'lucide-react';
import { Home } from "lucide-react";
import { BookOpen } from "lucide-react";
import {  useUser } from "@clerk/nextjs";
import Link from "next/link";

const SideNav = () => {
  const {user, isLoaded} = useUser();

  return (
    <>
        <div className='flex flex-col  mt-12 mx-5 gap-5'>
        {
              isLoaded && user ? 
              <Link href={"/dashboard"}>
            <button className=" text-gray-600 font-medium text-sm px-5 py-2.5 text-center inline-flex gap-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 active:scale-95">
              <LayoutDashboard className="mr-2"/>
             <span className="hover:text-gray-500"> Dashboard</span>
            </button>
          </Link>
              :
              <Link href={"/"}>
              <button className=" text-gray-600 font-medium text-sm px-5 py-2.5 text-center inline-flex gap-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 active:scale-95">
                <Home className="mr-2"/>
                <span className="hover:text-gray-500">Home</span>
              </button>
            </Link>
            }

          <Link href={"/courses"}>
            <button className=" text-gray-600 font-medium text-sm px-5 py-2.5 text-center inline-flex gap-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 active:scale-95">
              <BookOpen className="mr-2"/>
             <span className="hover:text-gray-500"> All Courses</span>
            </button>
          </Link>
          

        </div>
    </>
  )
}

export default SideNav
