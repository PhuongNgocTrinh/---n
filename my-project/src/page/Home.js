import {
  Title,
  Img,
  DisplayFlex,
  Prv,
  TitleBanerDow,
  Extraordina,
  HeightItem,
  MarginBT,
  Margincategory,
} from "../css/cssHome";
import { DflexAll } from "../css/cssComponent";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TitleOfBanner from "../component/TitleOfBanner";
import { useSelector } from "react-redux";
import ItemMain from "../component/ItemMain";
import BanerCarousel from "../component/BanerCarousel";
import FullWidthTabs from "../component/TabPanel";
import BlogBody from "../component/BlogBody";
import TabPanel from "../component/TabPanel";
import Test from "../component/Test";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { SnackbarProvider } from "notistack";
const Home = () => {
  const { products } = useSelector((state) => state.products);

  if (products === 0) return <h1>undefined</h1>;
  return (
    <div>
      <BanerCarousel products={products} />

      <MarginBT className="abc">
        <Prv>
          <Extraordina classname="Extraordinary">
            <AnimationOnScroll animateIn="animate__fadeIn">
              {" "}
              Extraordinary console exclusive games from
              <br /> PlayStation Studios{" "}
            </AnimationOnScroll>
          </Extraordina>

          <Img src={products?.hotgame.imgItem} />
          <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
            <Img className="img-childBaner" src="../images/childImgItem.png" />
          </AnimationOnScroll>
        </Prv>
        <DisplayFlex>
          <TitleBanerDow className="title-baner">
            <h4>{products?.hotgame.name}</h4>
            <h6>{products?.hotgame.title}</h6>
            <DflexAll className="user">
              <Link to={`infoGame/2`} className="login">
                <div>Find out more</div>
              </Link>
            </DflexAll>
          </TitleBanerDow>
        </DisplayFlex>
      </MarginBT>
      <div className="pa-items">
        <SnackbarProvider maxSnack={3}>
          <ItemMain products={products} />
        </SnackbarProvider>
      </div>
      <Margincategory className="container">
        <TabPanel />
      </Margincategory>
      <div className="container">
        <BlogBody products={products} />
      </div>

      <Test />
    </div>
  );
};
export default Home;
