import React from "react";
import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <div className="overflow-hidden my-20">
      <Slider {...settings}>
        <div>
          <img src="https://i.ytimg.com/vi/0kgug4sntCU/maxresdefault.jpg" />
        </div>
        <div>
          <img src="https://i.ytimg.com/vi/0kgug4sntCU/maxresdefault.jpg" />
        </div>
        <div>
          <img src="https://i.ytimg.com/vi/0kgug4sntCU/maxresdefault.jpg" />
        </div>
        <div>
          <img src="https://i.ytimg.com/vi/0kgug4sntCU/maxresdefault.jpg" />
        </div>
        <div>
          <img src="https://i.ytimg.com/vi/0kgug4sntCU/maxresdefault.jpg" />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
