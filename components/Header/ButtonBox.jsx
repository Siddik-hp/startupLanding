import { AiOutlineMenu } from "react-icons/ai";
const ButtonBox = ({ isToggle, setIsToggle }) => {
  return (
    <div className="flex space-x-4 items-center">
      <button className="outline outline-1 outline-rose-500 py-2 px-5 rounded-full font-medium text-rose-500 hover:outline-none hover:bg-rose-500 hover:text-white transition duration-200 ease-linear">
        Get Started
      </button>
      <AiOutlineMenu
        className="w-8 h-8 cursor-pointer lg:hidden"
        onClick={() => setIsToggle(!isToggle)}
      />
    </div>
  );
};

export default ButtonBox;
