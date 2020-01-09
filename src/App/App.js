import React from 'react';

import Portal from '../Portal/index.';

import './App.css';
import Lesson from '../Context';


function App() {
  return (
    <div className="App">

      /*portal*/
      <Portal>
        Portal Children
      </Portal>

      /*context*/
      <Lesson/>

    </div>
  );
}

export default App;
