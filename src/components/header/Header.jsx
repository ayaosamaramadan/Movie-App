import { useRef, useState, useEffect } from "react";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import Result from "./Result";

function Header() {
  const location = useLocation();
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const [pathname, setPathname] = useState("");
  const pathnameRef = useRef("");
  const defaultKeyword = useRef("");

  const [keyword, setKeyword] = useState("");
  const [isSearchFocus, setSearchFocus] = useState(false);
  const searchRef = useRef(null);

  const goToSearchPage = () => {
    if (keyword) {
      defaultKeyword.current = keyword;
      navigate(`/search?q=${keyword}`);
      setSearchFocus(false);
      searchRef.current?.blur();
    }
  };

  const initKeyword = () => {
    if (pathnameRef.current === "/search") {
      setKeyword(defaultKeyword.current);
    } else {
      setKeyword("");
    }
  };

  const onWindowClick = () => {
    setSearchFocus(false);
    initKeyword();
  };

  useEffect(() => {
    setPathname(location.pathname);
    pathnameRef.current = location.pathname;
    defaultKeyword.current = params.get("q") || "";
    initKeyword();
  }, [location.pathname, params]);

  useEffect(() => {
    window.addEventListener("click", onWindowClick);
    return () => {
      window.removeEventListener("click", onWindowClick);
    };
  }, []);

  return (
    <div className="bg-gray-800 p-5 text-center sticky top-0 z-[99]">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-6">
          <h1 className="text-4xl text-blue-400 font-semibold">
            <Link to={"/"}>Movielist</Link>
          </h1>
          <div className="pt-1.5 flex items-center gap-1.5">
            <Link to={"/movies"} className="text-white text-xl hover:underline">
              Movies
            </Link>
            <Link to={"/tv"} className="text-white text-xl hover:underline">
              TV
            </Link>
          </div>
        </div>
        <div className="border-b-[1.5px] border-white flex items-center p-1 flex-[0.5] focus-within:border-blue-400 relative">
          <input
            onClick={(e) => {
              e.stopPropagation();
              setSearchFocus(true);
            }}
            onKeyDown={(e) => (e.key === "Enter" ? goToSearchPage() : "")}
            onInput={(e) => setKeyword(e.currentTarget.value)}
            value={keyword}
            type="text"
            className="bg-transparent outline-0 flex-1 text-white"
            placeholder="search..."
            ref={searchRef}
          />
          {isSearchFocus && keyword ? (
            <Result keyword={keyword} goToSearchPage={goToSearchPage} />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
