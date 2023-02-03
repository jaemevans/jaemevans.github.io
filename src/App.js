import './App.css';
import React from 'react'
import Homepage from './Components/Homepage';
import Navigation from './Components/Shared/Navigation';

function App() {
  return (
    <div className='wrapper'>
      <div className="b">
      <Navigation ></Navigation>
     </div>
     <div className="a">
      <Homepage></Homepage>
      </div>
      </div>
  );
}

export default App;



