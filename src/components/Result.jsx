import { useState, useEffect } from "react";

function Result({ keyword ,handleSearch }) {
  const [items, setItems] = useState([]);

  const fetchItems = () => {

    const arrs = [];

    for (let i = 0; i < 10; i++) {
      arrs.push({
        id: i,
        title: `Title ${i}`,
        description: `Description for item ${i}`,
        coverPath: '',
        genreIds: [1, 2, 3],
        posterPath: 'https://via.placeholder.com/150',
        season: []
      });
    }
    setItems(arrs);
  };

  useEffect(() => {
    fetchItems();
  }, [keyword]);

  return (
    <div className="absolute top-[48px] left-0 right-0 bg-white rounded-md shadow-lg max-h-[480px] overflow-y-auto">
      <div className="p-4">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-start p-1.5 rounded-lg hover:bg-gray-200 cursor-pointer m-1.5"
          >
            <img src={item.posterPath} alt={item.title} className="w-16 h-16 object-cover rounded-md" />
            <div className="px-3 truncate">
              <p className="text-base font-semibold truncate">{item.title}</p>
              <ul className="flex flex-wrap gap-x-1.5 text-sm text-gray-600 opacity-70">
                {item.genreIds.map((id, i) => (
                  <li key={i}>{id}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => handleSearch()}
        className="px-3 py-1.5 bg-blue-500 text-white w-full hover:bg-blue-600 sticky bottom-0 shadow-lg"
      >
        More results
      </button>
    </div>
  );
}

export default Result;