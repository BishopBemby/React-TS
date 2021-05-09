
import classes from "./ToDoItem.module.css";

const ToDoItem: React.FC<{ toDoItemText: string, onClickToDo: () => void }> = (props) => {
  //   console.log(props.toDoItem);
  return <li className={classes.item} onClick={props.onClickToDo}>{props.toDoItemText}</li>;
};

export default ToDoItem;
