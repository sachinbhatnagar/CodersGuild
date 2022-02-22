import React from 'react'

function Cards({searchTerm, JSONDATA}) {
  return (
    <>{JSONDATA.filter((item) => {
        if (searchTerm === "") {
          return item;
        } else if (
          item.first_name
            .toLocaleLowerCase()
            .includes(searchTerm.toLocaleLowerCase())
        ) {
          return item;
        }
      }).map((item, key) => {
        return (
          <div className="use" key={key}>
            <p>{item.first_name}</p>{" "}
          </div>
        );
      })}</>
  )
}

export default Cards