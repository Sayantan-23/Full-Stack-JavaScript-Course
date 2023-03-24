import { SearchContext } from "./Header"
import { useContext } from "react"

const SearchCard = () => {
  const {data} = useContext(SearchContext)
  console.log(data.searchData);
  return (
    <SearchContext.Consumer>
      <div>{data}</div>
    </SearchContext.Consumer>
  )
}

export default SearchCard