const CoverTitle = ({ title, subTitle, img }) => {
  const backgroundStyle = {
    backgroundImage: `url(${img})`,
  };
  return (
    <section className="pb-20 pt-5">
      <div className={`bg-center bg-cover py-32`} style={backgroundStyle}>
        <div className="max-w-screen-lg mx-auto py-20 bg-[#00000061] text-center text-white">
          <h1 className="text-4xl mb-3">{title}</h1>
          <p className="max-w-[580px] mx-auto">{subTitle}</p>
        </div>
      </div>
    </section>
  );
};

export default CoverTitle;
