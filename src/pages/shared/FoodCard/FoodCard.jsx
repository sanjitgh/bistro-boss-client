import Button from "../../../components/Button/Button";

const FoodCard = ({ item }) => {
  const { name, image, recipe, price } = item;

  return (
    <div className="card card-compact bg-gray-100">
      <figure className="relative">
        <img src={image} />
        <div className="badge badge-lg absolute top-3 rounded-none p-4 border-none right-3 bg-black text-white ">${price}</div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <Button buttonContent={"Add to cart"}></Button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
