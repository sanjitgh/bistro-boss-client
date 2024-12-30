import { Helmet } from "react-helmet-async";
import BannerCover from "../../shared/BannerCover/BannerCover";
import bgImg from "../../../assets/menu/banner3.jpg";
import useMenu from "../../../hooks/useMenu";
import TodaysOffer from "../MenuComponent/TodaysOffer/TodaysOffer";
import CoverTitle from "../MenuComponent/CoverTitle/CoverTitle";
import img from "../../../assets/menu/chef-service.jpg";

const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
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
      <TodaysOffer offered={offered}></TodaysOffer>
      <CoverTitle
        img={img}
        title={"DESSERTS"}
        subTitle={
          "Uniquely myocardinate reliable products vis-a-vis market-driven process improvements. Appropriately embrace user-centric applications."
        }
      ></CoverTitle>
    </>
  );
};

export default Menu;
