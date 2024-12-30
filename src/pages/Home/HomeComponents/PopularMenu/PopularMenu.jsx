import SectionTitle from "../../../../components/SecitonTitle/SectionTitle";
import MenuItem from "../../../shared/MenuItem/MenuItem";
import Button from "../../../../components/Button/Button";
import useMenu from "../../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto">
        <SectionTitle
          subTitle={"---Check it out---"}
          title={"FROM OUR MENU"}
        ></SectionTitle>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {popular.map((item) => (
              <MenuItem key={item._id} item={item}></MenuItem>
            ))}
          </div>
          <Button buttonContent={"view full menu"}></Button>
        </div>
      </div>
    </section>
  );
};

export default PopularMenu;
