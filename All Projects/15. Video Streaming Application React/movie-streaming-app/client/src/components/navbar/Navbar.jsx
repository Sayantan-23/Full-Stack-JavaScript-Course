import "./navbar.css";
import searchIcon from "../../assets/search-icon.svg";
import notificationIcon from "../../assets/notification-icon.png";
import downArrowIcon from "../../assets/downArrow-icon.png";
import { useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  window.onscroll = () => {
    setScrolled(window.scrollY < 4.9 ? false : true);
    console.log(window.scrollY);
    return () => (window.onscroll = null);
  };

  return (
    <div
      className={
        scrolled
          ? "bg-gradient-to-t from-transparent to-[#0000004d] bg-main-bg transition-all duration-500 ease-in-out text-white px-10 py-5 flex justify-between fixed w-full z-50"
          : "bg-gradient-to-t from-transparent to-[#0000004d] transition-all duration-[0.4s] text-white px-10 py-5 flex justify-between fixed w-full z-50"
      }
    >
      <div className="flex items-center gap-10">
        <h3 className="text-2xl lg:text-3xl">
          Screen<span className="text-primary">Wave</span>
        </h3>
        <ul
          className="flex items-center gap-1 md:hidden cursor-pointer"
          onClick={() => setShowMenu(!showMenu)}
        >
          <span
            className={
              showMenu
                ? "toggle-active h-1 w-7 bg-primary m-auto rounded-full rotate-45 transition-transform duration-300 before:content-[''] before:block before:relative before:bg-primary before:h-1 before:w-7 before:rounded-full before:bottom-[9px] before:opacity-0 before:duration-300 after:content-[''] after:block after:relative after:bg-primary after:h-1 after:w-7 after:rounded-full after:-top-1 after:rotate-90 after:transition-transform after:duration-300"
                : "h-1 w-7 bg-primary m-auto rounded-full before:content-[''] before:block before:relative before:bg-primary before:h-1 before:w-7 before:rounded-full before:bottom-[9px] before:duration-300 after:content-[''] after:block after:relative after:bg-primary after:h-1 after:w-7 after:rounded-full after:top-[5px] after:duration-300"
            }
          ></span>
        </ul>
        <ul
          className={
            showMenu
              ? "flex flex-col absolute top-[70px] left-[150px] bg-main-bg p-[20px] rounded-xl z-50"
              : "hidden md:flex md:flex-row justify-center items-center gap-5 text-[0.9rem] lg:text-base"
          }
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
          className="w-6 lg:w-7 cursor-pointer"
          src={searchIcon}
          alt="Search Icon"
        />
        <span className="cursor-pointer hidden md:block text-[0.9rem] lg:text-base">Children</span>
        <img
          className="w-4 lg:w-5 cursor-pointer"
          src={notificationIcon}
          alt="Notification Icon"
        />
        <div className="profile flex flex-col items-center gap-1 cursor-pointer">
          <div className="flex items-center gap-1 text-[0.9rem] lg:text-base">
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
