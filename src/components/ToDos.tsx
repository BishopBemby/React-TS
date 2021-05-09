import React, {useContext} from "react";
import {TodoContext} from '../store/TodoContext';
import ToDoItem from "./ToDoItem";
import classes from './ToDos.module.css';
//added custom prop to Fc to concat with already existing obj children in prop.
const ToDos: React.FC = () => {

  const todoCtx = useContext(TodoContext);
  return (
    <ul className ={classes.todos}>
      {todoCtx.items.map((item) => (
        // <li key={item.id}>{item.text}</li>
        <ToDoItem key={item.id} toDoItemText={item.text} onClickToDo={todoCtx.deleteToDo.bind(null, item.id)}/>
      ))}
    </ul>
  );
};

export default ToDos;
