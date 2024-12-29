import React from "react";
import Banner from "../HomeComponents/Banner/Banner";
import Category from "../HomeComponents/Category/Category";
import BistroBoss from "../HomeComponents/BistroBoss/BistroBoss";
import PopularMenu from "../HomeComponents/PopularMenu/PopularMenu";
import ContactUs from "../HomeComponents/ContactUs/ContactUs";
import ChefProduct from "../HomeComponents/ChefProduct/ChefProduct";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Category></Category>
      <BistroBoss></BistroBoss>
      <PopularMenu></PopularMenu>
      <ContactUs></ContactUs>
      <ChefProduct></ChefProduct>
    </>
  );
};

export default Home;
