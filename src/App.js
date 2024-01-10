import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './containers/MainPage'
import ToeflCourse from './containers/ToeflCourse'
import CoursesA1A2 from './containers/CoursesA1-A2'
import CoursesB1B2 from './containers/CoursesB1-B2'
import CoursesC1C2 from './containers/CoursesC1-C2'
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
          <Route path='/CoursesA1-A2' element={<CoursesA1A2/>}/>
          <Route path='/CoursesB1-B2' element={<CoursesB1B2/>}/>
          <Route path='/CoursesC1-C2' element={<CoursesC1C2/>}/>
          <Route path='/TravelGuide' element={<TravelGuide/>}/>
          <Route path='/CambridgeCourse' element={<CambridgeCourse/>}/>
          <Route path='/IndividualCourse' element={<IndividualCourse/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
