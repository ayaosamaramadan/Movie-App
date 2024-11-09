/* eslint-disable no-unused-vars */
// import { useParams } from 'react-router-dom';

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Slider from "react-slick";

function Moviotv() {
  const params = useParams();
  const navigate = useNavigate();

  const setting = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const [movie] = useState({
    id: 5,
    type: "tv",
    title: `Title`,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, culpa, illo libero beatae quod porro officia eligendi facere fuga ullam inventore perspiciatis cupiditate impedit voluptate qui voluptas soluta deleniti est.",
    coverPath: "",
    genreIds: [1, 2, 3],
    posterPath: "https://via.placeholder.com/150",
    season: [
      { id: 1, season_number: 1 },
      { id: 2, season_number: 2 },
      { id: 3, season_number: 3 },
    ],
  });

  const [seasons, setSeasons] = useState([]);
  const [casts, setCast] = useState([]);
  const [trailer, setTrailer] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  const fetchItems = () => {
    const arrs = [];
    for (let i = 0; i < 20; i++) {
      arrs.push({});
    }

    setCast(arrs);
    setSeasons(arrs);
    setTrailer(arrs);
    setRecommendations(arrs);
  };

  useEffect(() => {
    fetchItems();
    //   fetchItems(params.id).then(data => setMovie(data));
  }, []);

  console.log(params.id);
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
            <h1 className="text-4xl font-bold text-white mb-4">
              {movie.title}
            </h1>
            <p className="text-gray-300 mb-4">{movie.description}</p>
            <div className="flex gap-x-2 text-gray-300 mb-4">
              {movie.genreIds.map((id, i) => (
                <span key={i} className="bg-gray-700 px-2 py-1 rounded">
                  {id}
                </span>
              ))}
            </div>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
              Watch Now
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8">
        <h2 className="text-2xl font-bold text-white mb-4">Cast</h2>
        <Slider {...setting}>
          {casts.map((cast, index) => (
            <div key={index} className="p-2">
              <img
                src="https://via.placeholder.com/150"
                alt={`Cast ${index}`}
                className="w-32 h-32 object-cover rounded-full mx-auto"
              />
              <p className="text-center text-white mt-2">Cast {index + 1}</p>
            </div>
          ))}
        </Slider>
      </div>

      <div className="container mx-auto px-4 mt-8">
        <h2 className="text-2xl font-bold text-white mb-4">Trailers</h2>
        <Slider {...setting} slidesToShow={3}>
          {trailer.map((trailer, index) => (
            <div key={index} className="p-2">
              <img
                src="https://via.placeholder.com/150"
                alt={`Trailer ${index}`}
                className="w-full h-48 object-cover rounded-lg"
              />
              <p className="text-center text-white mt-2"> {index + 1}</p>
            </div>
          ))}
        </Slider>
      </div>

      <div className="container mx-auto px-4 mt-8">
        <h2 className="text-2xl font-bold text-white mb-4">Seasons</h2>
        <Slider {...setting}>
          {seasons.map((season, index) => (
            <div
              key={index}
              className="p-2"
              onClick={() => {
                navigate(`/tv/${movie.id}/season/${season.season_number}`);
              }}
            >
              <img
                src="https://via.placeholder.com/150"
                alt={`Season ${season.season_number}`}
                className="w-full h-48 object-cover rounded-lg"
              />
              <p className="text-center text-white mt-2">
                Season {season.season_number}
              </p>
            </div>
          ))}
        </Slider>
      </div>

      <div className="container mx-auto px-4 mt-8">
        <h2 className="text-2xl font-bold text-white mb-4">Recommendations</h2>
        <Slider {...setting}>
          {recommendations.map((recommendation, index) => (
            <div key={index} className="p-2">
              <img
                src="https://via.placeholder.com/150"
                alt={`Recommendation ${index}`}
                className="w-full h-48 object-cover rounded-lg"
              />
              <p className="text-center text-white mt-2">
                Recommendation {index + 1}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Moviotv;
