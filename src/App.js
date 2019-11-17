import React from 'react';
import './App.css';
import ImageSlider from './container/image-slider/image-slider';

function App() {
  const REACT_VERSION = React.version;
  console.log(REACT_VERSION);
  return (
    <div className="App">
      <ImageSlider/>
    </div>
  );
}

export default App;
