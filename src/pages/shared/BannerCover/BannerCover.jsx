import { Parallax } from "react-parallax";

const BannerCover = ({ title, innerContent, bgImg }) => {
  return (
    <Parallax
      blur={{ min: -30, max: 30 }}
      bgImage={bgImg}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div
        className="hero min-h-screen"
        
      >
        <div className="hero-overlay bg-black bg-opacity-30"></div>
        <div className="hero-content text-neutral-content text-center w-full py-20 bg-[#00000080]">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5 uppercase">{innerContent}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default BannerCover;
