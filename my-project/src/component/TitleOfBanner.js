import { Title, TitleBanner, AnimateTest } from "../css/cssHome";
import { Link } from "react-router-dom";
import { DflexAll, Img, Logo, ListMenu, LogoWow } from "../css/cssComponent";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import "animate.css/animate.min.css";
import { CSSTransitionGroup } from "react-transition-group";
import TransitionGroup from "react-transition-group/TransitionGroup";
import { useSelector } from "react-redux";

const TitleOfBanner = ({ data }) => {
  return (
    <div className="title">
      <CSSTransitionGroup>
        <AnimateTest>
          <h4>The Norse saga continues</h4>
          <p>
            Embark on an epic and heartfelt journey as Kratos and Atreus
            struggle
            <br /> with holding on and letting go, available 9th November on PS4
            & PS5
          </p>
          <div className="out-login">
            <DflexAll className="user">
              <Link to="/" className="login">
                <div>Find out more</div>
              </Link>
            </DflexAll>
          </div>
        </AnimateTest>
      </CSSTransitionGroup>
    </div>
  );
};
export default TitleOfBanner;
