import { BodyItem, Img, ItemsPadding, ImgHoverItem } from "../css/cssHome";
import React from "react";
import { Link } from "react-router-dom";

import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
// import "../../node_modules/slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../AppCss/CssForSlick.css";
const ItemMain = (props) => {
  const { products } = props;
  const settings = {
    className: "center",
    rows: 2,
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,

    slidesToScroll: 6,
    initialSlide: 0,
    centerPadding: "100px",
    centerMode: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <BodyItem className="321">
      <div className="container">
        <h5>New releases</h5>
        <p>Great PS5 and PS4 games available now</p>
        <Slider className="slider" {...settings}>
          {products.items.map((items, index) => {
            return (
              <Link key={index} to={`infoGame/${items._id}`}>
                <ItemsPadding>
                  <ImgHoverItem src={items.imgItem} />
                  <p>{items.name}</p>
                </ItemsPadding>
              </Link>
            );
          })}
        </Slider>
      </div>
    </BodyItem>
  );
};
export default ItemMain;
