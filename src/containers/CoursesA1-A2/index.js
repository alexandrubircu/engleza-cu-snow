import React, { useState } from "react";
import './styles.css';
import CoursesButton from '../../assets/images/CoursesButton.png'
import A1_1Image from '../../assets/images/A1.1Image.png'

const CoursesA1A2 = () => {
    const [value, setValue] = useState(0);
    const showcourse = () => {
        switch(value){
            case (0):
                return(
                    <div className="A1_A2infoCoursesBlock">
                        <img src={A1_1Image}/>
                        <div className="A1_A2infoContent">
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
                )
            case (1):
                return(
                    <div className="A1_A2infoCoursesBlock">
                        <img src={A1_1Image}/>
                        <div className="A1_A2infoContent">
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
                )    
            case(2):
                return(
                    <div className="A1_A2infoCoursesBlock">
                        <img src={A1_1Image}/>
                        <div className="A1_A2infoContent">
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
                )
            case(3):
                return(
                    <div className="A1_A2infoCoursesBlock">
                        <img src={A1_1Image}/>
                        <div className="A1_A2infoContent">
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
                )
        default :
                    return;
                }
    }
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
                            <button className="coursesA1A2ButtonMore" onClick={() => setValue(0)}><img src={CoursesButton} alt='' style={value === 0 ? {transform:'rotate(180deg)'} : null}/></button>
                        </div>
                    </div>
                   
                    <div className="coursesA1A2WhiteTicket">
                    <h2>Cursul</h2>
                        <p>A1.1</p>
                        <p>DURATA: 21 de zile</p>
                        <p>3 150 MDL / 160 EUR</p>
                        <div className="A1_A2TiketButton">
                            <button className="coursesA1A2ButtonPink">MAKE OFFER</button>
                            <button className="coursesA1A2ButtonMore" onClick={() => setValue(1)}><img src={CoursesButton} alt='' style={value === 1 ? {transform:'rotate(180deg)'} : null}/></button>
                        </div>
                    </div>

                    <div className="coursesA1A2YellowTicket">
                        <h2>Cursul</h2>
                        <p>A1.1</p>
                        <p>DURATA: 21 de zile</p>
                        <p>3 150 MDL / 160 EUR</p>
                        <div className="A1_A2TiketButton">
                            <button className="coursesA1A2ButtonWhite">MAKE OFFER</button>
                            <button className="coursesA1A2ButtonMore" onClick={() => setValue(2)}><img src={CoursesButton} alt='' style={value === 2 ? {transform:'rotate(180deg)'} : null}/></button>
                        </div>
                    </div>
                   
                    <div className="coursesA1A2WhiteTicket">
                    <h2>Cursul</h2>
                        <p>A1.1</p>
                        <p>DURATA: 21 de zile</p>
                        <p>3 150 MDL / 160 EUR</p>
                        <div className="A1_A2TiketButton">
                            <button className="coursesA1A2ButtonPink">MAKE OFFER</button>
                            <button className="coursesA1A2ButtonMore" onClick={() => setValue(3)}><img src={CoursesButton} alt='' style={value === 3 ? {transform:'rotate(180deg)'} : null}/></button>
                        </div>
                    </div>

                </div>
                {/* infoblock */}
                {showcourse()}
            </div>
        </div>
    )
}
export default CoursesA1A2;
