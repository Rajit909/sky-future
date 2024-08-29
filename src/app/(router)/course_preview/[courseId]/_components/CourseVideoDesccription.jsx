import React, { useEffect } from "react";
import VideoPlayer from "./VideoPlayer";
import { Button } from "@/components/ui/button";
import { CircleCheck } from "lucide-react";

import DOMPurify from "dompurify";

const CourseVideoDesccription = ({
  courseInfo,
  activeChapterIndex,
  watchMode = false,
  setChapterCompleted,
}) => {
  console.log("courseinfo",courseInfo);
  const url = courseInfo?.chapter[activeChapterIndex]?.video

  useEffect(()=>{
      url
  },[])

    // Sanitize HTML content
    const sanitizedHtml = DOMPurify.sanitize(courseInfo?.description?.html || '');


  return (
    <div className="">
      {/* video player */}
      <div className="max-h-2xl">
        <VideoPlayer
          videoUrl={watchMode? url : courseInfo?.chapter[0]?.video}
          poster={!watchMode ? courseInfo?.banner?.url : null}
        />
      </div>

      {/* description */}
      <div className=" pt-36">
      <h2 className="text-[20px] font-extrabold">{courseInfo.name}</h2>
      {/* <h2 className=" text-gray-500 font-bold text-[14px] mb-3 ">
        {courseInfo.author}{" "}
      </h2> */}
      <h2 className="mt-5 font-semibold text-[17px]">
        {watchMode ? (
          <div className="max-w-3xl">
            <span className="flex items-center justify-between">
              <div className=" ">
                {courseInfo?.chapter[activeChapterIndex]?.name}
              </div>
              {/* <Button
                onClick={() =>
                  setChapterCompleted(
                    courseInfo?.chapter[activeChapterIndex]?.id
                  )
                }
              >
                <CircleCheck />
              </Button> */}
            </span>
          </div>
        ) : (
          <span>About this course</span>
        )}
      </h2>

      <div>
        {watchMode ? (
          <div
          className=" text-md mt-2">
            {courseInfo?.chapter[activeChapterIndex]?.shortDesc}
          </div>
        ) : (
          <div
              className="text-md mt-2"
              dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
            />
          
        )}
      </div>
      </div>
    </div>
  );
};

export default CourseVideoDesccription;
