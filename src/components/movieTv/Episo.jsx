import {  useState } from "react";


function Episo() {

  // eslint-disable-next-line no-unused-vars
  const [film] = useState({
    id: 0,
    type: "tv",
    title: `Title`,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, culpa, illo libero beatae quod porro officia eligendi facere fuga ullam inventore perspiciatis cupiditate impedit voluptate qui voluptas soluta deleniti est.",
    coverPath: "",
    genreIds: [1, 2, 3],
    posterPath: "https://via.placeholder.com/150",
    season: [
      {id: 1,season_number:1}
      ,{id: 2,season_number:2}
      ,{id: 3,season_number:3}
    ],
  });


  return (
    <>
    \ <div className="container mx-auto px-4 py-16">
      <h2 className="text-2xl font-semibold">Seasons</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {film.season.map((season) => (
          <div key={season.id}>
            <img
              src={film.posterPath}
              alt="poster"
              className="rounded-lg shadow-md"
            />
            <h3 className="mt-2 text-lg font-semibold">Season {season.season_number}</h3>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Episo