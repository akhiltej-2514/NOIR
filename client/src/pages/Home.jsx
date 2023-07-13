import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import Headbar from "../components/Headbar";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Headbar title="S T Y L E S"/>
      <Categories />
      <Headbar title="T R E N D I N G"/>
      <Products/>
      <Headbar/>
      <Newsletter/>
      <Headbar/>
      <Footer/>
    </div>
  );
};

export default Home;
