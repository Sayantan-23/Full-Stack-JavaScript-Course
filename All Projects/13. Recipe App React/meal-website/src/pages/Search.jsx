import axios from "../axios/axios";
import { useEffect, useState } from "react";
import searchIcon from "../assets/search.png";
import { Link } from "react-router-dom";
import useStore from "../app/store";
import Loader from "../components/Loader";

const Search = () => {
  const [inputData, setInputData] = useState("");
  const [onSearch, setOnSearch] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const changeInputValue = useStore((state) => state.changeInputValue);

  const handleOnClick = () => {
    setOnSearch(true);
    if (inputData) {
      sessionStorage.removeItem("lists");
    }
  };

  const searchOnClick = (element) => {
    setInputData(element);
    changeInputValue(element);
  };

  const getSearchData = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(`/search.php?s=${inputData}`);
      if (res.data.meals === null) {
        setErrorMessage("Please Search For Valid Meals");
      } else {
        setSearchData(res.data.meals);
        sessionStorage.setItem("lists", JSON.stringify(res.data.meals));
        setErrorMessage("");
      }
    } catch (error) {
      setErrorMessage("Not Found");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const recipe =
      sessionStorage.getItem("lists") !== null
        ? JSON.parse(sessionStorage.getItem("lists"))
        : [];
    setSearchData(recipe);
    if (recipe.length === 0) {
      if (onSearch) {
        if (inputData.trim().length === 0) {
          setOnSearch(false);
        } else {
          getSearchData();
          setOnSearch(false);
        }
      }
    }
  }, [onSearch]);

  return (
    <>
      <div className="pt-[100px] flex w-full justify-center gap-2 sticky top-0 z-10">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered input-warning rounded-[100vmax] h-12 w-60 sm:w-80 md:w-96"
          onChange={(e) => setInputData(e.target.value)}
        />
        <button
          className="btn bg-base-100 hover:bg-amber-700 rounded-[100vmax] p-2 w-12"
          onClick={handleOnClick}
        >
          <img className="w-5" src={searchIcon} alt="Search Icon" />
        </button>
      </div>
      {isLoading ? (
        <div className="z-50 pt-32 h-[45vh] flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <>
          <div className="flex flex-wrap justify-center items-center gap-8 pb-8">
            {errorMessage ? (
              <p className="text-xl sm:text-2xl md:text-5xl pt-8 text-amber-700 text-center font-medium">
                {errorMessage}🍔
              </p>
            ) : (
              <>
                {searchData.map((element) => {
                  return (
                    <Link to={"/recipe"} key={element.idMeal}>
                      <div
                        className="card group w-64 bg-[#2f2922] shadow-xl text-white mt-8 cursor-pointer pt-0"
                        key={element.idMeal}
                        onClick={() => searchOnClick(element.strMeal)}
                      >
                        <figure className="p-2 group-hover:scale-110 transition-all duration-300">
                          <img
                            src={element.strMealThumb}
                            alt="Meal Image"
                            className="rounded-xl"
                          />
                        </figure>
                        <div className="card-body items-center text-center text-amber-50 group-hover:text-amber-200 transition-all duration-300">
                          <h2 className="card-title">{element.strMeal}</h2>
                          <span className="text-amber-200 group-hover:text-amber-400 transition-all duration-300">
                            {element.strArea}
                          </span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Search;
