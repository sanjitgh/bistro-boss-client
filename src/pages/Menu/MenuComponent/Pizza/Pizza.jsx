import React from "react";
import Button from "../../../../components/Button/Button";
import MenuItem from "../../../shared/MenuItem/MenuItem";

const Pizza = ({ pizza }) => {
  return (
    <div className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-screen-xl mx-auto px-2">
        {pizza.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Button buttonContent={"ORDER YOUR FAVOURITE FOOD"}></Button>
    </div>
  );
};

export default Pizza;
