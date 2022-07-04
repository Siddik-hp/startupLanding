import React from "react";
import Image from "next/image";
import Logo from "../../assets/image/logo.png";

const LogoBox = () => {
  return (
    <div className="flex items-center space-x-2">
      <Image src={Logo} width={40} height={40} alt="Logo" />
      <h1 className="font-bold">StartupLanding</h1>
    </div>
  );
};

export default LogoBox;
