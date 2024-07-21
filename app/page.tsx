import { Suspense } from "react"
import HeroImage from "../components/layout/HeroImage"
import HeroImageSkeleton from "../components/skeleton/HeroImageSkeleton"
import Cards from "../components/Cards"

async function getDataHeroImage(): Promise<any> {
  try {
    const res = await fetch("https://api.themoviedb.org/3/trending/all/week", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN_AUTH}`,
      },
    })

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
        <Suspense
          fallback={
            <p className="text-center mt-20 font-bold text-2xl">
              Loading Home page....
            </p>
          }>
          <HeroImage data={dataHeroImage.results} />
        </Suspense>
      </section>
      <section className="w-full py-8">
        <Cards />
      </section>
    </main>
  )
}
