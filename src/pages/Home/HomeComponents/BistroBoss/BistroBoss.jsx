import bg from "../../../../assets/home/chef-service.jpg";

const BistroBoss = () => {
  const backgroundStyle = {
    backgroundImage: `url(${bg})`,
  };
  return (
    <section className="py-10">
      <div
        className={`max-w-screen-xl mx-auto bg-center bg-cover p-28 bg-fixed`}
        style={backgroundStyle}
      >
        <div className="py-24 bg-white text-center ">
          <h1 className="text-4xl mb-3">Bistro Boss</h1>
          <p className="max-w-[580px] mx-auto">
            Energistically plagiarize front-end web services through excellent
            leadership. Dramatically aggregate dynamic strategic theme areas
            before functional infomediaries. Progressively evisculate superior
            data whereas accurate portals. Seamlessly whiteboard.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BistroBoss;
