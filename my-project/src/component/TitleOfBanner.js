import { Title, TitleBanner } from "../css/cssHome";
import { Link } from "react-router-dom";
import { DflexAll, Img, Logo, ListMenu, LogoWow } from "../css/cssComponent";

const TitleOfBanner = () => {
  return (
    <TitleBanner className="title-text">
      <LogoWow className="logowow" src="../images/logoWOW.png" />
      <h4>The Norse saga continues</h4>
      <p>
        Embark on an epic and heartfelt journey as Kratos and Atreus struggle
        <br /> with holding on and letting go, available 9th November on PS4 &
        PS5
      </p>
      <div className="out-login">
        <DflexAll className="user">
          <Link to="/" className="login">
            <div>Find out more</div>
          </Link>
        </DflexAll>
      </div>
    </TitleBanner>
  );
};
export default TitleOfBanner;
