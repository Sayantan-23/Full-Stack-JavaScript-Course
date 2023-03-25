import searchIcon from "../assets/search-icon.svg";
import notificationIcon from "../assets/notification-icon.png";
import downArrowIcon from "../assets/downArrow-icon.png";

const Navbar = () => {
  return (
    <div className="text-white px-10 py-5 flex justify-between">
      <div className="flex items-center gap-10">
        <h3 className="text-3xl">
          Screen<span className="text-[#3c6e71]">Wave</span>
        </h3>
        <ul className="flex justify-center items-center gap-5">
          <span>Home</span>
          <span>Tv Shows</span>
          <span>Movies</span>
          <span>New & Popular</span>
          <span>My List</span>
        </ul>
      </div>
      <div className="flex items-center gap-5">
        <img className="W-5" src={searchIcon} alt="Search Icon" />
        <span>Children</span>
        <img className="w-5" src={notificationIcon} alt="Notification Icon" />
        <div className="flex items-center gap-1">
          <span>Profile</span>
          <img className="w-[10px]" src={downArrowIcon} alt="Arrow Down Icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
