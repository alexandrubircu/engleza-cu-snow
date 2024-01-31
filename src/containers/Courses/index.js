import React, { useEffect, useState } from 'react';
import './styles.css';
import { useLocation } from 'react-router-dom';
import CoursesButton from '../../assets/images/CoursesButton.png'
import data from "../../data/courses.json"

const Courses = () => {
    const [activeDropdown, setActiveDropdown] = useState(); 
    const [stopAnimation, setStopAnimation] = useState(false);
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
    const [coursData, setCoursData] = useState({});
    const location = useLocation().pathname;

    useEffect(() => {
        const cours = data.courses.filter((item) => item.url === location);
        setCoursData(cours[0]);
        setActiveDropdown(cours[0].courses[0].name);
        
    }, [])

    return(
        <div className="coursesA1A2">
            <h1>Cursurile <span>{coursData.name}</span></h1>
            <div className="coursesA1A2Content">
                <div className="coursesA1A2Ticket">
                    {coursData?.courses?.map(item => {
                        return(
                            <div className={`coursesA1A2${item.color}Ticket`}>
                                <h2>Cursul</h2>
                                <p>{item.name}</p>
                                <p>{item.duration}</p>
                                <p>{item.price}</p>
                                <div className="A1_A2TiketButton">
                                    <button className={`coursesA1A2Button${item.buttonColor}`}>MAKE OFFER</button>
                                    <button 
                                        style={activeDropdown === item.name ? {transform: 'rotate(180deg)'} : {transform: 'rotate(0deg)'}}
                                        disabled={stopAnimation} 
                                        onClick={() => toggleDropdown(item.name)} 
                                        className="coursesA1A2ButtonMore"
                                    >
                                        <img src={CoursesButton} alt=''/>
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
                
                {/* infoblock */}
                <div className='infoCoursesBlock'>
                <p>Snow</p>
                {coursData?.coursesText?.map(item => {
                    return(
                        <div id="dropdownContent1" className={`dropdown-content ${activeDropdown === item.name ? 'show1' : ''}`}>
                            <div className='A1_1infoContent'>
                                <img src={require(`../../assets/images/${item.img}`)} alt=''/>
                                <div className="A1_A2TextBlock">
                                    <div className="A1_A2infoTitle"><p>{item.name}</p></div>
                                    <div className="A1_A2infoText">
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
        </div>
    )
}

export default Courses;
