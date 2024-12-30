import { useEffect, useState } from "react";
import SectionTitle from "../../../../components/SecitonTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import "./style.css";

const Testimonial = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <section className="py-16">
      <div className="max-w-screen-xl mx-auto">
        <SectionTitle
          subTitle={"---What Our Clients Say---"}
          title={"TESTIMONIALS"}
        ></SectionTitle>
        <div>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {items.map((item) => (
              <SwiperSlide key={item._id}>
                <div className="px-10 text-center max-w-[1100px] mx-auto">
                  <Rating
                    className="mx-auto mb-4 custom-rating "
                    style={{ maxWidth: 180 }}
                    value={item.rating}
                    readOnly
                  />
                  <FaQuoteLeft className="mx-auto md:text-7xl text-5xl mb-4" />
                  <p>{item.details}</p>
                  <h1 className="text-4xl text-yellow-500 mt-4">{item.name}</h1>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
