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
                        <img src={A1_1Image} alt=''/>
                        <div className="A1_A2ContentBlock">
                            <div className="A1_A2Title">
                                <p>A1.1</p>
                            </div>
                            <div className="A1_A2Text">
                                <p>Cursul include:<br/>
                                    Formatul lecțiilor / Online<br/>
                                    După absolvire / Certificat<br/>
                                    Manual / Format Digital<br/>
                                    Studenți / = 10<br/>
                                    Garanție / 100%
                                </p>
                            </div>
                        </div>
                    </div>
                )
            case (1):
                return(
                    <div className="A1_A2infoCoursesBlock">
                        <img src={A1_1Image} alt=''/>
                        <div className="A1_A2ContentBlock">
                            <div className="A1_A2Title">
                                <p>A1.2</p>
                            </div>
                            <div className="A1_A2Text">
                                <p>Cursul include:<br/>
                                    Formatul lecțiilor / Online<br/>
                                    După absolvire / Certificat<br/>
                                    Manual / Format Digital<br/>
                                    Studenți / = 10<br/>
                                    Garanție / 100%
                                </p>
                            </div>
                        </div>
                    </div>
                )    
            case(2):
                return(
                    <div className="A1_A2infoCoursesBlock">
                        <img src={A1_1Image} alt=''/>
                        <div className="A1_A2ContentBlock">
                            <div className="A1_A2Title">
                                <p>A2.1</p>
                            </div>
                            <div className="A1_A2Text">
                                <p>Cursul include:<br/>
                                    Formatul lecțiilor / Online<br/>
                                    După absolvire / Certificat<br/>
                                    Manual / Format Digital<br/>
                                    Studenți / = 10<br/>
                                    Garanție / 100%
                                </p>
                            </div>
                        </div>
                    </div>
                )
            case(3):
                return(
                    <div className="A1_A2infoCoursesBlock">
                        <img src={A1_1Image} alt=''/>
                        <div className="A1_A2ContentBlock">
                            <div className="A1_A2Title">
                                <p>A2.2</p>
                            </div>
                            <div className="A1_A2Text">
                                <p>Cursul include:<br/>
                                    Formatul lecțiilor / Online<br/>
                                    După absolvire / Certificat<br/>
                                    Manual / Format Digital<br/>
                                    Studenți / = 10<br/>
                                    Garanție / 100%
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
        <div className="A1_A2Block">
            <div className="A1_A2wrapper">
                <div className="A1_A2titleBlock">
                    <p>Cursurile <span className="A1_A2">A1-A2</span></p>
                </div>
                <div className="A1_A2_ContentBlock">
                    <div className="A1_A2coursesBlock">
                        <div className="A1_A2YelowTicket">
                            <h2>Cursul</h2>
                            <p>A1.1</p>
                            <p>DURATA: 21 de zile</p>
                            <p>3 150 MDL / 160 EUR</p>
                            <div className="A1_A2TiketButton">
                                <button className="A1_A2ButtonWhite">MAKE OFFER</button>
                                <button className="A1_A2ButtonMore" onClick={() => setValue(0)}><img src={CoursesButton} alt='' style={value === 0 ? {transform:'rotate(180deg)'} : null}/></button>
                            </div>
                        </div>
                        <div className="A1_A2WhiteTicket">
                            <h2>Cursul</h2>
                            <p>A1.2</p>
                            <p>DURATA: 21 de zile</p>
                            <p>3 150 MDL / 160 EUR</p>
                            <div className="A1_A2TiketButton">
                                <button className="A1_A2ButtonPink">MAKE OFFER</button>
                                <button className="A1_A2ButtonMore" onClick={() => setValue(1)}><img src={CoursesButton} alt='' style={value === 1 ? {transform:'rotate(180deg)'} : null}/></button>
                            </div>
                        </div>
                        <div className="A1_A2YelowTicket">
                            <h2>Cursul</h2>
                            <p>A2.1</p>
                            <p>DURATA: 21 de zile</p>
                            <p>3 150 MDL / 160 EUR</p>
                            <div className="A1_A2TiketButton">
                                <button className="A1_A2ButtonWhite">MAKE OFFER</button>
                                <button className="A1_A2ButtonMore" onClick={() => setValue(2)}><img src={CoursesButton} alt='' style={value === 2 ? {transform:'rotate(180deg)'} : null}/></button>
                            </div>
                        </div>
                        <div className="A1_A2WhiteTicket">
                            <h2>Cursul</h2>
                            <p>A2.2</p>
                            <p>DURATA: 21 de zile</p>
                            <p>3 150 MDL / 160 EUR</p>
                            <div className="A1_A2TiketButton">
                                <button className="A1_A2ButtonPink">MAKE OFFER</button>
                                <button className="A1_A2ButtonMore" onClick={() => setValue(3)}><img src={CoursesButton} alt='' style={value === 3 ? {transform:'rotate(180deg)'} : null}/></button>
                            </div>
                        </div>
                    </div>
                    {showcourse()}
                </div>
            </div>
        </div>
    )
}
export default CoursesA1A2;