import React from "react";
import styles from "./MainSllider.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MainSllider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
  };

  return (
    <div className={styles.slider1}>
      <Slider className={styles.btn} {...settings}>
        <div>
          <img className="img" src="/assets/images/main-slider1.jpeg" alt="" />
        </div>
        <div>
          <img src="/assets/images/main-slider1.jpeg" alt="" />
        </div>
        <div>
          <img src="/assets/images/main-slider1.jpeg" alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default MainSllider;
