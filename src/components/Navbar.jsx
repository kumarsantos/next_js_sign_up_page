import Image from "next/image";
import React from "react";
import Logo from "../assets/logo.png";
import Timer from "../assets/timerIcon.png";
import SearchIcon from "../assets/Vector.png";
import DownArrow from "../assets/downArrow.png";
import PlushIcon from "../assets/plusIcon.png";
import BellIcon from "../assets/bellIcon.png";
import SettingIcon from "../assets/settingIcon.png";
import Icon1 from "../assets/icon1.png";

const Navbar = () => {
  return (
    <header className="bg-slate-700 text-white flex items-center justify-between px-2 md:px-8 lg:px-8 py-4 w-full flex-wrap gap-y-2">
      <nav className="flex items-center justify-between max-w-[70%] md:max-w-[50%] lg:max-w-[50%] w-full">
        <div className="flex items-center ">
          <Image height={24} width={24} src={Logo} alt="logo" />
          <h2 className="text-xl font-sm ml-2">Books</h2>
        </div>
        <div className="flex items-center ml-6 md:ml-0 lg:ml-0">
          <Image src={Timer} height={40} width={40} alt="time-icon" />
          <div className="flex items-center border   rounded-lg ml-2 border-slate-400">
            <div className="flex items-center  px-2">
              <Image
                src={SearchIcon}
                alt="search-icon"
                height={16}
                width={16}
              />
              <Image src={DownArrow} alt="down-arrow" height={16} width={16} />
            </div>
            <div>
              <input
                className=" py-2 px-2 border-l border-slate-400 outline-none  bg-transparent"
                type="text"
                placeholder="Search in Invoices ( / )"
              />
            </div>
          </div>
        </div>
      </nav>
      <nav className="flex items-center">
        <p className="text-[14px] hidden md:block lg:block">
          You are currently in th...{" "}
          <span className="text-blue-400 font-medium tracking-wider ml-1">
            Upgrade
          </span>
        </p>
        <Image
          height={40}
          width={40}
          alt="plushIcon"
          src={PlushIcon}
          className="ml-2 cursor-pointer"
        />
        <span className="flex items-center border-l border-r mx-2 border-slate-500">
          <Image
            height={40}
            width={40}
            alt="plushIcon"
            src={BellIcon}
            className="cursor-pointer"
          />
          <Image
            height={40}
            width={40}
            alt="plushIcon"
            src={SettingIcon}
            className="cursor-pointer"
          />
        </span>
        <p className="flex items-center text-sm font-sm tracking-wider">
          Black and White{" "}
          <span>
            <Image
              height={16}
              width={16}
              alt="plushIcon"
              src={DownArrow}
              className=" -ml-[3px]"
            />
          </span>
        </p>
        <p className="uppercase rounded-full border h-[32px] w-[32px] flex items-center justify-center outline-none mx-2 font-semibold text-xl bg-red-400 cursor-pointer">
          B
        </p>
        <Image
          height={40}
          width={40}
          alt="Icon1"
          src={Icon1}
          className="cursor-pointer"
        />
      </nav>
    </header>
  );
};

export default Navbar;
