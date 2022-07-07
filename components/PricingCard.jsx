import React from "react";
import { BsCheck } from "react-icons/bs";
import { TiTimes } from "react-icons/ti";

const PricingCard = ({ isSwetch }) => {
  return (
    <div className="shadow-md  rounded-lg overflow-hidden">
      <div className="w-full h-20 text-white flex justify-center items-center text-2xl bg-red-600">
        <h1>Basic</h1>
      </div>
      <ul className="px-5 leading-8 mt-4 my-4">
        <li>
          <BsCheck className="w-5 h-5 inline-flex" /> 1 GB SSD
        </li>
        <li>
          {" "}
          <BsCheck className="w-5 h-5 inline-flex" />
          100 GB Bandwith
        </li>
        <li>
          {" "}
          <BsCheck className="w-5 h-5 inline-flex" />
          Free SSL
        </li>
        <li>
          {" "}
          <BsCheck className="w-5 h-5 inline-flex" />
          Free .com domoin
        </li>
        <li>
          {" "}
          <BsCheck className="w-5 h-5 inline-flex" />
          Cpanel access
        </li>
        <li>
          {" "}
          <BsCheck className="w-5 h-5 inline-flex" />
          24/7 Supports
        </li>
      </ul>
      <div className="flex justify-between items-center px-4 pb-3">
        <h1 className="text-3xl">$ 40</h1>
        <button className="bg-red-600 text-white px-2 py-1 rounded-sm hover:shadow-md">
          Continue
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
