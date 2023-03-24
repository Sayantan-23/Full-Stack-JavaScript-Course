import { searchContext } from "./Header"
import { useContext } from "react"

const SearchCard = () => {
  const data = useContext(searchContext)
  console.log(data);
  return (
    <div>{ data }</div>
  )
}

export default SearchCard