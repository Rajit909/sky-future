import Image from 'next/image'
import React from 'react'

const PLacementItem = ({url, name, stud}) => {
  return (
    <>
    <div className="cat-item relative overflow-hidden rounded-[10px] mb-2">
            <Image
              className="img-fluid"
              src={url}
              alt=""
              width={400}
              height={80}
            />
            <div className="cat-overlay text-white text-decoration-none cursor-pointer" href="">
              <h4 className="text-white font-weight-medium">{name}</h4>
              <span>{stud}+ Students</span>
            </div>
          </div>
    
    </>
  )
}

export default PLacementItem