import React from "react"

const SearchOnHero = () => {
  return (
    <div className="relative w-11/12 px-5 lg:px-10 ">
      <input
        type="text"
        name="search movie"
        id="search movie"
        placeholder="Search for a movie,tv show, person..."
        className="w-full py-2 rounded-full px-5 focus:outline-none"
      />
      <button
        type="button"
        className="text-white absolute top-0 bottom-0 right-0 bg-gradient-to-r from-emerald-500 via-50% to-sky-500 rounded-full px-6 font-bold">
        Search
      </button>
    </div>
  )
}

export default SearchOnHero
