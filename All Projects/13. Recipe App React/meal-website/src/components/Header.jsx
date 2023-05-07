import { Link } from "react-router-dom";
import searchIcon from "../assets/search.png";

const Header = () => {
  return (
    <>
      <div className="navbar m-auto backdrop-blur-md justify-between fixed top-0 z-50">
        <div className="navbar m-auto justify-between max-w-7xl">
          <div className="navbar-start w-auto">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#212529] text-white rounded-box w-52"
              >
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/categories">Categories</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-center">
            <Link
              to="/"
              className="normal-case text-xl sm:text-3xl text-[#f1faee] font-bold"
            >
              <span className="relative flex">
                <span className="relative text-4xl right-11 sm:right-11 sm:top-0 sm:text-6xl font-semibold">
                  R<span className="absolute right-1 text-amber-700">R</span>
                </span>
                <span className="flex flex-col justify-center items-center relative">
                  <span className="text-amber-700 absolute z-10 bottom-3 sm:bottom-4 -left-11">
                    ecipe
                  </span>
                  {/* <span className="absolute z-20 sm:text-4xl">🍔</span> */}
                  <span className="absolute z-30 top-[10px] sm:top-[22px] -left-11">
                    ealm
                  </span>
                </span>
              </span>
            </Link>
          </div>
          <div
            className="form-control flex-row items-center gap-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <Link to="/search">
              <button
                className="btn bg-base-100 hover:bg-amber-700 rounded-[100vmax] p-2 w-12"
                title="Search"
              >
                <img className="w-5" src={searchIcon} alt="Search Icon" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
