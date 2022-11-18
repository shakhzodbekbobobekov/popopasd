import React from "react";
import News from "./News";

function Data() {
  const users = [
    {
      id: 1,
      fName: "Shaxzodbek",
      age: 22,
      city: "buxoro",
    },
    {
      id: 2,
      fName: "Turabek",
      age: 21,
      city: "Kattaqurg'on",
    },
    {
      id: 3,
      fName: "Jonibek",
      age: 19,
      city: "samarkand",
    },
    {
      id: 4,
      fName: "Hasanboy",
      age: 24,
      city: "Farg'ona",
    },
  ];
  return (
    <div>
      <h1>data </h1>
      {users &&
        users.map((user) => {
          // <News dataUsers={user} />;
          <h1>{user.age}</h1>;
        })}
    </div>
  );
}

export default Data;
