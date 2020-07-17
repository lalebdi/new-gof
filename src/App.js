import React from 'react';
import './App.css';
import QandA from './components/QandA'
import CustomizedAccordions from './components/CustomizedAccordions'
import DenseAppBar from './components/DenseAppBar'



function App() {
  return (
    <div className="App">
      <DenseAppBar />
      <QandA />
      <CustomizedAccordions />
    </div>
  );
}

export default App;
