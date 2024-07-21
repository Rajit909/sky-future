import { Hospital } from 'lucide-react'
import React from 'react'

const GridItem = ({url, title, desc}) => {
  return (
    <>
    <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
            <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border "
                style={{backgroundImage: "linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)", borderColor: "rgb(93, 79, 240)"}}>
               {url}
               {/* <Hospital/> */}
            </div>
            <h3 className="mt-6 text-gray-400">{title}</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed  text-gray-400">
                {desc} </p>
        </div>
    </>
  )
}

export default GridItem