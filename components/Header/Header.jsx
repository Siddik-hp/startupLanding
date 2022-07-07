import React, { useState } from "react";
import ButtonBox from "./ButtonBox";
import LogoBox from "./LogoBox";
import Nav_List from "./NavBox";

const Header = () => {
  const [isToggle, setIsToggle] = useState(false);
  return (
    <div className="flex justify-around items-center py-6 sticky top-0 bg-white z-[1000] ">
      <LogoBox />
      <Nav_List isToggle={isToggle} setIsToggle={setIsToggle} />
      <ButtonBox isToggle={isToggle} setIsToggle={setIsToggle} />
    </div>
  );
};

export default Header;
