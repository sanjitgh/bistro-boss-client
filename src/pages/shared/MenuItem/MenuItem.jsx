const MenuItem = ({ item }) => {
  const { name, image, recipe, price } = item;
  return (
    <div className="flex gap-5">
      <img className="w-[118px] h-[104px] rounded-tr-[200px] rounded-br-[200px] rounded-bl-[200px]" src={image} alt="" />
      <div >
        <h3 className="uppercase text-xl font-light">{name}---------</h3>
        <p className="text-gray-500">{recipe}</p>
      </div>
      <p className="text-yellow-600">${price}</p>
    </div>
  );
};

export default MenuItem;
