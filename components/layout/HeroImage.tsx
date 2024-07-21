import Image from "next/image"
import React from "react"
import SearchOnHero from "../ui/SearchOnHero"

const HeroImage = ({ data }) => {
  const IMGPATH: string = "https://image.tmdb.org/t/p/original"
  const idRandom: number = Math.floor(Math.random() * (20 - 1 + 1)) + 1

  return (
    <div className="relative">
      <div className="relative h-72">
        <Image
          alt="image hero"
          src={`${IMGPATH}${data[idRandom]?.backdrop_path}`}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover", // cover, contain, none
          }}
          priority
        />
      </div>
      <div className="absolute top-0 bottom-0 right-0 left-0 bg-blue-600  opacity-35"></div>
      <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-r from-blue-800 from-30% opacity-95"></div>
      <div className="flex flex-col absolute top-0 bottom-0 right-0 left-0 z-30">
        <div className=" text-white px-5 lg:px-10 py-10">
          <h1 className="tex-2xl font-bold text-5xl">Welcome.</h1>
          <h5 className="font-semibold text-2xl lg:text-4xl">
            Millions of movies, TV shows and people to discover. Explore now.
          </h5>
        </div>
        <SearchOnHero />
      </div>
    </div>
  )
}

export default HeroImage
