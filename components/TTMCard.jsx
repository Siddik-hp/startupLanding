import Image from "next/image";
import React from "react";

const TTMCard = () => {
  return (
    <div className=" p-4 hover:shadow-lg  mx-4 rounded-lg cursor-pointer bg-green-50 hover:bg-green-200  transition duration-200 group ease-linear">
      <Image
        src={"/team/1.jpg"}
        alt="not found"
        width={50}
        height={50}
        objectFit="cover"
        className="rounded-full "
      />
      <p className="text-xs">
        Nice Service provide and get 24/7 support and get a premium template for
        my website
      </p>
      <p className="text-green-600 font-bold">Ayani Dol</p>
      <p className="text-sm">CEO of Syz </p>
    </div>
  );
};

export default TTMCard;
