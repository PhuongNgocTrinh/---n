import * as React from "react";
import { useState, useEffect } from "react";
import RenderUi from "./childComponent/RenderUi";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import { getitems } from "../redux/slice/producSlice";
import InfoGame from "./childComponent/InfoGame";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [listCateroly, setListCateroly] = useState("action");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getitems(listCateroly));
  }, [listCateroly]);

  const { items } = useSelector((state) => state.products);
  const { products } = useSelector((state) => state.products);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (items === 0) return <h1>loading...</h1>;

  return (
    <div>
      <h1>Category</h1>
      <Box sx={{ width: "100%", marginBottom: "20px" }}>
        <Box sx={{ borderBottsom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            {/* <Tab
              onClick={() => {
                setListCateroly("");
              }}
              label="all"
            /> */}
            {products &&
              products.category.map((item, index) => {
                return (
                  <Tab
                    key={index}
                    onClick={() => {
                      setListCateroly(item);
                    }}
                    label={item}
                    {...a11yProps(index)}
                  />
                );
              })}
          </Tabs>
        </Box>
      </Box>

      <div className="row">
        {items.map((item, index) => {
          return <RenderUi key={index} item={item} />;
        })}
      </div>
    </div>
  );
}

// import {
//   Animator,
//   ScrollContainer,
//   ScrollPage,
//   batch,
//   Fade,
//   FadeIn,
//   Move,
//   MoveIn,
//   MoveOut,
//   Sticky,
//   StickyIn,
//   ZoomIn,
//   Spin,
//   FlexCenterStyle,
// } from "react-scroll-motion";
// import { Video, Img } from "../../css/cssHome";

// const InfoGame = () => {
//   const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
//   const FadeUp = batch(Fade(), Move(), Sticky());
//   const Spin = (cycle) => ({
//     in: {
//       style: {
//         transform: (p) => `rotate(${p * 1 * cycle}deg)`,
//       },
//     },
//     out: {
//       style: {
//         transform: (p) => `rotate(${p * 60 * cycle}deg)`,
//       },
//     },
//   });
//   return (
//     <Video className="main-animation">
//       <ScrollContainer className="1">
//         <ScrollPage className="2">
//           <Video>
//             <video
//               class="media-block__video media-block__video@tablet lozad lazy-loaded"
//               autobuffer="true"
//               muted="true"
//               autoplay="true"
//               loop="true"
//               playsinline="true"
//               webkit-playsinline="true"
//               data-poster="https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-raganok-clean-keyart-01-en-10mar22"
//               poster="https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-raganok-clean-keyart-01-en-10mar22"
//               data-loaded="true"
//               data-src="https://gmedia.playstation.com/is/content/SIEPDC/global_pdc/en/games/pdps/g/go/god-of-war-ragnarok/asset/hero/god-of-war-ragnarok-hero-desktop-02-en-11jul22.mp4"
//               src="https://gmedia.playstation.com/is/content/SIEPDC/global_pdc/en/games/pdps/g/go/god-of-war-ragnarok/asset/hero/god-of-war-ragnarok-hero-desktop-02-en-11jul22.mp4"
//             ></video>
//               <span>
//                   <Img src="../../images/bgr-animation.png" />
//                 </span>{" "}
//             <ScrollPage>
//               <Animator>
//                 {" "}

//               </Animator>
//             </ScrollPage>
//           </Video>

//           <Animator
//             style={{ width: "100%" }}
//             animation={batch(Fade(), Sticky(), MoveOut(0, -600))}
//           >
//             <span style={{ width: "100%" }}>
//               <Img src="../../images/imgAnimation.png" />
//             </span>
//           </Animator>
//         </ScrollPage>
//         <ScrollPage>
//           <Animator animation={batch(StickyIn(), FadeIn(), ZoomIn())}>
//             <Img src="../../images/imgAnimation.png" />
//           </Animator>
//         </ScrollPage>
//         <ScrollPage>
//           <Animator animation={batch(Spin(0.4), Move(), Sticky())}>
//             <Img src="../../images/man-animation.png" />
//           </Animator>
//           {/* <Animator animation={FadeUp}>
//             <span style={{ fontSize: "40px" }}>I'm FadeUp ⛅️</span>
//           </Animator> */}
//         </ScrollPage>
//         <ScrollPage>
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               height: "100%",
//             }}
//           >
//             <span style={{ fontSize: "40px" }}>
//               <Animator animation={MoveIn(-300, 0)}>Hello Guys 👋🏻</Animator>
//               <Animator animation={MoveIn(1000, 0)}>
//                 Nice to meet you 🙋🏻‍♀️
//               </Animator>
//               - I'm Dante Chun -
//               {/* <Animator animation={MoveOut(70, -1000)}>Good bye ✋🏻</Animator> */}
//               <Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator>
//             </span>
//           </div>
//         </ScrollPage>
//         <ScrollPage>
//           <Animator animation={MoveIn(-1000, 0)}>
//             <span style={{ fontSize: "40px" }}>Done</span>
//             <br />
//             <span style={{ fontSize: "30px" }}>
//               There's FadeAnimation, MoveAnimation, StickyAnimation,
//               ZoomAnimation
//             </span>
//           </Animator>
//         </ScrollPage>
//       </ScrollContainer>
//     </Video>
//   );
// };

{
  /* <Video className="main-animation">
{" "}
<video
  class="media-block__video media-block__video@tablet lozad lazy-loaded"
  autobuffer="true"
  muted="true"
  autoplay="true"
  loop="true"
  playsinline="true"
  webkit-playsinline="true"
  data-poster="https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-raganok-clean-keyart-01-en-10mar22"
  poster="https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-raganok-clean-keyart-01-en-10mar22"
  data-loaded="true"
  data-src="https://gmedia.playstation.com/is/content/SIEPDC/global_pdc/en/games/pdps/g/go/god-of-war-ragnarok/asset/hero/god-of-war-ragnarok-hero-desktop-02-en-11jul22.mp4"
  src="https://gmedia.playstation.com/is/content/SIEPDC/global_pdc/en/games/pdps/g/go/god-of-war-ragnarok/asset/hero/god-of-war-ragnarok-hero-desktop-02-en-11jul22.mp4"
></video>
</Video> */
}
