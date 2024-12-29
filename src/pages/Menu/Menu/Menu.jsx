import { Helmet } from "react-helmet-async";
import BannerCover from "../../shared/BannerCover/BannerCover";
import bgImg from "../../../assets/menu/banner3.jpg";

const Menu = () => {
  return (
    <>
      <Helmet>
        <title>BistroBoss - Menu</title>
      </Helmet>
      <BannerCover
        title={"our menu"}
        innerContent={"Would you like to try a dish?"}
        bgImg={bgImg}
      ></BannerCover>
    </>
  );
};

export default Menu;
