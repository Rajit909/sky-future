"use client";
import GlobalApi from "@/app/_utils/GlobalApi";
import { useUser } from "@clerk/nextjs";
import { React, useCallback, useEffect, useState } from "react";
import CourseContentSection from "../../course_preview/[courseId]/_components/CourseContentSection";
import CourseVideoDesccription from "../../course_preview/[courseId]/_components/CourseVideoDesccription";
import { toast } from "sonner";

const WatchCourse = ({ params }) => {
  const { user } = useUser();
  const [courseInfo, setCourseInfo] = useState([]);
  const [completedChapter, setCompletedChapter] = useState([]);
  // console.log("completedChapter", completedChapter)
  console.log("courseInfo in watch course name", courseInfo);

  const [activeChapterIndex, setActiveChapterIndex] = useState([]);

  useEffect(() => {
    params && user && getUserEnrolledCourseDetail();
  }, [params && user]);

  const getUserEnrolledCourseDetail = useCallback(() => {
    // get the enrolled course details
    GlobalApi.getUserEnrolledCourseDetails(
      params.enrollId,
      user.primaryEmailAddress.emailAddress
    ).then((res) => {
      // Extract completed chapter IDs
      console.log("userEnrollCourses", res);
      setCompletedChapter(
        res.userEnrollCourses[0].completedChapter.map(
          (completedChapter) => completedChapter.chapterId
        )
      );

      setCourseInfo(res.userEnrollCourses[0].courseList[0]);
      console.log(
        "Cousreinfo in watch course",
        res.userEnrollCourses[0].courseList[0]
      );
    });
  }, [params, user]);

  const onChapterCompleted = (chapterId) => {
    // Check if the chapter is already completed
    if (completedChapter.includes(chapterId)) {
      toast("Chapter already marked as completed");
      console.log("chapter already completed");
      return;
    }

    GlobalApi.markChapterCompleted(params.enrollId, chapterId).then((res) => {
      toast("Chapter marked as completed");
      if (res) {
        // Update completedChapterIds state with the newly completed chapterId
        setCompletedChapter((prevCompletedChapterIds) => [
          ...prevCompletedChapterIds,
          chapterId,
        ]);
        getUserEnrolledCourseDetail(); // Refresh enrolled course details
        console.log("chapter marked as completed");
      }
    });
  };

  return (
    courseInfo.name && (
      <div>
        <div className="grid grid-col-1 md:grid-cols-3 p-5 pt-24 md:px-20 border-2 rounded-[15px] m-4">
          {/* video desc & title */}
          <div className="col-span-2 bg-white">
            <CourseVideoDesccription
              courseInfo={courseInfo}
              activeChapterIndex={activeChapterIndex}
              watchMode={true}
              setChapterCompleted={(chapterId) => onChapterCompleted(chapterId)}
            />
          </div>

          {/* course content */}
          <div className="md:col-span-1 col-span-2 mt-4 border-2 rounded-[5px] max-h-[578px]">
            <CourseContentSection
              courseInfo={courseInfo}
              isUserAlreadyEnrolled={true}
              watchMode={true}
              completedChapter={completedChapter}
              setActiveChapterIndex={(index) => setActiveChapterIndex(index)}
            />
            <hr />
          </div>
        </div>
      </div>
    )
  );
};

export default WatchCourse;
