import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
  Spin,
  FlexCenterStyle,
} from "react-scroll-motion";
import {
  Video,
  Img,
  MainImg,
  ImgZ100,
  ImgZ99,
  ImgZ98,
  ImgZ101,
} from "../../css/cssHome";

const InfoGame = () => {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());
  const Spin = (cycle) => ({
    in: {
      style: {
        transform: (p) => `translate(${p * 10 * cycle}deg)`,
      },
    },
    out: {
      style: {
        transform: (p) => `rotate(${p * 40 * cycle}deg)`,
      },
    },
  });
  const Scal = (scl) => ({
    in: {
      style: {
        transform: (p) => `rotate(${p * 10 * scl}deg)`,
      },
    },
    out: {
      style: {
        transform: (p) => `rotate(${p * 40 * scl}deg)`,
      },
    },
  });
  return (
    <div>
      <ScrollContainer>
        <ScrollPage>
          <MainImg>
            <ImgZ101>
              <Animator animation={batch(Spin(0.4), Move(), Sticky(40, 40))}>
                <Img src="../../images/man-animation.png" />
              </Animator>
            </ImgZ101>
            <ImgZ98>
              <Animator animation={batch(Move(), Sticky(40, 40))}>
                <Img className="img-z1" src="../../images/bgr-animation.png" />
              </Animator>
            </ImgZ98>
            <ImgZ99>
              <Animator animation={batch(Spin(0.4), Move(), Sticky())}>
                <Img className="img-z1" src="../../images/bgr2-animation.png" />
              </Animator>
            </ImgZ99>
            <ImgZ100>
              <Animator animation={batch(Move(), Sticky(40, 40))}>
                <Img className="img-z1" src="../../images/bgr3-animation.png" />
              </Animator>
            </ImgZ100>
          </MainImg>
        </ScrollPage>
      </ScrollContainer>
    </div>
  );
};
export default InfoGame;
