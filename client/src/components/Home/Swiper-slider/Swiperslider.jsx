import React from "react";
import styles from "./Swiperslider.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SwiperSlider() {
  const settings = {
    dots: false,
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
          <img src="/assets/images/swiper-slider1.jpeg" alt="" />
        </div>
        <div>
          <img src="/assets/images/swiper-slider2.jpeg" alt="" />
        </div>
        <div>
          <img src="/assets/images/swiper-slider3.jpeg" alt="" />
        </div>
        <div>
          <img src="/assets/images/swiper-slider4.jpeg" alt="" />
        </div>
        <div>
          <img src="/assets/images/swiper-slider5.jpeg" alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default SwiperSlider;
