import React from "react"

const CardSkeleton = () => {
  return (
    <div className="flex-shrink-0 w-36 h-[18.5rem] border border-gray-400 rounded-md overflow-hidden mb-5 scroll-bar">
      <div className="w-full h-56 bg-gray-300 animate-pulse"></div>
      <div className="py-5 flex flex-col gap-y-2">
        <div className="w-full h-3 bg-gray-300 animate-pulse"></div>
        <div className="w-full h-3 bg-gray-300 animate-pulse"></div>
      </div>
    </div>
  )
}

export default CardSkeleton
