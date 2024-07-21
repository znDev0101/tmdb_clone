import { Suspense } from "react"
import Description from "../../../components/Description"
import DescriptionSkeleton from "../../../components/skeleton/DescriptionSkeleton"

async function getDataDetails(id: number, mediaType: string) {
  try {
    const res = await fetch(
      `
https://api.themoviedb.org/3/${mediaType}/${id}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.ACCESS_TOKEN_AUTH}`,
        },
      }
    )

    if (!res.ok) {
      throw new Error("failed to fetch")
    }

    return res.json()
  } catch (error) {
    console.log("error message" + error)
  }
}

export default async function InfoMovie({
  params,
}: {
  params: { id: number; mediaType: string }
}) {
  const { id, mediaType } = params

  const dataDetail = await getDataDetails(id, mediaType)

  return (
    <main>
      <section className="w-full">
        <Suspense
          fallback={
            <p className="text-center mt-20 font-bold text-2xl">
              Loading detail....
            </p>
          }>
          <Description data={dataDetail} />
        </Suspense>
      </section>
    </main>
  )
}
