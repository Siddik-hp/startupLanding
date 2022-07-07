import Image from "next/image";
import Muckup from "../../assets/image/muckup.jpg";
const Hero = () => {
  return (
    <>
      <div className="text-center max-w-md mx-auto space-y-4   my-20" id="home">
        <h1 className="text-4xl capitalize font-semibold">
          Top Quality digital products to explore
        </h1>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          sint iusto beatae eos ipsum perferendis debitis voluptas nam quos
          quae?
        </p>
        <button className="bg-red-500 text-white py-2 px-4 rounded-full">
          Explore
        </button>
      </div>
      <div className="Shape_Design py-12">
        <div className="relative  flex justify-center items-center mx-auto  mt-4">
          <Image
            src={Muckup}
            width={800}
            height={500}
            objectFit="contain"
            objectPosition={"center center"}
            alt="not found"
            className=" shadow-lg "
          ></Image>
        </div>
      </div>
    </>
  );
};

export default Hero;
