import React from "react";
import Banner from "../HomeComponents/Banner/Banner";
import Category from "../HomeComponents/Category/Category";
import BistroBoss from "../HomeComponents/BistroBoss/BistroBoss";
import PopularMenu from "../HomeComponents/PopularMenu/PopularMenu";
import ContactUs from "../HomeComponents/ContactUs/ContactUs";
import ChefProduct from "../HomeComponents/ChefProduct/ChefProduct";
import FromOurMenu from "../HomeComponents/FromOurMenu/FromOurMenu";
import Testimonial from "../HomeComponents/Testimonial/Testimonial";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>BistroBoss - Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <BistroBoss></BistroBoss>
      <PopularMenu></PopularMenu>
      <ContactUs></ContactUs>
      <ChefProduct></ChefProduct>
      <FromOurMenu></FromOurMenu>
      <Testimonial></Testimonial>
    </>
  );
};

export default Home;
