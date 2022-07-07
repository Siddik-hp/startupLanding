import React from "react";
import LongTitle from "../../components/LongTitle";
import TTMCard from "../../components/TTMCard";
import SmallTitle from "./../../components/SmallTitle";
import Carousel from "react-elastic-carousel";

const Testimonial = () => {
  const breakPoints = [
    { width: 600, itemsToShow: 1 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <section id="testimonial" className="my-12">
      <div>
        <SmallTitle text="Testimonial " />
        <LongTitle text="See Our Client Review" />
      </div>
      <div className="container mx-auto mt-5">
        <Carousel itemsToShow={3} breakPoints={breakPoints}>
          <TTMCard />
          <TTMCard />
          <TTMCard />
          <TTMCard />
          <TTMCard />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonial;
