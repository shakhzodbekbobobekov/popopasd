import React from "react";
import GoodItem from "./GoodItem";

function GoodList(props) {
  const { goods = [] } = props;

  if (!goods.length) {
    return <h3>Nothing here</h3>;
  }
  return (
    <div className="goods">
      {goods &&
        goods.map((item) => {
          return <GoodItem key={item.id} {...item} />;
        })}
    </div>
  );
}

export default GoodList;
