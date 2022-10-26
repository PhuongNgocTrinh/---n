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
} from "../css/cssComponent";

import { CSSTransitionGroup } from "react-transition-group";
import "animate.css/animate.min.css";
const Header = () => {
  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });

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
          <CSSTransitionGroup>
            <Img src={src} />
          </CSSTransitionGroup>{" "}
          <CSSTransitionGroup>
            <Img src={src2} />
          </CSSTransitionGroup>
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
        </DflexAll>
      </DflexAll>

      <Outlet />
      <Footer />
    </div>
  );
};
export default Header;
