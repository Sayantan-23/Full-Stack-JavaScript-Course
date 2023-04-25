import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import searchIcon from "../assets/search.png"
import axios from "axios"

// export const SearchContext = createContext();

const Header = () => {
  const [inputData, setInputData] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [error, setError] = useState("");
  const [url, setUrl] = useState("");
  const navigate = useNavigate()

  // console.log(searchData);
  // const handleSearch = async () => {
  //   try {
  //     console.log(inputData);
  //     const res = await axios.get(url);
  //     setSearchData(res.data.meals);
  //   } catch (error) {
  //     setError("Not Found");
  //   }
  // };

  // const handleOnClick = () => {
  //   setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputData}`)
  // }

  // useEffect(() => {
  // },[url])

  return (
    <>
      <div className="navbar m-auto backdrop-blur-md justify-between fixed top-0 z-10">
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
                {/* <li>
                <a>About</a>
              </li> */}
              </ul>
            </div>
          </div>
          <div className="navbar-center">
            <Link
              to="/"
              className="normal-case text-xl sm:text-3xl text-[#f1faee] font-bold"
            >
              Recipe<span className="text-amber-700">Realm</span>
            </Link>
          </div>
          <div
            className="form-control flex-row items-center gap-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered rounded-[100vmax] h-10 w-24 sm:w-40 md:w-48"
              onChange={(e) => setInputData(e.target.value)}
              value={inputData}
            />
            <button
              className="btn bg-base-100 hover:bg-amber-700 rounded-[100vmax] p-2 w-12"
              onClick={handleOnClick}
            >
              <img className="w-5" src={searchIcon} alt="Search Icon" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
