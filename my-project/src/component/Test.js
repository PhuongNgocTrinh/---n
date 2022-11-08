import React, { useState } from "react";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";
import { Img, RotateInDiv, RotateOutDiv } from "../css/cssComponent";

const Test = () => {
  const src = "../images/avatar.png";
  const src2 = "../images/avatar2.png";
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());
  return <div snap="mandatory">a</div>;
};

export default Test;
