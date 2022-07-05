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

const NavBox = () => {
  return (
    <ul className="hidden md:flex items-center space-x-5 ">
      {Nav_Links.map((nav_link) => {
        return (
          <li
            key={nav_link.key}
            className="hover:text-rose-500 cursor-pointer transition duration-150 ease-linear"
          >
            <a href={nav_link.path}>{nav_link.text}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default NavBox;
