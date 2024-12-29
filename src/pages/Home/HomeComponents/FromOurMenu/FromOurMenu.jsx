import img from "../../../../assets/home/featured.jpg";
const FromOurMenu = () => {
  const bg = {
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img})`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div className="py-20" style={bg}>
      <div className="max-w-screen-xl mx-auto text-white">
        <div className="text-center mb-10 max-w-lg mx-auto">
          <h3 className="text-xl text-yellow-500 italic">---Check it out---</h3>
          <div className="divider"></div>
          <h1 className="text-4xl">FROM OUR MENU</h1>
          <div className="divider"></div>
        </div>
        <div className="md:flex justify-between items-center gap-8">
          <div className="max-w-[600px]">
            <img src={img} alt="" />
          </div>
          <div>
            <p>March 20, 2023</p>
            <h4>WHERE CAN I GET SOME?</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="btn bg-transparent hover:bg-transparent text-white  hover:border-t-transparent border-t-transparent border-l-transparent border-r-transparent hover:border-l-transparent hover:border-r-transparent  shadow-none border-b-white rounded-lg border-b-2 hover:border-b-yellow-500 px-8 uppercase">
              read more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FromOurMenu;
