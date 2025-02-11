import React from 'react'

const Search = ({searchTerm,setsearchTerm}) => {
  
    return (
    <div className="search">
        <div>
      <img src="./search.png" alt="search"/>
      <input
        type="text"
        placeholder="Search for a movies"
        value={searchTerm}
        onChange={(event) => setsearchTerm(event.target.value)}
      />
    </div>
    </div>
  )
}

export default Search
