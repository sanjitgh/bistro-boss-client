import React from "react";
import Button from "../../../../components/Button/Button";
import MenuItem from "../../../shared/MenuItem/MenuItem";
import { Link } from "react-router-dom";

const Desserts = ({ dessert }) => {
  return (
    <div className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-screen-xl mx-auto px-2">
        {dessert.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/our-shop/dessert`}>
        <Button buttonContent={"ORDER YOUR FAVOURITE FOOD"}></Button>
      </Link>
    </div>
  );
};

export default Desserts;
