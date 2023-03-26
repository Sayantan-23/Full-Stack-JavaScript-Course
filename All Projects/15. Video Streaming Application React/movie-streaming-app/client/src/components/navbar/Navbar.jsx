import "./navbar.css";
import searchIcon from "../../assets/search-icon.svg";
import notificationIcon from "../../assets/notification-icon.png";
import downArrowIcon from "../../assets/downArrow-icon.png";
import { useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  window.onscroll = () => {
    setScrolled(window.scrollY < 4.9 ? false : true);
    return () => (window.onscroll = null);
  };

  const dropdownMenu = document.getElementById("dropdown-menu");
  const menuArrow = document.getElementById("menu-arrow");

  const dropdownMenuOperation = () => {
    if (dropdownMenu.className.split(" ").includes("menu")) {
      dropdownMenu.classList.remove("menu");
    } else {
      dropdownMenu.classList.add("menu");
    }
  };

  return (
    <div
      className={
        scrolled
          ? "bg-main-bg navbar text-white px-10 py-5 flex justify-between fixed w-full z-50"
          : "navbar text-white px-10 py-5 flex justify-between fixed w-full z-50"
      }
    >
      <div className="flex items-center gap-10">
        <h3 className="text-2xl md:text-3xl">
          Screen<span className="text-[#3c6e71]">Wave</span>
        </h3>
        <ul
          className="browse flex items-center gap-1 md:hidden cursor-pointer"
          onClick={dropdownMenuOperation}
        >
          <li>Browse</li>
          <img
            className="profile-arrow w-[9px]"
            src={downArrowIcon}
            alt="Arrow Down Icon"
          />
        </ul>
        <ul
          className="hidden md:flex md:flex-row justify-center items-center gap-5"
          id="dropdown-menu"
        >
          <span>Home</span>
          <span>Tv Shows</span>
          <span>Movies</span>
          <span>New & Popular</span>
          <span>My List</span>
        </ul>
      </div>
      <div className="flex items-center gap-5">
        <img
          className="W-5 cursor-pointer"
          src={searchIcon}
          alt="Search Icon"
        />
        <span className="cursor-pointer hidden md:block">Children</span>
        <img
          className="w-5 cursor-pointer"
          src={notificationIcon}
          alt="Notification Icon"
        />
        <div className="profile flex flex-col items-center gap-1 cursor-pointer">
          <div className="flex items-center gap-1">
            <span>Profile</span>
            <img
              className="profile-arrow w-[9px]"
              src={downArrowIcon}
              alt="Arrow Down Icon"
            />
          </div>
          <div className="options hidden bg-main-bg p-2 rounded-md">
            <span className="px-2 py-1 cursor-pointer">Settings</span>
            <span className="px-2 py-1 cursor-pointer">Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
