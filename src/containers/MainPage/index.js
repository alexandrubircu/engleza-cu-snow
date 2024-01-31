import React, {useRef, useState , useEffect} from 'react';
import './styles.css';
import MainBlock from '../../components/MainBlock'
import ExpereanceBlock from '../../components/ExpereanceBlock'
import CoursesBlock from '../../components/CoursesBlock'
import WhyBlock from '../../components/WhyBlock'
import Footer from '../../components/Footer'
import ReviewsBlock from '../../components/ReviewsBlock'
import buttonToTop from '../../assets/images/buttonToTop.svg'

function App() {
  const[scrollTop, setScrollTop] = useState(0)
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const handleScroll = () => {
    setScrollTop(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
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
      <ExpereanceBlock/>
      <CoursesBlock targetElementRef={targetElementRef}/>
      <WhyBlock/>
      <ReviewsBlock/>
      <Footer/>
      {scrollTop >= 50 && 
      <button className='buttonToTop' onClick={scrollToTop}>
        <img src={buttonToTop} alt=''/>
      </button>}
    </div>
  );
}

export default App;
