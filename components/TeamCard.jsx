import Image from "next/image";
import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
const TeamCard = ({ data }) => {
  return (
    <div className="hover:shadow-lg  transition duration-150 ease-linear lg:p-2 py-4 rounded-lg cursor-pointer flex flex-col lg:flex-row group  justify-around ">
      <div>
        <div className="w-24 h-24 lg:w-32 lg:h-32 relative  mx-auto">
          <Image
            src={data.image}
            alt="1.jpg"
            className="rounded-full object-cover  shadow-lg"
            layout="fill"
          />
        </div>
        <div className="text-center mt-2 w-full">
          <h1 className="text-lg text-blue-600 ">{data.name}</h1>
          <p className="text-sm lg:text-md">{data.position}</p>
        </div>
      </div>
      <div className=" lg:space-y-3 lg:opacity-0 group-hover:opacity-100 lg:mt-0 lg:flex-col transition duration-300 ease-linear flex flex-row  justify-around mt-2 opacity-0">
        <BsFacebook className="w-12 h-5 text-gray-600 hover:text-blue-600" />
        <BsInstagram className="w-12 h-5 text-gray-600 hover:text-pink-600" />
        <BsLinkedin className="w-12 h-5 text-gray-600 hover:text-blue-500" />
        <BsTwitter className="w-12 h-5 text-gray-600 hover:text-blue-900" />
      </div>
    </div>
  );
};

export default TeamCard;
