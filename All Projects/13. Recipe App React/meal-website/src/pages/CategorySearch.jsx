import axios from "../axios/axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import useStore from "../app/store";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

const CategorySearch = () => {
  const [searchData, setSearchData] = useState([]);
  const [errorMessage, setErrorMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const categoryInputData = useStore((state) => state.categoryInputValue);

  const changeInputValue = useStore((state) => state.changeInputValue);

  const getSearchData = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(`/filter.php?c=${categoryInputData}`);
      setSearchData(res.data.meals);
      sessionStorage.setItem("CategorySearch", JSON.stringify(res.data.meals));
    } catch (error) {
      setErrorMessage(true);
    }
    setIsLoading(false);
  };

  const getDataFromSessionStorage = async () => {
    setIsLoading(true);
    const data =
      sessionStorage.getItem("CategorySearch") !== null
        ? JSON.parse(sessionStorage.getItem("CategorySearch"))
        : [];
    if (data.length !== 0) {
      setSearchData(data);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (categoryInputData.length === 0) {
      getDataFromSessionStorage();
    } else {
      getSearchData();
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="z-50 pt-44 h-[60vh] flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <div className="pt-32 pb-10">
          <h3 className="text-4xl mb-10 text-center text-amber-700 font-semibold">
            Explore Our Recipe Collections
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {errorMessage || !searchData ? (
              <p className="text-white text-5xl">Sorry Meals Not Found😓</p>
            ) : (
              <>
                {searchData.map((element) => {
                  return (
                    <Link to={"/recipe"} key={element.idMeal}>
                      <Card
                        mealName={element.strMeal}
                        mealImage={element.strMealThumb}
                        onClick={() => changeInputValue(element.strMeal)}
                      />
                    </Link>
                  );
                })}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CategorySearch;
