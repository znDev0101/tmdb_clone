"use client"

import React, { useState, useEffect } from "react"
import Card from "./ui/Card"
import { useFetch } from "../hooks/useFetch"
import CardSkeleton from "./skeleton/CardSkeleton"

type Trending = "day" | "week"

const Cards = () => {
  const [trending, settrending] = useState<Trending>("day")
  const { dataTrending, loading } = useFetch(trending)

  return (
    <div className="w-full">
      <div className="flex gap-x-5 px-5 lg:px-10">
        <h2 className="font-semibold text-xl">Trending</h2>
        input
      </div>
      <div className="flex gap-x-5 overflow-x-scroll pt-5 px-5  lg:px-10">
        {loading
          ? new Array(10).fill("").map((_, i) => <CardSkeleton key={i} />)
          : dataTrending.map((data, i) => {
              return <Card key={i} data={data} />
            })}
      </div>
    </div>
  )
}

export default Cards
