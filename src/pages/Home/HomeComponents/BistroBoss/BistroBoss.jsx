import bg from "../../../../assets/home/chef-service.jpg";

const BistroBoss = () => {
  const backgroundStyle = {
    backgroundImage: `url(${bg})`,
  };
  return (
    <section className="py-10">
      <div
        className={`max-w-screen-xl mx-auto bg-[url('https://i.ibb.co.com/z8ZtVwD/pexels-noah-erickson-97554-404280.jpg')] bg-center bg-cover p-28`}
        style={backgroundStyle}
      >
        <div className="py-24 bg-white text-center ">
          <h1 className="text-4xl mb-3">Bistro Boss</h1>
          <p className="max-w-[580px] mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, libero accusamus laborum deserunt ratione dolor
            officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
            nihil iusto ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BistroBoss;
