import axios from "../axios/axios"
import { useEffect, useState } from "react"


const Categories = () => {

  const [categoryData, setCategoryData] = useState([])
  const [errorMessage, setErrorMessage] = useEffect("")

  const getCategoryData = async () => {
    try {
      const res = await axios.get("/categories.php")
      setCategoryData(res.data)
    } catch (error) {
      setErrorMessage(error.message)
    }
  }

  useEffect(() => {
    getCategoryData()
  },[])

  return (
    <div>
       
    </div>
  )
}

export default Categories