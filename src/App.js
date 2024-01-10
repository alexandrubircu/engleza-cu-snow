import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './containers/MainPage'
import ToeflCourse from './containers/ToeflCourse'
import CoursesA1A2 from './containers/CoursesA1-A2'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='ToeflCourse' element={<ToeflCourse/>}/>
          <Route path='CoursesA1-A2' element={<CoursesA1A2/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
