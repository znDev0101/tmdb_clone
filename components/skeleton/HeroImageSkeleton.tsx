import React from "react"
import { FaImage } from "react-icons/fa6"

const HeroImageSkeleton = () => {
  return (
    <div className="w-full min-h-80 relative flex justify-center items-center">
      <FaImage className=" text-7xl text-gray-400" />
      <div className="absolute top-0 bottom-0 right-0 left-0 bg-gray-300 animate-pulse -z-10"></div>
    </div>
  )
}

export default HeroImageSkeleton
