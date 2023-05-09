import { useEffect, useState } from "react";
import useStore from "../app/store";
import axios from "../axios/axios";
import Loader from "../components/Loader";

const Recipe = () => {
  const [searchData, setSearchData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [youtubeId, setYoutubeId] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const inputData = useStore((state) => state.inputValue);

  const getRecipe = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(`/search.php?s=${inputData}`);
      setSearchData(res.data.meals);
      setYoutubeId(res.data.meals[0].strYoutube.split("?v=")[1]);
      sessionStorage.setItem("recipe", JSON.stringify(res.data.meals));
    } catch (error) {
      setErrorMessage("Sorry Recipe Not Found");
    }
    setIsLoading(false);
  };

  const getRecipeFromSessionStorage = async () => {
    setIsLoading(true);
    const recipe =
      sessionStorage.getItem("recipe") !== null
        ? JSON.parse(sessionStorage.getItem("recipe"))
        : [];
    if (recipe.length !== 0) {
      setSearchData(recipe);
      setYoutubeId(recipe[0].strYoutube.split("?v=")[1]);
    } else {
      setErrorMessage("Sorry Recipe Not Found");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (inputData.trim().length === 0) {
      getRecipeFromSessionStorage();
    } else {
      getRecipe();
      setYoutubeId(youtubeId);
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="z-50 pt-44 h-[60vh] flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <>
          {errorMessage ? (
            <p className="text-xl sm:text-2xl md:text-5xl pt-24 text-amber-700 text-center font-medium">
              {errorMessage}🍔
            </p>
          ) : (
            <>
              {searchData.map((element) => {
                return (
                  <div
                    className="flex flex-col pt-24 pb-16 max-w-screen-lg m-auto"
                    key={element.idMeal}
                  >
                    <div className="flex flex-col sm:flex-row text-center sm:text-left justify-center sm:justify-between items-center p-2 w-full gap-5 max-w-screen-lg m-auto">
                      <figure className="sm:w-1/2">
                        <img
                          src={element.strMealThumb}
                          alt="Meal Image"
                          className="rounded-xl max-h-96 sm:w-80 md:w-96 m-auto"
                        />
                      </figure>
                      <div className="w-1/2 flex flex-col items-center sm:items-start gap-2">
                        <h3 className="text-amber-200 text-4xl md:text-5xl">
                          {element.strMeal}
                        </h3>
                        <p className="text-amber-500 text-3xl md:text-4xl">
                          {element.strArea}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col justify-start items-start text-white pt-10 gap-4 px-2 sm:px-4">
                      <h4 className="text-3xl sm:text-4xl pt-4 text-amber-600 sm:font-semibold">
                        🍴 How to Make it
                      </h4>
                      <p className="text-xl text-amber-200">
                        -{element.strInstructions}
                      </p>
                      <h4 className="text-3xl sm:text-4xl pt-4 text-amber-600 sm:font-semibold">
                        🍳 Ingredients and quantity
                      </h4>
                      <p className="text-xl text-amber-200">
                        {element.strIngredient1 ||
                        element.strIngredient1 !== "" ||
                        element.strIngredient1 !== null ? (
                          <span>
                            1. {element.strIngredient1} - {element.strMeasure1}
                            <br />
                          </span>
                        ) : (
                          ""
                        )}
                        {element.strIngredient2 ||
                        element.strIngredient2 !== "" ||
                        element.strIngredient2 !== null ? (
                          <span>
                            2. {element.strIngredient2} - {element.strMeasure2}
                            <br />
                          </span>
                        ) : (
                          ""
                        )}

                        {element.strIngredient3 ||
                        element.strIngredient3 !== "" ||
                        element.strIngredient3 !== null ? (
                          <span>
                            3. {element.strIngredient3} - {element.strMeasure3}
                            <br />
                          </span>
                        ) : (
                          ""
                        )}

                        {element.strIngredient4 ||
                        element.strIngredient4 !== "" ||
                        element.strIngredient4 !== null ? (
                          <span>
                            4. {element.strIngredient4} - {element.strMeasure4}
                            <br />
                          </span>
                        ) : (
                          ""
                        )}

                        {element.strIngredient5 ||
                        element.strIngredient5 !== "" ||
                        element.strIngredient5 !== null ? (
                          <span>
                            5. {element.strIngredient5} - {element.strMeasure5}
                            <br />
                          </span>
                        ) : (
                          ""
                        )}

                        {element.strIngredient6 ||
                        element.strIngredient6 !== "" ||
                        element.strIngredient6 !== null ? (
                          <span>
                            6. {element.strIngredient6} - {element.strMeasure6}
                            <br />
                          </span>
                        ) : (
                          ""
                        )}

                        {element.strIngredient7 ||
                        element.strIngredient7 !== "" ||
                        element.strIngredient7 !== null ? (
                          <span>
                            7. {element.strIngredient7} - {element.strMeasure7}
                            <br />
                          </span>
                        ) : (
                          ""
                        )}

                        {element.strIngredient8 ||
                        element.strIngredient8 !== "" ||
                        element.strIngredient8 !== null ? (
                          <span>
                            8. {element.strIngredient8} - {element.strMeasure8}
                            <br />
                          </span>
                        ) : (
                          ""
                        )}

                        {element.strIngredient9 ||
                        element.strIngredient9 !== "" ||
                        element.strIngredient9 !== null ? (
                          <span>
                            9. {element.strIngredient9} - {element.strMeasure9}
                            <br />
                          </span>
                        ) : (
                          ""
                        )}

                        {element.strIngredient10 ||
                        element.strIngredient10 !== "" ||
                        element.strIngredient10 !== null ? (
                          <span>
                            10. {element.strIngredient10} -{" "}
                            {element.strMeasure10}
                            <br />
                          </span>
                        ) : (
                          ""
                        )}

                        {element.strIngredient11 ||
                        element.strIngredient11 !== "" ||
                        element.strIngredient11 !== null ? (
                          <span>
                            11. {element.strIngredient11} -{" "}
                            {element.strMeasure11}
                            <br />
                          </span>
                        ) : (
                          ""
                        )}

                        {element.strIngredient12 ||
                        element.strIngredient12 !== "" ||
                        element.strIngredient12 !== null ? (
                          <span>
                            12. {element.strIngredient12} -{" "}
                            {element.strMeasure12}
                            <br />
                          </span>
                        ) : (
                          ""
                        )}

                        {element.strIngredient13 ||
                        element.strIngredient13 !== "" ||
                        element.strIngredient13 !== null ? (
                          <span>
                            13. {element.strIngredient13} -{" "}
                            {element.strMeasure13}
                            <br />
                          </span>
                        ) : (
                          ""
                        )}

                        {element.strIngredient14 ||
                        element.strIngredient14 !== "" ||
                        element.strIngredient14 !== null ? (
                          <span>
                            14. {element.strIngredient14} -{" "}
                            {element.strMeasure14}
                            <br />
                          </span>
                        ) : (
                          ""
                        )}

                        {element.strIngredient15 ||
                        element.strIngredient15 !== "" ||
                        element.strIngredient15 !== null ? (
                          <span>
                            15. {element.strIngredient15} -{" "}
                            {element.strMeasure15}
                            <br />
                          </span>
                        ) : (
                          ""
                        )}

                        {element.strIngredient16 ||
                        element.strIngredient16 !== "" ||
                        element.strIngredient16 !== null ? (
                          <span>
                            16. {element.strIngredient16} -{" "}
                            {element.strMeasure16}
                            <br />
                          </span>
                        ) : (
                          ""
                        )}
                        {element.strIngredient17 ||
                        element.strIngredient17 !== "" ||
                        element.strIngredient17 !== null ? (
                          <span>
                            17. {element.strIngredient17} -{" "}
                            {element.strMeasure17}
                            <br />
                          </span>
                        ) : (
                          ""
                        )}
                        {element.strIngredient18 ||
                        element.strIngredient18 !== "" ||
                        element.strIngredient18 !== null ? (
                          <span>
                            18. {element.strIngredient18} -{" "}
                            {element.strMeasure18}
                            <br />
                          </span>
                        ) : (
                          ""
                        )}
                        {element.strIngredient19 ||
                        element.strIngredient19 !== "" ||
                        element.strIngredient19 !== null ? (
                          <span>
                            19. {element.strIngredient19} -{" "}
                            {element.strMeasure19}
                            <br />
                          </span>
                        ) : (
                          ""
                        )}
                        {element.strIngredient20 ||
                        element.strIngredient20 !== "" ||
                        element.strIngredient20 !== null ? (
                          <span>
                            20. {element.strIngredient20} -{" "}
                            {element.strMeasure20}
                            <br />
                          </span>
                        ) : (
                          ""
                        )}
                      </p>
                      <h4 className="text-3xl sm:text-4xl pt-4 text-amber-600 sm:font-semibold">
                        💻 Recipe Video
                      </h4>
                      {youtubeId ? (
                        <iframe
                          className="sm:w-[560px] sm:h-[315px]"
                          src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          title="video"
                        ></iframe>
                      ) : (
                        <p className="text-xl text-amber-200">
                          Sorry video not available for this recipe ☹️
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </>
      )}
    </>
  );
};

export default Recipe;
