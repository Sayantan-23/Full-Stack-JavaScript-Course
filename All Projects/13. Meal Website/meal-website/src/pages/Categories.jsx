import axios from "../axios/axios"
import { useEffect, useState } from "react"

const Categories = () => {

  const [categoryData, setCategoryData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const getCategoryData = async () => {
    try {
      const res = await axios.get("/categories.php");
      setCategoryData(res.data.categories);
    } catch (error) {
      setErrorMessage("Not Found");
    }
  };

  useEffect(() => {
    getCategoryData();
  }, []);

  return (
    <div className="pt-32 pb-10">
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
                  <div className="card w-64 bg-[#e9ddd2df] shadow-xl" key={element.idCategory}>
                    <figure className="px-10 pt-10">
                      <img
                        src={element.strCategoryThumb}
                        alt="Shoes"
                        className="rounded-xl"
                      />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">{element.strCategory}</h2>
                      {/* <div className="card-actions">
                        <button className="btn bg-amber-800 outline-none border-none hover:bg-amber-900">Browse By Category</button>
                    </div> */}
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
  )
}

export default Categories