import {
  Video,
  Img,
  MainImg,
  ImgZ100,
  ImgZ99,
  ImgZ98,
  ImgZ101,
} from "../../css/cssHome";
import { useSelector, useDispatch } from "react-redux";
import { getById } from "../../redux/slice/producSlice";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const InfoGame = () => {
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getById(params.id));
  }, [params]);

  const { listItemID } = useSelector((state) => state.products);

  if (listItemID === 0) return <h1>loading...id</h1>;
  console.log(listItemID);
  return (
    <>
      {listItemID.map((itemForId, index) => {
        return (
          <div key={index}>
            <img src={itemForId.imgItem} alt={index} />
            <h1>{itemForId._id}</h1>
            <h4>{itemForId.name}</h4>
            <h4>{itemForId.year}</h4>
          </div>
        );
      })}
    </>
  );
};
export default InfoGame;
