import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";


/**** */
import axios from "./axios/axios";
import { useState, useEffect } from "react";
/**** */


const App = () => {
  /************ */
  const [categoryData, setCategoryData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  console.log(categoryData);

  const getCategoryData = async () => {
    try {
      const res = await axios.get("/categories.php");
      setCategoryData(res.data.categories);
    } catch (error) {
      setErrorMessage("error");
    }
  };

  useEffect(() => {
    getCategoryData();
  }, []);
  /********* */

  return (
    <>
      <Header />

      <div className="pt-36 flex flex-wrap">
        {categoryData.map((element) => {
          return (
            <div className="card w-96 glass m-auto" key={element.idCategory}>
              <figure>
                <img src={element.strCategoryThumb} alt="Category Image" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Life hack</h2>
                <p>How to park your car at your garage?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Learn now!</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Outlet />
    </>
  );
};

export default App;
