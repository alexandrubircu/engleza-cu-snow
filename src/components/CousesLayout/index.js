import React, { useState, useRef } from 'react';

const CoursesLayout = ({children}) => {
    const [activeDropdown, setActiveDropdown] = useState("dropdownContent1"); 
    const [stopAnimation, setStopAnimation] = useState(false);
    const blockOne = useRef();
    const blockTwo = useRef();
    const blockThree = useRef();
    const blockFour = useRef();
    const toggleDropdown = (id) => {
      setActiveDropdown('open');
      setStopAnimation(true);
      setTimeout(() => {
        setActiveDropdown(activeDropdown === id ? null : id)
      }, activeDropdown == null ? 50 : 500)
      setTimeout(() => {
        setStopAnimation(false);
      }, 450)
    };
    const childrenWithProps = React.Children.map(children, child =>
        React.cloneElement(child, { activeDropdown, blockOne, blockTwo, blockThree, blockFour, stopAnimation, toggleDropdown })
      );    
    return(
        <>
            {childrenWithProps}
        </>
        
    )
}
export default CoursesLayout;
