import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import slide1 from "../../../../assets/home/slide1.jpg";
import slide2 from "../../../../assets/home/slide2.jpg";
import slide3 from "../../../../assets/home/slide3.jpg";
import slide4 from "../../../../assets/home/slide4.jpg";
import slide5 from "../../../../assets/home/slide5.jpg";
import SectionTitle from "../../../../components/SecitonTitle/SectionTitle";

const Category = () => {
  return (
    <section className="py-16">
        <SectionTitle subTitle={'---From 11:00am to 10:00pm---'} title={'ORDER ONLINE'}></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper max-w-screen-xl mx-auto"
      >
        <SwiperSlide>
          <img className="w-full" src={slide1} alt="" />
          <h1 className="uppercase text-4xl text-center absolute bottom-8 left-1/2 translate-x-[-50%] text-white">
            salad
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={slide2} alt="" />
          <h1 className="uppercase text-4xl text-center absolute bottom-8 left-1/2 translate-x-[-50%] text-white">
            soups
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={slide3} alt="" />
          <h1 className="uppercase text-4xl text-center absolute bottom-8 left-1/2 translate-x-[-50%] text-white">
            pizzas
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={slide4} alt="" />
          <h1 className="uppercase text-4xl text-center absolute bottom-8 left-1/2 translate-x-[-50%] text-white">
            desserts
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={slide5} alt="" />
          <h1 className="uppercase text-4xl text-center absolute bottom-8 left-1/2 translate-x-[-50%] text-white">
            salad
          </h1>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
