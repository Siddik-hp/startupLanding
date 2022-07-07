import Image from "next/image";

const Card = () => {
  return (
    <div className="hover:shadow-lg p-4 transition duration-150 ease-linear rounded-md cursor-pointer lg:text-left flex items-start space-x-4 justify-between  ">
      <div>
        <Image src="/icon/crown.png" alt="not found" width={100} height={100} />
      </div>
      <div>
        <p className="capitalize font-semibold ">Smart Features</p>
        <p className=" text-sm leading-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, ullam!
          Suscipit illum quasi cumque? Nesciunt. Lorem ipsum dolor sit amet
        </p>
      </div>
    </div>
  );
};

export default Card;
