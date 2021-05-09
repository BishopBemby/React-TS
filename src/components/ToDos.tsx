import React from "react";
import todo from '../models/todo';
import ToDoItem from "./ToDoItem";
import classes from './ToDos.module.css';
//added custom prop to Fc to concat with already existing obj children in prop.
const ToDos: React.FC<{ items: todo[], onRemoveToDo: (id: string) => void }> = (props) => {
    console.log(props.items);
  return (
    <ul className ={classes.todos}>
      {props.items.map((item) => (
        // <li key={item.id}>{item.text}</li>
        <ToDoItem key={item.id} toDoItemText={item.text} onClickToDo={props.onRemoveToDo.bind(null, item.id)}/>
      ))}
    </ul>
  );
};

export default ToDos;
