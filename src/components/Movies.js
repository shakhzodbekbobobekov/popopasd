import React from "react";

function Movies({ data }) {
  console.log(data.data);
  return (
    <div className="movies">
      {/* {data.data.Search.map((movie) => {
        {
          console.log(movie);
        }
      })} */}
    </div>
  );
}

export default Movies;
