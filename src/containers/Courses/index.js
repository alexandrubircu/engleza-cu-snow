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
        setActiveDropdown(cours[0]?.courses[0]?.name); 
    }, [location]);

    return (
        <div className="coursesAC">
            <h1>Cursurile <span>{coursData.name}</span></h1>
            <div className="coursesACContent">
                <div className="coursesACTicket">
                    {coursData?.courses?.map(item => (
                        <div key={item.name} className={`coursesAC${item.color}Ticket`}>
                            <h2>Cursul</h2>
                            <p>{item.name}</p>
                            <p>{item.duration}</p>
                            <p>{item.price}</p>
                            <div className="ACTiketButton">
                                <button className={`coursesACButton${item.buttonColor}`}>MAKE OFFER</button>
                                <button 
                                    style={activeDropdown === item.name ? {transform: 'rotate(180deg)'} : {transform: 'rotate(0deg)'}}
                                    disabled={stopAnimation} 
                                    onClick={() => toggleDropdown(item.name)} 
                                    className="coursesACButtonMore"
                                >
                                    <img src={CoursesButton} alt=''/>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* infoblock */}
                <div className='infoCoursesBlock'>
                    <p>Snow</p>
                    {coursData?.coursesText?.map(item => (
                        <div key={item.name} id="dropdownContent" className={`dropdown-content ${activeDropdown === item.name ? 'show1' : ''}`}>
                            <div className='ACinfoContent'>
                                <img src={require(`../../assets/images/${item.img}`)} alt=''/>
                                <div className="ACTextBlock">
                                    <div className="ACinfoTitle"><p>{item.name}</p></div>
                                    <div className="ACinfoText">
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Courses;
