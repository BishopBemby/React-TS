import React from "react";
//added custom prop to Fc to concat with already existing obj children in prop.
const ToDos: React.FC<{ items: string[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
};

export default ToDos;
