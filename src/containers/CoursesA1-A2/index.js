import React from 'react';
import './styles.css';
import CoursesButton from '../../assets/images/CoursesButton.png'
import A1_1Image from '../../assets/images/A1.1Image.png'
import CoursesLayout from '../../components/CousesLayout';

const CoursesA1A2 = () => {
    const ChildrenCourses = ({activeDropdown, blockOne, blockTwo, blockThree, blockFour, stopAnimation, toggleDropdown}) => {
        return(
            <div className="coursesA1A2">
                <h1>Cursurile <span>A1-A2</span></h1>
                <div className="coursesA1A2Content">
                    <div className="coursesA1A2Ticket">
                    
                        <div className="coursesA1A2YellowTicket">
                            <h2>Cursul</h2>
                            <p>A1.1</p>
                            <p>DURATA: 21 de zile</p>
                            <p>3 150 MDL / 160 EUR</p>
                            <div className="A1_A2TiketButton">
                                <button className="coursesA1A2ButtonWhite">MAKE OFFER</button>
                                <button 
                                    style={activeDropdown === 'dropdownContent1' ? {transform: 'rotate(180deg)'} : {transform: 'rotate(0deg)'}}
                                    disabled={stopAnimation} 
                                    onClick={() => toggleDropdown('dropdownContent1')} 
                                    className="coursesA1A2ButtonMore"
                                >
                                    <img src={CoursesButton} alt=''/>
                                </button>
                            </div>
                        </div>
                    
                        <div className="coursesA1A2WhiteTicket">
                        <h2>Cursul</h2>
                            <p>A1.1</p>
                            <p>DURATA: 21 de zile</p>
                            <p>3 150 MDL / 160 EUR</p>
                            <div className="A1_A2TiketButton">
                            <button className="coursesA1A2ButtonPink">MAKE OFFER</button>
                            <button 
                                style={activeDropdown === 'dropdownContent2' ? {transform: 'rotate(180deg)'} : {transform: 'rotate(0deg)'}} 
                                disabled={stopAnimation} 
                                onClick={() => toggleDropdown('dropdownContent2')} 
                                className="coursesA1A2ButtonMore"
                            >
                                <img src={CoursesButton} alt=''/>
                            </button>
                            </div>
                        </div>

                        <div className="coursesA1A2YellowTicket">
                            <h2>Cursul</h2>
                            <p>A1.1</p>
                            <p>DURATA: 21 de zile</p>
                            <p>3 150 MDL / 160 EUR</p>
                            <div className="A1_A2TiketButton">
                            <button className="coursesA1A2ButtonWhite">MAKE OFFER</button>
                            <button 
                                style={activeDropdown === 'dropdownContent3' ? {transform: 'rotate(180deg)'} : {transform: 'rotate(0deg)'}} 
                                disabled={stopAnimation}
                                onClick={() => toggleDropdown('dropdownContent3')}
                                className="coursesA1A2ButtonMore"
                            >
                                    <img src={CoursesButton} alt=''/>
                            </button>
                            </div>
                        </div>
                    
                        <div className="coursesA1A2WhiteTicket">
                        <h2>Cursul</h2>
                            <p>A1.1</p>
                            <p>DURATA: 21 de zile</p>
                            <p>3 150 MDL / 160 EUR</p>
                            <div className="A1_A2TiketButton">
                            <button className="coursesA1A2ButtonPink">MAKE OFFER</button>
                            <button
                                style={activeDropdown === 'dropdownContent4' ? {transform: 'rotate(180deg)'} : {transform: 'rotate(0deg)'}} 
                                disabled={stopAnimation} 
                                onClick={() => toggleDropdown('dropdownContent4')} 
                                className="coursesA1A2ButtonMore"
                            >
                                <img src={CoursesButton} alt=''/>
                            </button>
                            </div>
                        </div>

                    </div>
                    {/* infoblock */}
                    <div className='infoCoursesBlock'>
                    <p>Snow</p>
                    <div ref={blockOne} id="dropdownContent1" className={`dropdown-content ${activeDropdown === 'dropdownContent1' ? 'show1' : ''}`}>
                        <div className='A1_1infoContent'>
                            <img src={A1_1Image} alt=''/>
                            <div className="A1_A2TextBlock">
                                <div className="A1_A2infoTitle"><p>A1.1</p></div>
                                <div className="A1_A2infoText">
                                    <p>Vocabular de bază: Termeni și expresii esențiale pentru a comunica în diverse contexte, cum ar fi să îți prezintiți, să întrebați direcții, să faceți cumpărături etc.
                                        <br/>Gramatică elementală: Înțelegerea unor concepte simple de gramatică, cum ar fi structura propozițiilor, verbele de bază, conjugările, articolele, pronumele etc.
                                        <br/>Audiție și vorbire: Exerciții pentru îmbunătățirea înțelegerii a ceea ce se vorbește și pentru a câștiga încredere în a vorbi în limba respectivă.
                                        <br/>Lectură și scriere de bază: Introducere în citirea și scrierea limbii, de obicei cu accent pe cuvinte simple și propoziții uzuale.
                                        Cultură și aspecte sociale: Unele cursuri pot include și aspecte culturale ale țării asociate cu limba învățată.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div ref={blockTwo} id="dropdownContent2" className={`dropdown-content ${activeDropdown === 'dropdownContent2' ? 'show2' : ''}`}>
                        <div className='A1_2infoContent'>
                            <img src={A1_1Image} alt=''/>
                            <div className="A1_A2TextBlock">
                                <div className="A1_A2infoTitle"><p>A1.2</p></div>
                                <div className="A1_A2infoText">
                                    <p>Vocabular de bază: Termeni și expresii esențiale pentru a comunica în diverse contexte, cum ar fi să îți prezintiți, să întrebați direcții, să faceți cumpărături etc.
                                        <br/>Gramatică elementală: Înțelegerea unor concepte simple de gramatică, cum ar fi structura propozițiilor, verbele de bază, conjugările, articolele, pronumele etc.
                                        <br/>Audiție și vorbire: Exerciții pentru îmbunătățirea înțelegerii a ceea ce se vorbește și pentru a câștiga încredere în a vorbi în limba respectivă.
                                        <br/>Lectură și scriere de bază: Introducere în citirea și scrierea limbii, de obicei cu accent pe cuvinte simple și propoziții uzuale.
                                        Cultură și aspecte sociale: Unele cursuri pot include și aspecte culturale ale țării asociate cu limba învățată.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div ref={blockThree} id="dropdownContent3" className={`dropdown-content ${activeDropdown === 'dropdownContent3' ? 'show3' : ''}`}>
                        <div className='A2_1infoContent'>
                            <img src={A1_1Image} alt=''/>
                            <div className="A1_A2TextBlock">
                                <div className="A1_A2infoTitle"><p>A2.1</p></div>
                                <div className="A1_A2infoText">
                                    <p>Vocabular de bază: Termeni și expresii esențiale pentru a comunica în diverse contexte, cum ar fi să îți prezintiți, să întrebați direcții, să faceți cumpărături etc.
                                        <br/>Gramatică elementală: Înțelegerea unor concepte simple de gramatică, cum ar fi structura propozițiilor, verbele de bază, conjugările, articolele, pronumele etc.
                                        <br/>Audiție și vorbire: Exerciții pentru îmbunătățirea înțelegerii a ceea ce se vorbește și pentru a câștiga încredere în a vorbi în limba respectivă.
                                        <br/>Lectură și scriere de bază: Introducere în citirea și scrierea limbii, de obicei cu accent pe cuvinte simple și propoziții uzuale.
                                        Cultură și aspecte sociale: Unele cursuri pot include și aspecte culturale ale țării asociate cu limba învățată.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div ref={blockFour} id="dropdownContent4" className={`dropdown-content ${activeDropdown === 'dropdownContent4' ? 'show4' : ''}`}>
                        <div className='A2_2infoContent'>
                            <img src={A1_1Image} alt=''/>
                            <div className="A1_A2TextBlock">
                                <div className="A1_A2infoTitle"><p>A2.2</p></div>
                                <div className="A1_A2infoText">
                                    <p>Vocabular de bază: Termeni și expresii esențiale pentru a comunica în diverse contexte, cum ar fi să îți prezintiți, să întrebați direcții, să faceți cumpărături etc.
                                        <br/>Gramatică elementală: Înțelegerea unor concepte simple de gramatică, cum ar fi structura propozițiilor, verbele de bază, conjugările, articolele, pronumele etc.
                                        <br/>Audiție și vorbire: Exerciții pentru îmbunătățirea înțelegerii a ceea ce se vorbește și pentru a câștiga încredere în a vorbi în limba respectivă.
                                        <br/>Lectură și scriere de bază: Introducere în citirea și scrierea limbii, de obicei cu accent pe cuvinte simple și propoziții uzuale.
                                        Cultură și aspecte sociale: Unele cursuri pot include și aspecte culturale ale țării asociate cu limba învățată.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <CoursesLayout>
            <ChildrenCourses/>
        </CoursesLayout>
        
    )
}
export default CoursesA1A2;
