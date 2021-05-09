import {useState} from 'react';
import NewToDo from './components/NewToDo';
import ToDos from './components/ToDos';
import todo from './models/todo';

function App() {
const [todos, setTodos] = useState<todo[]>([]);

  const addingToDoHandler = (text: string) =>{
      const newTodos = new todo(text);

      setTodos((prevTodo)=>{
          return prevTodo.concat(newTodos);
      })
  }

  const deleteToDo = (toDOId: string) =>{
    setTodos((prevToDo)=>{
      return prevToDo.filter(todo => todo.id !== toDOId)
    })
  }

  return (
    <div>
      <NewToDo onAddToDo={addingToDoHandler} />
     <ToDos items={todos} onRemoveToDo={deleteToDo}/>
    </div>
  );
}

export default App;
