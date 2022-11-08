import { useSelector, useDispatch } from "react-redux";
import { getById } from "../../redux/slice/producSlice";
import { DflexAll } from "../../css/cssComponent";
import {
  PrvBanerInfo,
  PbsBanerInfo,
  Ps4Ps5,
  AnimatePlay,
  AnimateTitle,
  Warring,
} from "../../css/cssHome";
import InfoGameChild from "./InfoGameChild";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Figure from "./Figure";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import PersonIcon from "@mui/icons-material/Person";
import { CSSTransitionGroup } from "react-transition-group";
import FQAgame from "./FQAgame";
import TabInfo from "./TabInfo";
import Para from "./\bPara";

const InfoGame = () => {
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getById(params.id));
  }, [params]);

  const { listItemID } = useSelector((state) => state.products);

  if (listItemID === 0) return <h1>loading...id</h1>;

  return (
    <>
      {listItemID.map((itemForId, index) => {
        return (
          <div key={index}>
            <PrvBanerInfo className="title-infogame">
              <div className="">
                <div className="bgr-video"></div>

                {itemForId.detail.video ? (
                  <video
                    autoplay={"true"}
                    loop={"true"}
                    muted={"true"}
                    width={"100%"}
                    preload={"auto"}
                    src={itemForId.detail?.video}
                  ></video>
                ) : (
                  <img
                    style={{ width: "100%" }}
                    src={itemForId.detail.replaceVideo}
                  />
                )}
                <img
                  style={{ width: "100%", position: "absolute" }}
                  src={itemForId.detail?.info}
                />
              </div>
              <PbsBanerInfo>
                <CSSTransitionGroup>
                  <AnimateTitle>{itemForId.detail?.title}</AnimateTitle>
                </CSSTransitionGroup>
                <div>
                  <p>Sony Interactive Entertainment</p>
                  <Ps4Ps5>ps4</Ps4Ps5>
                  <Ps4Ps5>ps5</Ps4Ps5>
                </div>
                <div>
                  <p className="year-game">{itemForId.year}</p>
                  <DflexAll className="user">
                    <Link className="login">
                      <div>Find out more</div>
                    </Link>
                  </DflexAll>
                  <div className="onlinePlayer">
                    <CSSTransitionGroup>
                      <AnimatePlay className="fadeIn">
                        <span
                          className="animate__repeat-2"
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <SportsEsportsIcon />
                          {itemForId.ps}
                        </span>
                      </AnimatePlay>
                    </CSSTransitionGroup>
                    <CSSTransitionGroup>
                      <AnimatePlay>
                        <span style={{ display: "flex", alignItems: "center" }}>
                          <span>
                            <PersonIcon />
                          </span>
                          <span> {itemForId.player}</span>
                        </span>
                      </AnimatePlay>
                    </CSSTransitionGroup>
                  </div>
                </div>
              </PbsBanerInfo>
            </PrvBanerInfo>

            <PrvBanerInfo className="main-baner-infogame">
              <div
                style={{ width: "100%", opacity: "calc(3*.1)" }}
                className="baner-infogame"
              >
                <img style={{ width: "100%" }} src={itemForId.detail.baner} />
              </div>
              <PbsBanerInfo style={{ width: "100%" }} className="container">
                <div className="row">
                  <div className="col-6">
                    <h5>overview</h5>
                    <h3 style={{ width: "90%" }}>
                      Join Aloy as she braves the {itemForId.name} - a majestic
                      but dangerous frontier that conceals mysterious new
                      threats.
                    </h3>
                  </div>
                  <div className="col-6">
                    <p style={{ marginBottom: "50px" }}>
                      Explore distant lands, fight bigger and more awe-inspiring
                      machines, and encounter astonishing new tribes as you
                      return to the far-future, post-apocalyptic world of
                      {itemForId.name}.
                    </p>
                    <p style={{ marginBottom: "50px" }}>
                      The land is dying. Vicious storms and an unstoppable
                      blight ravage the scattered remnants of humanity, while
                      fearsome new machines prowl their borders. Life on Earth
                      is hurtling towards another extinction, and no one knows
                      why.
                    </p>
                    <p>
                      It's up to Aloy to uncover the secrets behind these
                      threats and restore order and balance to the world. Along
                      the way, she must reunite with old friends, forge
                      alliances with warring new factions and unravel the legacy
                      of the ancient past – all the while trying to stay one
                      step ahead of a seemingly undefeatable new enemy.
                    </p>
                  </div>
                </div>
              </PbsBanerInfo>
            </PrvBanerInfo>
            <div className="container">
              <div style={{ textAlign: "center", margin: "50px 0" }}>
                <h1>{itemForId.name} key features</h1>
                <p>An epic action RPG adventure.</p>
              </div>
              <div className="features">
                <InfoGameChild data={itemForId.detail} />
              </div>
            </div>
            <div className="main-info">
              <Figure data={itemForId.detail} />
            </div>

            <FQAgame data={itemForId} />

            <Warring>
              <div className="warring">
                <Para />
                <img
                  style={{
                    width: "100px",
                    height: "100px",
                    marginBottom: "10px",
                  }}
                  src={itemForId.imgItem}
                />
                <h6>{itemForId.name}</h6>
                <p>{itemForId.warring}</p>
                <p>
                  {itemForId.name}™ & ©BANDAI NAMCO Entertainment Inc. / ©2022
                  FromSoftware, Inc.
                </p>
              </div>
              <div></div>
            </Warring>
          </div>
        );
      })}
    </>
  );
};
export default InfoGame;
