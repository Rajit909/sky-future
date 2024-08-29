// 'use client'
import React from 'react'
import ProgressCourseItem from './ProgressCourseItem'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const InProgressCourseList = ({userEnrolledCourses}) => {
  return (
    <div >
      <h2 className=' text-[blue] font-semibold m-3 bg-white p-3 text-[18px] rounded-[5px] '>Recently Enrolled Course</h2>
          
          {userEnrolledCourses?.length > 0 ?
          
            userEnrolledCourses.map((course, index) => (
              <div className='grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-5 mx-5 mt-10 m-5 px-8'>
              <ProgressCourseItem key={index} course={course}/>
        </div>
            )):
            // first five seconds show loading and then show no course
            <div className='text-center mx-5 mt-10 m-5 px-8'>
              <h2 className='text-[18px] font-semibold text-[#333]'>You have't Enrolled any Course! Please  
                <Link href='/courses'>
                <Button variant="link" className=" text-blue-600 font-bold">
                Enroll Now
              </Button>
              </Link>
               </h2>
             
            </div>

          }  

    </div>
  )
}

export default InProgressCourseList