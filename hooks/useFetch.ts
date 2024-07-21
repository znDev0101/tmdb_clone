import { useState, useEffect } from "react"

interface UseFetchResults {
  dataTrending: any[]
  loading: boolean
}

export function useFetch(time_window: string): UseFetchResults {
  const [dataTrending, setDataTrending] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    try {
      ;(async function () {
        try {
          setLoading(true)
          const response = await fetch(
            `https://api.themoviedb.org/3/trending/all/${time_window}`,
            {
              method: "GET",
              headers: {
                accept: "application/json",
                Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDIzNDU1ODM0NmRmYTM5YjU3NWExZTdhYzExMTk5NSIsIm5iZiI6MTcyMTM5NzYzNS44OTk2NTcsInN1YiI6IjYyYmFhZTAzOGI5NTllMDA2MmIzNDg2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aq3ZhEPv6ijrfkqsHbrJp3JkoI8nKjsdd5m0_F3ca3w`,
              },
            }
          )
          let responseResults = await response.json()
          setDataTrending(responseResults.results)
        } catch (error) {
          console.log("error message" + error)
        } finally {
          setLoading(false)
        }
      })()
    } catch (error) {
      console.log(error)
    }
  }, [time_window])

  return { dataTrending, loading }
}
