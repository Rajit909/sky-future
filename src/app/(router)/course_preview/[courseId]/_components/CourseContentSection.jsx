import { React, useState } from "react";
import { Lock, Play } from "lucide-react";

const CourseContentSection = ({ courseInfo, isUserAlreadyEnrolled, watchMode=false, setActiveChapterIndex, completedChapter}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // const totalChapters = courseInfo?.chapter?.length || 0;
  // const chaptersPerInstallment = Math.ceil(totalChapters / 3);// 3 is the number of installments

  
  // use to check the chapter completed or not
  const checkIsChapterCompleted = (chapterId)=>{
    return completedChapter.some(item => item===chapterId)
    
  }


  // Check if courseInfo and its chapter property are present and if chapter is an array
  if (!courseInfo || !Array.isArray(courseInfo.chapter)) {
    return <div>Course content is not available.</div>;
  }

  return (
    <div className="p-3 bg-white rounded-[10px] mt-5">
      <h2>Contents</h2>
      {/* {
        courseInfo?.chapter?.length
      } */}
      <div className={` ${watchMode&&'max-h-[510px]'} overflow-y-auto`} >
      {courseInfo.chapter.map((item, index) => (
        
        <div >
          <h2 className={`border rounded-[8px] px-4 m-2 flex justify-between p-2 cursor-pointer 
    ${activeIndex === index ? 'bg-[blue] text-white' : ''}
    ${isUserAlreadyEnrolled ? 'hover:bg-[#0000FF] hover:text-white' : ''}
  `}
          onClick={() => {watchMode&&setActiveChapterIndex(index)
          watchMode&&setActiveIndex(index)
          }}
          >
            
            {index + 1}. {item.name}
            {
              activeIndex===index || isUserAlreadyEnrolled?
              <Play className="h-4 w-4 mt-1"/>
             : <Lock className="h-4 w-4" />
            }
          </h2>
        </div>
      ))}
      </div>

    </div>
  );
};

export default CourseContentSection;