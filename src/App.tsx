import React from 'react';
import ToDos from './components/ToDos';
import todo from './models/todo';

function App() {

  const todos = [
    new todo('read a book'), new todo('learn react')
  ]
  return (
    <div>
     <ToDos items={todos}/>
    </div>
  );
}

export default App;
