import Image from "next/image";
const IconCard = ({ Icon, text, desc }) => {
  return (
    <div className="space-y-2 hover:shadow-lg p-4 transition duration-150 ease-linear rounded-md cursor-pointer text-center lg:text-left">
      <Image src={Icon} alt="not found" width={50} height={50} />
      <p className="capitalize font-semibold ">{text}</p>
      <p className=" text-xs leading-5">{desc}</p>
    </div>
  );
};
export default IconCard;
