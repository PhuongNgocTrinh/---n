import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
import React, { useState, useRef, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "../AppCss/App.css";
import { DflexAll, Img, Logo, ListMenu, ItemMenu } from "../css/cssComponent";
const Header = () => {
  const src = "../images/logo2.png";
  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
  const headerRef = useRef(null);

  // handle scroll event
  const handleScroll = (elTopOffset, elHeight) => {
    if (window.pageYOffset > elTopOffset + elHeight) {
      setSticky({ isSticky: true, offset: elHeight });
    } else {
      setSticky({ isSticky: false, offset: 0 });
    }
  };

  useEffect(() => {
    var header = headerRef.current.getBoundingClientRect();
    const handleScrollEvent = () => {
      handleScroll(header.top, header.height);
    };

    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);
  return (
    <div className="main-body">
      <DflexAll
        id="sticky-header"
        className={`navbar${sticky.isSticky ? " sticky" : ""} nav`}
        ref={headerRef}
      >
        <Logo className="logo">
          <Link to="/">
            <Img className="img-logo" src={src} />
          </Link>
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
