import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Stack, Button } from "react-bootstrap";
import Slider from "react-slick";
import { ImgBlog } from "../css/cssHome";

const BlogBody = (props) => {
  const { products } = props;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="blog-main">
      <h2> Blogs </h2>
      <Slider className="a" {...settings}>
        {products &&
          products.blogs.map((item, key) => {
            return (
              <div key={key} className="blog-items">
                <ImgBlog src={item.img} />
                <h5>{item.title}</h5>
                <p>{item.text}</p>
              </div>
            );
          })}
      </Slider>
    </div>
  );
};
export default BlogBody;
