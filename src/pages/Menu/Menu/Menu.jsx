import { Helmet } from "react-helmet-async";
import BannerCover from "../../shared/BannerCover/BannerCover";
import bgImg from "../../../assets/menu/banner3.jpg";
import useMenu from "../../../hooks/useMenu";
import TodaysOffer from "../MenuComponent/TodaysOffer/TodaysOffer";
import CoverTitle from "../MenuComponent/CoverTitle/CoverTitle";
import Desserts from "../MenuComponent/Desserts/Desserts";
import dessertBg from "../../../assets/menu/chef-service.jpg";
import pizzaBg from "../../../assets/menu/pizza-bg.jpg";
import saladBg from "../../../assets/menu/salad-bg.jpg";
import soupBg from "../../../assets/menu/soup-bg.jpg";
import Pizza from "../MenuComponent/Pizza/Pizza";
import Salad from "../MenuComponent/Salad/Salad";
import Soup from "../MenuComponent/Soup/Soup";

const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
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
        img={dessertBg}
        title={"DESSERTS"}
        subTitle={
          "Uniquely myocardinate reliable products vis-a-vis market-driven process improvements. Appropriately embrace user-centric applications."
        }
      ></CoverTitle>
      <Desserts dessert={dessert}></Desserts>
      <CoverTitle
        img={pizzaBg}
        title={"pizza"}
        subTitle={
          "Quickly reconceptualize resource-leveling initiatives after web-enabled users. Objectively leverage other's end-to-end scenarios via 2.0 platforms."
        }
      ></CoverTitle>
      <Pizza pizza={pizza}></Pizza>
      <CoverTitle
        img={saladBg}
        title={"salad"}
        subTitle={
          "Continually initiate team building action items after ubiquitous sources. Proactively repurpose focused total linkage after."
        }
      ></CoverTitle>
      <Salad salad={salad}></Salad>
      <CoverTitle
        img={soupBg}
        title={"soup"}
        subTitle={
          "Continually initiate installed base resources after out-of-the-box manufactured products. Synergistically target interoperable partnerships and open-source."
        }
      ></CoverTitle>
      <Soup soup={soup}></Soup>
    </>
  );
};

export default Menu;
