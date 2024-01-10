import React from 'react';
import './styles.css';
import MainBlock from '../../components/MainBlock'
import ExpereanceBlock from '../../components/ExpereanceBlock'
import CoursesBlock from '../../components/CoursesBlock'


function App() {

  return (
    <div className='mainWrapper'>
      <MainBlock/>
      <ExpereanceBlock/>
      <CoursesBlock/>
    </div>
  );
}

export default App;
