import MenuItem from "../../../shared/MenuItem/MenuItem";
import Button from "../../../../components/Button/Button";

const Soup = ({ soup }) => {
  return (
    <div className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-screen-xl mx-auto px-2">
        {soup.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Button buttonContent={"ORDER YOUR FAVOURITE FOOD"}></Button>
    </div>
  );
};

export default Soup;
