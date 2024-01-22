import React, {useRef} from 'react';
import './styles.css';
import MainBlock from '../../components/MainBlock'
import ExpereanceBlock from '../../components/ExpereanceBlock'
import CoursesBlock from '../../components/CoursesBlock'
import WhyBlock from '../../components/WhyBlock'
import Footer from '../../components/Footer'
import ReviewsBlock from '../../components/ReviewsBlock'

function App() {
  const targetElementRef = useRef(null);

  const scrollToElement = () => {
    if (targetElementRef && targetElementRef.current) {
      targetElementRef.current.scrollIntoView(
        window.innerHeight < 840 ?
          { behavior: 'smooth', block: 'start' } :
          { behavior: 'smooth', block: 'center' }
        );
    }
  }

  return (
    <div className='mainWrapper'>
      <MainBlock scrollToElement={scrollToElement}/>
      {/* <ExpereanceBlock/> */}
      <CoursesBlock targetElementRef={targetElementRef}/>
      <WhyBlock/>
      <ReviewsBlock/>
      <Footer/>
    </div>
  );
}

export default App;
