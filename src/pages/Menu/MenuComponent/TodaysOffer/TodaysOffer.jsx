import { Link } from "react-router-dom";
import Button from "../../../../components/Button/Button";
import SectionTitle from "../../../../components/SecitonTitle/SectionTitle";
import MenuItem from "../../../shared/MenuItem/MenuItem";

const TodaysOffer = ({ offered }) => {
  return (
    <section className="py-16">
      <div className="max-w-screen-xl mx-auto px-2">
        <SectionTitle
          subTitle={"---Don't miss---"}
          title={"TODAY'S OFFER"}
        ></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {offered.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <Link to={`/our-shop/offered`}>
          <Button buttonContent={"ORDER YOUR FAVOURITE FOOD"}></Button>
        </Link>
      </div>
    </section>
  );
};

export default TodaysOffer;
