import React, { useEffect, useState } from "react";

function Main() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://www.omdbapi.com/?apikey=329ffa13&s=panda")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [setData]);

  console.log(data);
  return <div className="contain container ">Main</div>;
}

export default Main;
