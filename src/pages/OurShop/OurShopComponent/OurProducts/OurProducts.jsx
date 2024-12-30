import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import FoodCard from "../../../shared/FoodCard/FoodCard";
import useMenu from "../../../../hooks/useMenu";
import { useParams } from "react-router-dom";
import { useState } from "react";

const OurProducts = () => {
  const categories = [
    "all",
    "offered",
    "salad",
    "pizza",
    "soup",
    "dessert",
    "drinks",
  ];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div className="py-20 max-w-screen-xl mx-auto px-2">
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <div className="flex justify-center">
          <TabList>
            <Tab>All</Tab>
            <Tab>OFFER</Tab>
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>SOUPS</Tab>
            <Tab>DESSERTS</Tab>
            <Tab>DRINKS</Tab>
          </TabList>
        </div>
        <TabPanel>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-10">
            {menu.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-10">
            {offered.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-10">
            {salad.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-10">
            {pizza.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-10">
            {soup.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-10">
            {dessert.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-10">
            {drinks.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OurProducts;
