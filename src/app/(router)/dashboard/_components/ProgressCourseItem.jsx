"use client";
import { Button } from "@/components/ui/button";
import { Clock10 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProgressCourseItem = ({ course }) => {
  console.log("progressitem courselist", course)
  console.log("progressitem courselist banner", course?.courseList)
  const getTotalCompletedChapterPerc = (item) => {
    const perc = (item?.completedChapter?.length/item?.courseList?.chapter?.length)*100
    return perc
  }
  return (
    <Link href={"/course_preview/"+course?.courseList[0].slug}>
    <div className="bg-white border rounded-xl shadow-md hover:shadow-md cursor-pointer hover:shadow-purple-300">
      <div>
        <Image
          src={course?.courseList[0].banner.url}
          width={500}
          height={200}
          alt="banner"
          className="rounded-t-xl h-[120px] lg:h-[150px] object-cover]"
        />
      </div>
      <div className="flex flex-col gap-5 p-3">
        <h2 className="font-medium">{course.courseList[0].name}</h2>
        {/* <h2 className="text-[12px] text-gray-400">
          {course.courseList?.author}
        </h2> */}

        <div className="flex items-center juc gap-5">
          {/* <Image
            src="/images/chapter.jfif"
            width={30}
            height={30}
            alt="chapter"
          /> */}
          <Clock10/>
          <h2 className="font-medium text-sm mb-4 ">
            {/* Total Chapters: {(course.courseList?.totalChapters)} */}
            (3 months)
          </h2>
        </div>
        <div className="flex items-center gap-5 cursor-pointer">
          <Button variant="outline" className="rounded-[5px] font-bold">
           continue learning
          </Button>
        </div>
        {/* <h2 className="text-[12px] text-gray-400">
          {getTotalCompletedChapterPerc(course)}% <span className="float-right">{course?.completedChapter?.length}/{course.courseList?.totalChapters} Chapters</span>
        </h2>
        <input type="range" name="progress" id="progress" value={getTotalCompletedChapterPerc(course)} /> */}
      </div>
    </div>
    </Link>
  );
};

export default ProgressCourseItem;
