import React from "react";

const PricingButtonBox = () => {
  return (
    <div className="text-center w-max mx-auto  p-2 shadow rounded-sm space-x-2">
      <button
        id="monthly"
        className="px-3 py-2 shadow-md transition duration-300 ease-in-out rounded-md"
      >
        Monthly
      </button>
      <button
        id="annual"
        className="px-3 py-2 shadow-md transition duration-300 ease-in-out rounded-md"
      >
        Annual
      </button>
    </div>
  );
};

export default PricingButtonBox;
