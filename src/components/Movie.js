import React from "react";

function Movie({ Poster, Title, Type, Year, imdbID }) {
  return;
  <div key={imdbID} className="card movie">
    <div className="card-image waves-effect waves-block waves-light">
      <img className="activator" src={Poster} />
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">
        Card Title<i className="material-icons right">{Title}</i>
      </span>
      <p>
        {Year} <span className="right">{Type}</span>
      </p>
    </div>
  </div>;
}

export default Movie;
