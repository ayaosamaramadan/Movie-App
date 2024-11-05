import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footerr from "./components/Footerr";
import Header from "./components/header/Header";
import Main from "./components/home/Main";
import Catalo from "./components/Catalo";
import Moviotv from "./components/movieTv/Moviotv";

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/tv" element={<Catalo />} />
          <Route path="/search" element={<Catalo type='movie' />} />
          <Route path="/movies" element={<Catalo type='tv' />} />
          <Route path="/movie/:id" element={<Moviotv type='movie' />} />
          <Route path="/tv/:id" element={<Moviotv type='tv'/>} />
        </Routes>
        <Footerr />
      </BrowserRouter>
    </div>
  );
}

export default App;
