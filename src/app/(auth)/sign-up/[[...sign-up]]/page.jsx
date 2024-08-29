import { SignUp } from "@clerk/nextjs";
import Image from "next/image";
 
export default function Page() {
  return (
    <>
        <div
        className="bg-cover bg-center bg-fixed py-40"
        style={{ backgroundImage: "url('/sky/runway.jpg" }}
      >
        <div className="h-screen flex justify-center items-center">
          <div className="max-w-md lg:max-w-screen-xl sm:m-10 bg-gray-100 bg-gradient-to-r from-blue-100 to-purple-300 lg:bg-white shadow rounded-xl flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <h1 className=" text-center py-1 font-bold">Welcome To Sky Future Academy</h1>
          <SignUp/>
          </div>
            <div className="flex-1 bg-indigo-100 text-center hidden lg:flex  rounded-xl">
              <div
                className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                style={{
                  backgroundImage:
                    "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      </>
  )
}
