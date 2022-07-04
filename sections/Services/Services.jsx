import Image from "next/image";
import { useState } from "react";
import { AiOutlinePlayCircle } from "react-icons/ai";

const Services = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section
        id="services"
        className="mt-10 container mx-auto flex flex-col lg:flex-row space-y-4 space-x-0 lg:space-y-0 lg:space-x-6 justify-around "
      >
        <div className="relative ">
          <Image
            src={"/icon/service.png"}
            alt="not found"
            width={400}
            height={400}
            objectFit="cover"
            className="rounded-lg "
          />
          <span className="animate-ping absolute top-[40%] left-[40%] w-20 h-20 bg-red-500 rounded-full"></span>
          <AiOutlinePlayCircle
            className="w-20 h-20 absolute top-[40%] left-[40%] text-red-500 cursor-pointer"
            onClick={() => setOpen(true)}
          />
        </div>
        <div className="max-w-sm mx-auto">
          <div>
            <p className="text-red-500">OUR SERVICES</p>
            <h1 className="text-3xl font-semibold">
              Business Goals Achieved with Design
            </h1>
          </div>
          <div className="space-y-2 hover:shadow-lg p-4 transition duration-150 ease-linear rounded-md cursor-pointer lg:text-left flex items-center space-x-4">
            <Image
              src="/icon/crown.png"
              alt="not found"
              width={80}
              height={80}
            />
            <div>
              <p className="capitalize font-semibold ">Smart Features</p>
              <p className=" text-xs leading-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
                ullam! Suscipit illum quasi cumque? Nesciunt.
              </p>
            </div>
          </div>
          <div className="space-y-2 hover:shadow-lg p-4 transition duration-150 ease-linear rounded-md cursor-pointer text-center lg:text-left flex items-center space-x-4">
            <Image
              src="/icon/crown.png"
              alt="not found"
              width={80}
              height={80}
            />
            <div>
              <p className="capitalize font-semibold ">Smart Features</p>
              <p className=" text-xs leading-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
                ullam! Suscipit illum quasi cumque? Nesciunt.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div
        className={`fixed top-0 left-0 w-full h-[100vh] bg-gray-800 opacity-95 z-[1000] flex justify-center items-center ${
          !isOpen && "hidden"
        }`}
        onClick={() => setOpen(false)}
      >
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/iGBERMGMIvc"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-md shadow-lg opacity-100"
        ></iframe>
      </div>
    </>
  );
};

export default Services;
