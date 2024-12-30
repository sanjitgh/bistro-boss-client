import { Link } from "react-router-dom";
import Button from "../../../../components/Button/Button";
import MenuItem from "../../../shared/MenuItem/MenuItem";

const Salad = ({ salad }) => {
  return (
    <div className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-screen-xl mx-auto px-2">
        {salad.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/our-shop/salad`}>
          <Button buttonContent={"ORDER YOUR FAVOURITE FOOD"}></Button>
        </Link>    </div>
  );
};

export default Salad;
