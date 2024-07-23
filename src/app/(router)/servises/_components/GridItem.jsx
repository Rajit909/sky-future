import { Hospital } from 'lucide-react'
import React from 'react'

const GridItem = ({url, title, desc}) => {
  return (
    <>
    <div className="rounded-[8px] shadow-xl border-2 bg-transparent p-8 text-center">
            <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border "
                style={{backgroundImage: "linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)", borderColor: "black", borderRadius:"5px"}}>
               {url}
               {/* <Hospital/> */}
            </div>
            <h3 className="mt-6 text-gray-600">{title}</h3>
            <p className="my-4 mb-0 font-normal text-gray-600 leading-relaxed">
                {desc} </p>
        </div>
    </>
  )
}

export default GridItem