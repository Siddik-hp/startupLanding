// import Link from "next/link";
import { useEffect } from "react";
import { Link } from "react-scroll";

const Nav_Links = [
  {
    key: 1,
    path: "/",
    text: "Home",
  },
  {
    key: 2,
    path: "#features",
    text: "Features",
  },
  {
    key: 3,
    path: "#pricing",
    text: "Pricing",
  },
  {
    key: 4,
    path: "#testimonial",
    text: "Testimonial",
  },
];

const NavBox = ({ isToggle, setIsToggle }) => {
  return (
    <ul
      className={`fixed top-0 ${
        isToggle ? "left-0" : "-left-96"
      }  w-5/12 h-screen bg-slate-700 opacity-75 text-white transition duration-200 ease-in-out flex flex-col space-y-4 pt-10 items-center  lg:w-auto lg:h-auto lg:bg-transparent lg:text-black  lg:opacity-100  lg:static lg:top-0 lg:flex lg:items-center lg:space-x-5 lg:flex-row lg:space-y-0  lg:pt-0`}
    >
      {Nav_Links.map((nav_link) => {
        return (
          <li
            key={nav_link.key}
            className="hover:text-rose-500 cursor-pointer transition duration-150 ease-linear"
            onClick={() => setIsToggle(!isToggle)}
          >
            <a href={nav_link.path}>{nav_link.text}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default NavBox;
