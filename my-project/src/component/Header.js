import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
import React, { useState, useRef, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "../AppCss/App.css";
import Headroom from "../../src/index";
import {
  DflexAll,
  Img,
  Logo,
  ListMenu,
  Img2,
  Animate,
  RotateInDiv,
  RotateOutDiv,
} from "../css/cssComponent";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CSSTransitionGroup } from "react-transition-group";
import "animate.css/animate.min.css";
import { useSelector } from "react-redux";

const Header = () => {
  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
  const { cart } = useSelector((state) => state.carts);

  // handle scroll event
  const elemenScroll = useRef();
  var scrollableElement = document.body;
  useEffect(() => {
    scrollableElement.addEventListener("wheel", checkScrollDirection);

    function checkScrollDirection(event) {
      if (checkScrollDirectionIsUp(event)) {
        elemenScroll.current.style.top = "0px";
      } else {
        elemenScroll.current.style.top = "-70px";
      }
    }
    function checkScrollDirectionIsUp(event) {
      if (event.wheelDelta) {
        return event.wheelDelta > 0;
      }
      return event.deltaY < 0;
    }
  });
  const src = "../images/avatar.png";
  const src2 = "../images/avatar2.png";
  return (
    <div className="main-body">
      <DflexAll
        ref={elemenScroll}
        id="sticky-header"
        className={`navbar${sticky.isSticky ? " sticky" : ""} nav`}
      >
        <Logo className="logo">
          <RotateInDiv style={{ width: "100%", position: "absolute" }}>
            {" "}
            <Img src={src2} />
          </RotateInDiv>
          <RotateOutDiv style={{ width: "100%", position: "absolute" }}>
            {" "}
            <Img src={src} />
          </RotateOutDiv>
        </Logo>
        <ListMenu className="list-menu">
          <Link to="/" className="items-menu">
            Home
          </Link>

          <Link to="game" className="items-menu">
            Game
          </Link>

          <Link to="blogs" className="items-menu">
            Blogs
          </Link>

          <Link to="aboutus" className="items-menu">
            About Us
          </Link>

          <Link to="fqa" className="items-menu">
            FQA
          </Link>
        </ListMenu>
        <DflexAll className="user">
          <Link to="login" className="login">
            <div>login</div>
          </Link>
          <div className="icon-search">
            {<SearchIcon className="icon-search-child" />}
          </div>
          <Link className="icon-cart" to="cart">
            {<ShoppingCartIcon />}
            <div className={cart.length === 0 ? "" : "count"}>
              <span>{cart.length === 0 ? "" : cart.length} </span>
            </div>
          </Link>
        </DflexAll>
      </DflexAll>

      <Outlet />
      <Footer />
    </div>
  );
};
export default Header;
