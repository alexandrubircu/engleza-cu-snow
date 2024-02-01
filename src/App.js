import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './containers/MainPage'
import ToeflCourse from './containers/ToeflCourse'
import Courses from './containers/Courses'
import TravelGuide from './containers/TravelGuide'
import CambridgeCourse from './containers/CambridgeCourse'
import IndividualCourse from './containers/IndividualCourse'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/engleza-cu-snow' element={<MainPage/>}/>
          <Route path='/ToeflCourse' element={<ToeflCourse/>}/>
          <Route path='/CoursesA1-A2' element={<Courses/>}/>
          <Route path='/CoursesB1-B2' element={<Courses/>}/>
          <Route path='/CoursesC1-C2' element={<Courses/>}/>
          <Route path='/TravelGuide' element={<TravelGuide/>}/>
          <Route path='/CambridgeCourse' element={<CambridgeCourse/>}/>
          <Route path='/IndividualCourse' element={<IndividualCourse/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
