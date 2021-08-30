import React from 'react';
import './App.css';
import Reviews from './Reviews';
import Rating from './Rating';
import Analysis from './Analysis';
import Sidebar from './Sidebar'
import Visitors from './Visitors';



class App extends React.Component {
  render() { 
  return (
    <div className="App">
      <div className="left">
        <Sidebar/>
      </div>
      <div className="right">
        <Reviews/>
        <Rating/>
        <Analysis/>
        <Visitors/>
      </div>
    </div>
  );
}
}


export default App;