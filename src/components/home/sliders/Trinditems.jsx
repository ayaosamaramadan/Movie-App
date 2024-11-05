import { useNavigate } from "react-router-dom";

function Trinditems({ item }) {
  const navigate = useNavigate();
  return (
    <div
      key={item.id}
      onClick={() => navigate(`/${item.type}/${item.id}`)}
      className="relative p-4"
    >
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        <img
          src={item.posterPath}
          alt={item.title}
          className="w-full h-64 object-cover transition-transform duration-500 transform hover:scale-105 rounded-t-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-75 flex flex-col justify-end p-6">
          <h3 className="text-3xl font-bold mb-2 text-white drop-shadow-lg">
            {item.title}
          </h3>
          <p className="text-gray-300 text-left drop-shadow-md">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Trinditems;
