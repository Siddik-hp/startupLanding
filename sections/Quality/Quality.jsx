import React from "react";
import Card from "../../components/Card";
import LongTitle from "../../components/LongTitle";
import SmallTitle from "./../../components/SmallTitle";

const Quality = () => {
  return (
    <section className="my-10" id="features">
      <div>
        <SmallTitle text="CUALITY FEATURES" />
        <LongTitle text={"Amazing useful features"} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto mt-4 gap-y-4 gap-x-2 lg:gap-x-4">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default Quality;
