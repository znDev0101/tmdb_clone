import { Suspense } from "react"
import HeroImage from "../components/layout/HeroImage"
import HeroImageSkeleton from "../components/skeleton/HeroImageSkeleton"

async function getDataHeroImage() {
  try {
    const res = await fetch("https://api.themoviedb.org/3/trending/all/day", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN_AUTH}`,
      },
    })
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
      throw new Error("Failed to fetch data")
    }

    return res.json()
  } catch (error) {
    console.log("error message " + error)
  }
}

export default async function Page() {
  const dataHeroImage = await getDataHeroImage()

  return (
    <main>
      <section className="w-full">
        <Suspense fallback={<HeroImageSkeleton />}>
          <HeroImage data={dataHeroImage} />
        </Suspense>
      </section>
      <section></section>
    </main>
  )
}
