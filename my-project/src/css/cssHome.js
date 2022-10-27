import { height } from "@mui/system";
import styled from "styled-components";

export const Img = styled.img`
  width: 100%;
  &.img-childBaner {
    width: 40%;
    border-radius: 20px;
    position: absolute;
    bottom: -40%;
    right: 10%;
  }
  &.caretory-img {
    border-radius: 20px;
  }
`;
export const ImgBlog = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  overflow: hidden;
  border-radius: 20px;
`;

export const Title = styled.div``;
export const TitleBanner = styled.div`
  position: absolute;
  bottom: 20%;
  left: 10%;
  width: 500px;
  color: #fff;
  &.title-text .out-login {
    border: 1px solid transparent;
    width: 30%;
    text-align: center;
  }
  &.title-text .login:hover {
    /* border: 1px solid #2871c6; */
  }
  &.title-text div a div {
    background-color: #2871c6;
    padding: 6px 16px;
  }
  &.user {
  }
  .example-enter {
    opacity: 0.01;
  }

  .example-enter.example-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }

  .example-leave {
    opacity: 1;
  }

  .example-leave.example-leave-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }
`;
export const Prv = styled.div`
  position: relative;
  z-index: 10;
`;
export const TitleBanerDow = styled.div`
  h6 {
    margin: 20px 0;
  }
`;
export const DisplayFlex = styled.div`
  width: 40%;
  margin-left: 50px;
  padding: 57px 21px;
  display: flex;
  justify-content: center;
  margin: 50px 0;
`;
// baner carousel
export const Carousel = styled.div`
  padding-bottom: 150px;
`;

export const SliderCrs = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
  &.img-child {
    border-radius: 0;
  }
`;

export const Extraordina = styled.h4`
  text-align: center;
  margin-bottom: 20px;
`;
export const BodyItem = styled.div`
  width: 100%;
  height: 750px;
  background-color: #000;
  padding-top: 50px;
  div h5,
  div p {
    color: #fff;
  }
  &.container .slick-slider .slick-list .slick-track .slick-cloned div {
    margin-bottom: 20px;
  }
  a {
    text-decoration: none;
  }
`;
export const ItemsPadding = styled.div`
  padding: 10px;
  height: 270px;
  /* margin-bottom: 30px; */
  overflow: hidden;
  object-fit: cover;
  p {
    color: #fff;
    margin-top: 8px;
  }
  img {
    border-radius: 15px;
  }
`;
export const ImgHoverItem = styled.img`
  width: 100%;
  :hover {
    transform: scale(1.05) !important;
    cursor: pointer;
  }
`;

export const HeightItem = styled.div`
  height: 270px;
`;
//vvideo
export const Video = styled.div`
  width: 100%;
  video {
    width: 100%;
  }
`;
export const MainImg = styled.div`
  position: relative;
  &img {
    width: 100%;
  }
`;
export const ImgZ101 = styled.div`
  position: absolute;

  width: 100%;
  z-index: 100;
  top: 0;
  left: 0;
`;
export const ImgZ100 = styled.div`
  /* position: absolute; */

  width: 100%;
  z-index: 100;
  top: 0;
  left: 0;
`;
export const ImgZ99 = styled.div`
  position: absolute;

  width: 100%;
  z-index: 99;
  bottom: 0;
  left: 0;
  object-fit: cover;
  overflow: hidden;
`;
export const ImgZ98 = styled.div`
  position: absolute;

  width: 100%;
  z-index: 98;
  top: 0;
  left: 0;
`;
export const MarginBT = styled.div`
  margin: 50px 0;
`;
export const AnimateTest = styled.div`
  animation: "zoomInUp";
  animation-duration: 3s;

  transition: 0.6s;
`;
export const Margincategory = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
`;

//blogbody
export const H5blog = styled.h5`
  text-decoration: none;
  margin: 10px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;
export const Pblog = styled.p`
  text-decoration: none;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;
export const Pcategory = styled.div`
  margin-top: 10px;
  text-decoration: none;
  list-style: none;
`;
export const PrvBanerInfo = styled.div`
  position: relative;
`;
export const PbsBanerInfo = styled.div`
  position: absolute;
  top: 30%;
  left: 3%;
`;

export const name = styled.div``;
