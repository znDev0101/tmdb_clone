import Image from "next/image"
import React from "react"
import Link from "next/link"

const IMGPATH: string = "https://image.tmdb.org/t/p/original"
const Card = ({ data }) => {
  return (
    <Link href={`/${data.media_type}/${data.id}`}>
      <div className="flex-shrink-0 w-36 h-[18.5rem] border border-gray-400 rounded-md overflow-hidden mb-5 scroll-bar">
        <div className="relative h-56">
          <Image
            alt="poster img"
            src={`${IMGPATH}/${data.poster_path}`}
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className="flex flex-col ps-1 pt-4">
          <h5 className="font-bold leading-4 text-sm line-clamp-2">
            {data.title || data.name}
          </h5>
          <span className="text-sm text-gray-500">
            {data.release_date || data.first_air_date}
          </span>
        </div>
      </div>
    </Link>
  )
}

export default Card
