import React, { useRef, useContext } from "react";
import {TodoContext} from '../store/TodoContext';
import classes from './NewToDo.module.css';

const NewToDo: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const todoCtx = useContext(TodoContext);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredValue = inputRef.current!.value;
    if (enteredValue.trim().length === 0) {
      return;
    }
    todoCtx.addingToDoHandler(enteredValue);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="name">Name todo text</label>
      <input type="text" id="name" ref={inputRef} />
      <button>Add ToDo</button>
    </form>
  );
};

export default NewToDo;
