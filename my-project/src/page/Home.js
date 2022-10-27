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

const Home = () => {
  const { products } = useSelector((state) => state.products);

  if (products === 0) return <h1>undefined</h1>;
  return (
    <div>
      <BanerCarousel products={products} />

      <MarginBT className="abc">
        <Prv>
          <Extraordina classname="Extraordinary">
            Extraordinary console exclusive games from
            <br /> PlayStation Studios
          </Extraordina>
          <Img src={products?.hotgame.imgItem} />

          <Img className="img-childBaner" src="../images/childImgItem.png" />
        </Prv>
        <DisplayFlex>
          <TitleBanerDow className="title-baner">
            <h4>{products?.hotgame.name}</h4>
            <h6>{products?.hotgame.title}</h6>
            <DflexAll className="user">
              <Link className="login">
                <div>Find out more</div>
              </Link>
            </DflexAll>
          </TitleBanerDow>
        </DisplayFlex>
      </MarginBT>
      <div className="">
        <ItemMain products={products} />
      </div>
      <Margincategory className="container">
        <TabPanel />
      </Margincategory>
      <div className="container">
        <BlogBody products={products} />
      </div>

      {/* <Link to="listItem">see all</Link> */}
    </div>
  );
};
export default Home;
