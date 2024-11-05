import { useNavigate } from "react-router-dom";

function Thretitems({ item }) {
  const navigate =useNavigate();
  const smallText = item.description.split(" ").slice(0, 15).join(" ") + "...";

  return (
    <div key={item.id} className="relative p-4 max-w-xs mx-auto"
    onClick={()=>navigate(`/${item.type}/${item.id}`)}>
      <div className="relative overflow-hidden rounded-lg shadow-lg w-48 mx-auto">
        <img
          src={item.posterPath}
          alt={item.title}
          className="w-full h-64 object-cover transition-transform duration-500 transform hover:scale-105 rounded-t-lg"
        />
      </div>
      <div className="bg-gray-800 p-4 rounded-b-lg shadow-lg w-48 mx-auto">
        <h3 className="text-xl font-bold mb-2 text-white drop-shadow-lg tracking-wide">
          {item.title}
        </h3>
        <p className="text-gray-300 text-left drop-shadow-md max-w-prose leading-relaxed">
          {smallText}
        </p>
      </div>
    </div>
  );
}

export default Thretitems;