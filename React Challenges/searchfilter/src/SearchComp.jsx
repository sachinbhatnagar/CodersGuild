import React from 'react'

function SearchComp({setSearchTerm}) {
  return (
    <>
    <input
    type="text"
    placeholder="search.."
    onChange={(e) => {
      setSearchTerm(e.target.value);
    }}
  /></>
  )
}

export default SearchComp