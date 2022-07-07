import Image from "next/image";
import React from "react";
import Logo from "../../assets/image/logo.png";
const Footer = () => {
  return (
    <footer className="px-10  border-t py-4 space-y-6 lg:space-y-3">
      <div className="grid grid-cols-2 lg:grid-cols-4">
        <div>
          <Image src={Logo} alt="not found" width={40} height={40} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
            libero!
          </p>
        </div>
        <ul className="leading-8">
          <h1 className="font-bold text-lg">Quick Links</h1>
          <li>Home</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>About</li>
          <li>Privacy</li>
        </ul>
        <ul className="leading-8">
          <h1 className="font-bold text-lg">Trusted Companys</h1>
          <li>Paypal</li>
          <li>Amazon</li>
          <li>Tesla</li>
          <li>Daraz</li>
        </ul>
        <ul className="leading-8">
          <h1 className="font-bold text-lg">Contact Info</h1>
          <li>example@gmail.com</li>
          <li>supportmail@gamil.com</li>
          <li>+1 1254 12540</li>
          <li>+91 1254856954</li>
        </ul>
      </div>
      <div className="bg-red-600 w-max space-x-2 ml-auto px-4 py-3 rounded-lg">
        <input
          type="text"
          className="outline-none bg-transparent placeholder:text-black"
          placeholder="Enter email address"
        />
        <button className="bg-white text-black p-2 rounded-lg">
          Subscribe
        </button>
      </div>
    </footer>
  );
};

export default Footer;
