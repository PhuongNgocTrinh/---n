import React, { Component } from "react";
import Slider from "react-slick";
import { Carousel } from "../css/cssHome";

import {
  Title,
  Img,
  DisplayFlex,
  Prv,
  TitleBanerDow,
  SliderCrs,
} from "../css/cssHome";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "../../node_modules/slick-carousel/slick/slick.css";
// import "../../node_modules/slick-carousel/slick/slick-theme.css";
import { baseUrl } from "./config";
import TitleOfBanner from "../component/TitleOfBanner";
import "../AppCss/App.css";
export default function BanerCarousel({ products }) {
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <SliderCrs src={`${baseUrl}/abstract0${i + 1}.png`} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Carousel>
      <Slider {...settings}>
        {products.imgBaner.map((item, index) => {
          return (
            <Prv key={index}>
              <SliderCrs className="img-child" src={baseUrl + item.img} />
              <TitleOfBanner />
            </Prv>
          );
        })}
      </Slider>
    </Carousel>
  );
}
