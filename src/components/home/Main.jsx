import { useEffect, useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Trinditems from "./sliders/Trinditems";
import Thretitems from "./sliders/Thretitems";
import PrevArrow from "./sliders/PrevArrow";
import NextArrow from "./sliders/NextArrow";

function Main() {
  const Trindsettings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: <PrevArrow type="thre" />,
    nextArrow: <NextArrow type="thre" />,
  };

  const ThreSettings = {
    slidesToShow: 5,
    slidesToScroll: 3,
    infinite: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    speed: 1500,
  };

  const [trendItems, settrendItems] = useState([]);
  const [threters, setThreters] = useState([]);
  const fetchItems = () => {
    const arrs = [];

    for (let i = 0; i < 10; i++) {
      arrs.push({
        id: i,
        title: `Title ${i}`,
        type: "tv",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, culpa, illo libero beatae quod porro officia eligendi facere fuga ullam inventore perspiciatis cupiditate impedit voluptate qui voluptas soluta deleniti est.",
        coverPath: "",
        genreIds: [1, 2, 3],
        posterPath: "https://via.placeholder.com/150",
        season: [],
      });
    }
    settrendItems(arrs);
    setThreters(arrs);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <>
      {/* {trendItems.map((item, i) => (
      <Slider {...settings} key={i}>
      <Trinditems key={i} item={item} />
      </Slider>
    ))} */}

      <div className="container mx-auto p-4">
        <Slider {...Trindsettings}>
          {trendItems.map((item) => (
            <Trinditems key={item.id} item={item} />
          ))}
        </Slider>

        <h2 className="text-3xl font-bold mb-4 mt-8 text-white">Threters</h2>
        <Slider {...ThreSettings}>
          {threters.map((item) => (
            <Thretitems key={item.id} item={item} />
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Main;
