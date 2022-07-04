import Footer from "../components/Footer/Footer";
import React from "react";
import Pricing from "./../sections/Priceing/Pricing";
import Product from "./../sections/Product/Product";
import Quality from "./../sections/Quality/Quality";
import Services from "./../sections/Services/Services";
import Team from "./../sections/Team/Team";
import Testimonial from "./../sections/Testimonial/Testimonial";
import Header from "./../components/Header/Header";
import Core from "./../sections/Core/Core";
import Hero from "./../sections/Hero/Hero";
import Explanation from "../sections/Explanation/Explanation";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <Hero />
      <Product />
      <Services />
      <Quality />
      <Core />
      <Explanation />
      <Pricing />
      <Team />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
