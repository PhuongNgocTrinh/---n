import "./AppCss/App.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./page/Layout";
import Home from "./page/Home";
import Blogs from "./page/Blogs";
import Game from "./page/Game";
import AboutUs from "./page/AboutUs";
import FQA from "./page/FQA";
import User from "./page/User";
import InfoGame from "./component/childComponent/InfoGame";
import InfoBlog from "./component/childComponent/InfoBlog";
import ListItem from "./component/childComponent/ListItem";

import { getFectProdust } from "./redux/slice/producSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFectProdust());
  }, []);
  // const products = data.products;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="game" element={<Game />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="fqa" element={<FQA />} />
          <Route path="login" element={<User />} />
          <Route path="infoGame/:id" element={<InfoGame />} />
          <Route path="blogid/:id" element={<InfoBlog />} />
          <Route path="listItem" element={<ListItem />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
