import NewToDo from "./components/NewToDo";
import ToDos from "./components/ToDos";
import ToDosProvider from "./store/TodoContext";

function App() {
  return (
    <ToDosProvider>
      <NewToDo />
      <ToDos />
    </ToDosProvider>
  );
}

export default App;
