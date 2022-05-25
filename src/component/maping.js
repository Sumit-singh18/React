import React from "react";

function Mapping() {
  const countries = ["India", "China", "Japan", "America", "UK"];
  return (
    <div>
      {countries.map((Item) => {
        return <h1>{Item}</h1>;
      })}
    </div>
  );
}

export default Mapping;
