import './style.css'

export const SearchInput = ({searchValue, handleIChange}) =>{
  return( 
    <div className="searchInput">
      {searchValue !== "" && <h1> Search results for "{searchValue}":</h1>}

      <input
        onChange={handleIChange}
        type="search"
        placeholder='search'
        value={searchValue} //to update the html while the user types
      />
    </div>
  )
}