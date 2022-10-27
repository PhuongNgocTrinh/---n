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
import { DflexAll } from "../../css/cssComponent";
import { PrvBanerInfo, PbsBanerInfo } from "../../css/cssHome";
import InfoGameChild from "./InfoGameChild";
import { Link } from "react-router-dom";
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
            <PrvBanerInfo className="title-infogame">
              <video
                autobuffer="true"
                autoplay="true"
                playsinline="true"
                loop="true"
                webkit-playsinline="true"
                muted="true"
                width="100%"
                preload="auto"
                src={itemForId.detail.video}
              ></video>
              <PbsBanerInfo>
                <h1>{itemForId.detail.title}</h1>
                <DflexAll className="user">
                  <Link className="login">
                    <div>Find out more</div>
                  </Link>
                </DflexAll>
              </PbsBanerInfo>
            </PrvBanerInfo>

            <PrvBanerInfo className="main-baner-infogame">
              <div
                style={{ width: "100%", opacity: "calc(3*.1)" }}
                className="baner-infogame"
              >
                <img style={{ width: "100%" }} src={itemForId.detail.baner} />
              </div>
              <PbsBanerInfo className="container">
                <div className="row">
                  <div style={{ color: "#fff" }} className="col-6">
                    <h5>GAME OVERVIEW</h5>
                    {itemForId.detail.overview[0].textmain}
                  </div>
                  <div className="col-6" style={{ color: "#fff" }}>
                    <p style={{ color: "#fff" }}>
                      {itemForId.detail.overview[1].text1}
                    </p>
                    <p style={{ color: "#fff" }}>
                      {itemForId.detail.overview[2].text2}
                    </p>
                    <p style={{ color: "#fff" }}>
                      {itemForId.detail.overview[3].text3}
                    </p>
                  </div>
                </div>
              </PbsBanerInfo>
            </PrvBanerInfo>
            <div className="container">
              <div style={{ textAlign: "center", margin: "20px 0" }}>
                <h1>{itemForId.name} key features</h1>
                <p>An epic action RPG adventure.</p>
              </div>
              <InfoGameChild />
            </div>
            <img src={itemForId.imgItem} />
            <h4>{itemForId.name}</h4>
            <h4>{itemForId.year}</h4>
          </div>
        );
      })}
    </>
  );
};
export default InfoGame;
