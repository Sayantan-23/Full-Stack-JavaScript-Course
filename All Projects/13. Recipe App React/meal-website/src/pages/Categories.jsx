import axios from "../axios/axios";
import { useEffect, useState } from "react";
import useStore from "../app/store";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

const Categories = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const changeCategoryInputValue = useStore(
    (state) => state.changeCategoryInputValue
  );

  const getCategoryData = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get("/categories.php");
      setCategoryData(res.data.categories);
    } catch (error) {
      setErrorMessage("Not Found");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getCategoryData();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="z-50 pt-44 h-[60vh] flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <>
          <div
            className={isLoading ? "brightness-0 pt-32 pb-10" : "pt-32 pb-10"}
          >
            <h3 className="text-4xl mb-10 text-center text-amber-700 font-semibold">
              Explore Our Recipe Collections
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {errorMessage ? (
                <p className="text-white text-5xl">{errorMessage}😓</p>
              ) : (
                <>
                  {categoryData.map((element) => {
                    return (
                      <Link to={"/category-search"} key={element.idCategory}>
                        <Card
                          mealName={element.strCategory}
                          mealImage={element.strCategoryThumb}
                          onClick={() =>
                            changeCategoryInputValue(element.strCategory)
                          }
                        />
                      </Link>
                    );
                  })}
                </>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Categories;
