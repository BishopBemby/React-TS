import React, { useRef } from "react";
import classes from './NewToDo.module.css';

const NewToDo: React.FC<{ onAddToDo: (text: string) => void }> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredValue = inputRef.current!.value;
    if (enteredValue.trim().length === 0) {
      return;
    }
    props.onAddToDo(enteredValue);
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
