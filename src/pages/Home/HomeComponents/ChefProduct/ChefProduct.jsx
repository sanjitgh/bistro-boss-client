import Button from "../../../../components/Button/Button";
import SectionTitle from "../../../../components/SecitonTitle/SectionTitle";
import img1 from "../../../../assets/home/slide1.jpg";
import img2 from "../../../../assets/home/slide2.jpg";
import img3 from "../../../../assets/home/slide3.jpg";
const ChefProduct = () => {
  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto">
        <SectionTitle
          subTitle={"---Should Try---"}
          title={"CHEF RECOMMENDS"}
        ></SectionTitle>
        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          <div className="card rounded-none card-compact bg-base-100 shadow-xl text-center">
            <figure>
              <img src={img1} className="w-full max-h-[350px]" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Caeser Salad</h2>
              <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
              <div className="card-actions justify-center">
                <Button buttonContent={"add to cart"}></Button>
              </div>
            </div>
          </div>
          <div className="card rounded-none card-compact bg-base-100 shadow-xl text-center">
            <figure>
              <img src={img1} className="w-full max-h-[350px]" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Caeser Salad</h2>
              <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
              <div className="card-actions justify-center">
                <Button buttonContent={"add to cart"}></Button>
              </div>
            </div>
          </div>
          <div className="card rounded-none card-compact bg-base-100 shadow-xl text-center">
            <figure>
              <img src={img1} className="w-full max-h-[350px]" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Caeser Salad</h2>
              <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
              <div className="card-actions justify-center">
                <Button buttonContent={"add to cart"}></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefProduct;
