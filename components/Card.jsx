import Image from "next/image";

const Card = () => {
  return (
    <div className="space-y-2 hover:shadow-lg p-4 transition duration-150 ease-linear rounded-md cursor-pointer lg:text-left flex items-start space-x-4 ">
      <div>
        <Image src="/icon/crown.png" alt="not found" width={80} height={80} />
      </div>
      <div>
        <p className="capitalize font-semibold ">Smart Features</p>
        <p className=" text-xs leading-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, ullam!
          Suscipit illum quasi cumque? Nesciunt. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Earum, ullam! Suscipit illum quasi
          cumque? Nesciunt.
        </p>
      </div>
    </div>
  );
};

export default Card;
