/* eslint-disable no-unused-vars */
// import { useParams } from 'react-router-dom';

import { useEffect, useState } from "react";

function Moviotv() {
  // const params = useParams();

  // eslint-disable-next-line no-unused-vars
  const [movie, setMovie] = useState({
        id: 0,
        type: "tv",
        title: `Title`,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, culpa, illo libero beatae quod porro officia eligendi facere fuga ullam inventore perspiciatis cupiditate impedit voluptate qui voluptas soluta deleniti est.",
        coverPath: "",
        genreIds: [1, 2, 3],
        posterPath: "https://via.placeholder.com/150",
        season: [],
    })

    const [casts , setCast] = useState([]);
    const fetchItems = () => {
       const arrs = [];
        for (let i = 0; i < 20; i++) {
          arrs.push({});
        }
        setCast(arrs);
    }

    useEffect(() => {
      fetchItems();
    }
    , []);

  return (
    <>
      <div className="h-[300px] relative">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <img
          src="https://via.placeholder.com/150"
          className="h-full w-full object-cover rounded-lg"
          alt="Cover"
        />
        <div className="absolute bottom-[-170px] transform translate-x-1/2">
          <img
            src="https://via.placeholder.com/150"
            alt="title"
            className="w-52 h-72 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className="container mr-36 px-4 mt-24">
        <div className="flex lg:flex-row ">
          <div className="w-full lg:w-1/3 ml-80 mt-[-145px] absolute">
            <h1 className="text-4xl font-bold text-white mb-4">{movie.title}</h1>
            <p className="text-gray-300 mb-4">
              {movie.description}
              </p>
              <div className="flex gap-x-2 text-gray-300 mb-4">
              {movie.genreIds.map((id, i) => (
                <span key={i} className="bg-gray-700 px-2 py-1 rounded">{id}</span>
              ))}
            </div>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
              Watch Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Moviotv;