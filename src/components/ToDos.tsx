import React from "react";
import todo from '../models/todo';
//added custom prop to Fc to concat with already existing obj children in prop.
const ToDos: React.FC<{ items: todo[] }> = (props) => {
    console.log(props.items);
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export default ToDos;
