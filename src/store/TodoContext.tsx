import React, { useState } from "react";

import todo from "../models/todo";

type TodosObj = {
    items: todo[];
    addingToDoHandler: (text: string) => void;
    deleteToDo: (id: string) => void;
}

export const TodoContext = React.createContext<TodosObj>({
  items: [],
  addingToDoHandler: () => {},
  deleteToDo: (id: string) => {},
});

const ToDosProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<todo[]>([]);

  const addingToDoHandler = (text: string) => {
    const newTodos = new todo(text);

    setTodos((prevTodo) => {
      return prevTodo.concat(newTodos);
    });
  };

  const deleteToDo = (toDOId: string) => {
    setTodos((prevToDo) => {
      return prevToDo.filter((todo) => todo.id !== toDOId);
    });
  };

  const contextValues: TodosObj = {
    items: todos,
    addingToDoHandler,
    deleteToDo,
  };
  return <TodoContext.Provider value={contextValues}>{props.children}</TodoContext.Provider>;
};

export default ToDosProvider;
