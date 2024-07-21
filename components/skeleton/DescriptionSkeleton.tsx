import React from "react"

const DescriptionSkeleton = () => {
  return (
    <div className="flex gap-x-10 items-center px-10 py-10">
      <div className="w-64 h-96 bg-gray-300 animate-pulse rounded-md"></div>
      <div className="flex flex-col gap-y-10">
        <div className="flex flex-col gap-y-5">
          <div className="">
            <div className="flex gap-x-3">
              <div className="w-72  h-4 bg-gray-300 animate-pulse rounded-md"></div>
              <div className="w-32 h-4 bg-gray-300 animate-pulse rounded-md"></div>
            </div>
          </div>
          <div className="flex gap-x-3">
            <div className="w-36 h-4 bg-gray-300 animate-pulse rounded-md"></div>
            <div className="w-44 h-4 bg-gray-300 animate-pulse rounded-md"></div>
            <div className="w-20 h-4 bg-gray-300 animate-pulse rounded-md"></div>
          </div>
        </div>
        <div className="flex flex-col gap-y-5">
          <div className="w-36 h-4 bg-gray-300 animate-pulse rounded-md"></div>
          <div className="space-y-3">
            <div className="w-36 h-4 bg-gray-300 animate-pulse rounded-md mb-3"></div>
            <div className="w-[35rem] h-3 bg-gray-300 animate-pulse rounded-md"></div>
            <div className="w-[35rem] h-3 bg-gray-300 animate-pulse rounded-md"></div>
            <div className="w-[35rem] h-3 bg-gray-300 animate-pulse rounded-md"></div>
            <div className="w-[35rem] h-3 bg-gray-300 animate-pulse rounded-md"></div>
          </div>
          <div className="flex mt-5 gap-x-16">
            <div className="space-y-3">
              <div className="w-36 h-3 bg-gray-300 animate-pulse rounded-md"></div>
              <div className="w-36 h-3 bg-gray-300 animate-pulse rounded-md"></div>
            </div>
            <div className="space-y-3">
              <div className="w-36 h-3 bg-gray-300 animate-pulse rounded-md"></div>
              <div className="w-36 h-3 bg-gray-300 animate-pulse rounded-md"></div>
            </div>
            <div className="space-y-3">
              <div className="w-36 h-3 bg-gray-300 animate-pulse rounded-md"></div>
              <div className="w-36 h-3 bg-gray-300 animate-pulse rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DescriptionSkeleton
