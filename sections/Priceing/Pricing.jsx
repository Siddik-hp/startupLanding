import React, { useState } from "react";
import PricingButtonBox from "../../components/PricingButtonBox";
import PricingCard from "../../components/PricingCard";
import SmallTitle from "../../components/SmallTitle";
import LongTitle from "./../../components/LongTitle";

const Pricing = () => {
  const [isSwetch, setIsSwetch] = useState(false);
  return (
    <section id="pricing" className="my-10">
      <div className="mb-10">
        <SmallTitle text="Pricing list" />
        <LongTitle text="Chose your perfect Plan" />
      </div>
      <PricingButtonBox isSwetch={isSwetch} />
      <div className="grid grid-cols-2 max-w-xl mx-auto gap-4 my-10">
        <PricingCard isSwetch={isSwetch} />
        <PricingCard />
      </div>
    </section>
  );
};

export default Pricing;
