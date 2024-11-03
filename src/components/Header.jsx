import { useRef, useState, useEffect } from "react";
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import Result from "./result";

function Header() {
  const [keywordInSearch, setKeyword] = useState('');

  const { pathname}= useLocation();
  const [_, setPathname] = useState('');


  const [params] = useSearchParams();



  const navigate = useNavigate();

  
  const pathnameRef = useRef('');

  const keywordInURL = useRef('');
  
  const [isSearchfoc, setSearchFoc] =useState(false);


  const handleSearch = () => {
    if (keywordInSearch) {
      keywordInURL.current = keywordInSearch;
      navigate(`/search?q=${keywordInSearch}`);
      setSearchFoc(false);
    
    }
  };

  // const initKeyword = () => {
  //   if (pathnameRef.current === '/search') {
  //     setKeyword(keywordInURL.current); 
  //   } else {
  //     setKeyword('');
  //   }
  // };


  const onWindowClick = () => {
    setSearchFoc(false);
    // initKeyword();
  };


  useEffect(() => {
    setPathname(pathname);
    pathnameRef.current = pathname;
     keywordInURL.current = params.get('q') || '';
    // initKeyword();
  },[ pathname, params]);

  
  useEffect(() => {
    window.addEventListener('click', onWindowClick);
    return () => {
      window.removeEventListener('click', onWindowClick);
    };
  }, []);

  console.log(`pathname :${pathname}`);
  console.log(` params :${params}`);
  console.log(`pathnameRef.current :${pathnameRef.current}`); 
  console.log(`keywordInURL.current :${keywordInURL.current}`);
  console.log(`keywordInSearch :${keywordInSearch}`);
  console.log(`isSearchfoc :${isSearchfoc}`);

  return (
    <div className="bg-gray-800 p-5 text-center sticky top-0 z-[99]">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-6">
          <h1 className="text-4xl text-blue-400 font-semibold">
            <Link to={'/'}>Movielist</Link>
          </h1>

          <div className="pt-1.5 flex items-center gap-1.5            ">
            <Link to={'/movies'} className="text-white text-xl hover:underline">
              Movies
            </Link>
            <Link to={'/tv'} className="text-white text-xl hover:underline">
              TV
            </Link>
          </div>
        </div>

        <div className="border-b-[1.5px] border-white flex items-center p-1 flex-[0.5] focus-within:border-blue-400 relative">
          <input
            onClick={(e) => {
              e.stopPropagation();
              setSearchFoc(true);
            }}
            onKeyDown={(e) => (e.key === 'Enter' ? handleSearch() : '')}
            onChange={(e) => setKeyword(e.currentTarget.value)}
            value={keywordInSearch}
            type="text"
            className="bg-transparent outline-0 flex-1 text-white"
            placeholder="search..."
          
          />
          {isSearchfoc && keywordInSearch ? (
            <Result keyword={keywordInSearch} handleSearch={handleSearch} />
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;