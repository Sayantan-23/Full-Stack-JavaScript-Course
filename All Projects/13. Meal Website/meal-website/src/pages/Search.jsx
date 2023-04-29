import axios from "../axios/axios";
import { useEffect, useState } from "react";
import searchIcon from "../assets/search.png";

const Search = () => {
  const [inputData, setInputData] = useState("");
  const [onSearch, setOnSearch] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [onSingleSearch, setOnSingleSearch] = useState(false);
  const [singleSearchData, setSingleSearchData] = useState([]);
  const [showCard, setShowCard] = useState(false);

  const handleOnClick = () => {
    setOnSearch(true);
  };

  const searchOnClick = (element) => {
    setInputData(element);
    setOnSingleSearch(true);
  };

  const getSearchData = async () => {
    try {
      const res = await axios.get(`/search.php?s=${inputData}`);
      if (res.data.meals === null) {
        setErrorMessage("Please Search For Valid Meals");
      } else {
        setSearchData(res.data.meals);
        setErrorMessage("");
      }
    } catch (error) {
      setErrorMessage("Not Found");
    }
  };

  const getSingleSearchData = async () => {
    try {
      const res = await axios.get(`/search.php?s=${inputData}`);
      setSingleSearchData(res.data.meals);
    } catch (error) {
      setErrorMessage("Not Found");
    }
  };

  useEffect(() => {
    console.log(inputData);
    if (onSearch) {
      if (inputData.trim().length === 0) {
        setOnSearch(false);
      } else {
        getSearchData();
        setOnSearch(false);
      }
    }
    if (onSingleSearch) {
      getSingleSearchData();
      setOnSingleSearch(false);
      setShowCard(true);
    }
  }, [onSearch, onSingleSearch]);

  console.log(singleSearchData);

  return (
    <>
      <div className={showCard ? "brightness-[0.3] pointer-events-none" : ""}>
        <div className=" pt-[85px] flex w-full justify-center gap-2 sticky top-0 z-10">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered input-warning max-w-xs rounded-[100vmax] h-12 w-24 sm:w-40 md:w-96"
            onChange={(e) => setInputData(e.target.value)}
          />
          <button
            className="btn bg-base-100 hover:bg-amber-700 rounded-[100vmax] p-2 w-12"
            onClick={handleOnClick}
          >
            <img className="w-5" src={searchIcon} alt="Search Icon" />
          </button>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 pb-8">
          {errorMessage ? (
            <p className="text-xl sm:text-2xl md:text-5xl pt-8 text-amber-700 text-center font-medium">
              {errorMessage}🍔
            </p>
          ) : (
            <>
              {searchData.map((element) => {
                return (
                  <div
                    className="card w-64 bg-[#2f2922] shadow-xl text-white mt-8 cursor-pointer"
                    key={element.idMeal}
                    onClick={() => searchOnClick(element.strMeal)}
                  >
                    <figure className="p-2">
                      <img
                        src={element.strMealThumb}
                        alt="Meal Image"
                        className="rounded-xl"
                      />
                    </figure>
                    <div className="card-body items-center text-center text-amber-200">
                      <h2 className="card-title">{element.strMeal}</h2>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
      {showCard ? (
        singleSearchData.map((element) => {
          return (
            <div
              className="card w-80 sm:w-[30rem] bg-[#2f2922] shadow-xl text-white mt-8 fixed top-[50%] -translate-y-1/2 left-1/2 -translate-x-1/2 z-20 flex justify-center items-center"
              key={element.idMeal}
            >
              <figure className="">
                <img
                  src={element.strMealThumb}
                  alt="Meal Image"
                  className="rounded-xl"
                />
              </figure>
              <h3 className="pt-2 text-amber-500 text-xl sm:text-2xl md:text-4xl">
                {element.strMeal}
              </h3>
              <p className="">{ element.strArea }</p>
              <button
                className="bg-amber-800 outline-none border-none hover:bg-amber-900 h-10 rounded-lg px-4 transition-all transition-500"
                onClick={() => setShowCard(false)}
              >
                Close
              </button>
            </div>
          );
        })
      ) : (
        <></>
      )}
    </>
  );
};

export default Search;
