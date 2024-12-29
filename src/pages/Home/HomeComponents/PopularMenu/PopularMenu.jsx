import React, { useEffect, useState } from "react";
import SectionTitle from "../../../../components/SecitonTitle/SectionTitle";
import MenuItem from "../../../shared/MenuItem/MenuItem";
import Button from "../../../../components/Button/Button";

const PopularMenu = () => {
  const [menu, setMenu] = useState();
  console.log(menu);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItem = data.filter((item) => item.category === "popular");
        setMenu(popularItem);
      });
  }, []);
  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto">
        <SectionTitle
          subTitle={"---Check it out---"}
          title={"FROM OUR MENU"}
        ></SectionTitle>
        {/* menu items */}
        {menu && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {menu.map((item) => (
                <MenuItem key={item._id} item={item}></MenuItem>
              ))}
            </div>
            <Button buttonContent={"view full menu"}></Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PopularMenu;
