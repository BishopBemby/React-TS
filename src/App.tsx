import React from 'react';
import ToDos from './components/ToDos';

function App() {
  return (
    <div>
     <ToDos items={['read book', 'learn react']}/>
    </div>
  );
}

export default App;
